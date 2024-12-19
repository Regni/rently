<script setup>
import { useItemsStore } from '@/stores/items'
import { useUsersStore } from '@/stores/users'
import { useBookingsStore } from '@/stores/bookings'
import { computed, onUnmounted } from 'vue'
import { useToast } from 'vue-toastification'
//THIS VIEW WAS CREATED BY ANNA-SARA, ELLEN ONLY ADDED THE DELETE ITEM FUNCTIONALITY

// Vue toastification package for toast notifications
const toast = useToast()
const itemsStore = useItemsStore()
const usersStore = useUsersStore()
const bookingsStore = useBookingsStore()

const itemsStoreError = computed(() => itemsStore.error)

const items = computed(() => {
  const activeUserId = usersStore.activeUser?.id
  return itemsStore.items.filter((item) => item.owner === activeUserId)
})

//clear error message when user navigates away
onUnmounted(() => {
  itemsStore.error = null
})

// function to check items rent history and current rental status
const getItemRentHistory = (id) => {
  // Filter to get all past rentals (endDate is in the past)
  const pastRentals = bookingsStore.bookings.filter(
    (booking) => booking.item === id && new Date(booking.endDate) < Date.now(),
  )
  // Check if the item is currently rented out (endDate is in the future or today)
  const isRentedOut = bookingsStore.bookings.some(
    (booking) => booking.item === id && new Date(booking.endDate) >= Date.now(),
  )
  return {
    pastRentals,
    isRentedOut,
  }
}

const deleteListing = async (id) => {
  const itemRentHistory = getItemRentHistory(id)
  if (itemRentHistory.isRentedOut) {
    toast.error(`Since this item is rented out it can't be deleted`, {
      toastClassName: 'error-toast',
      timeout: 4000,
    })
    return
  }

  if (itemRentHistory.pastRentals.length > 0) {
    //add a promise all to delete all past rentals history
    await Promise.all(
      itemRentHistory.pastRentals.map((booking) => bookingsStore.deleteBooking(booking.id)),
    )
  }

  await itemsStore.deleteItem(id)
  if (itemsStoreError.value) {
    toast.error(`Could not delete listing: ${itemsStoreError.value} `, {
      toastClassName: 'error-toast',
      timeout: 4000,
    })
    return
  }
  toast.success('Listing deleted succesfully!', {
    toastClassName: 'success-toast',
    timeout: 2000,
  })
}
</script>
<template>
  <section class="listings">
    <h1>My Listings</h1>
    <div class="container">
      <p v-if="items.length === 0">You have no active listings.</p>
      <div class="card-container" v-for="item in items" :key="item.id">
        <router-link :to="{ name: 'item-details', params: { id: item.id } }">
          <div class="item-card">
            <img class="item-image" :src="item.images[0]" :alt="item.name" />
            <div class="item-details">
              <h3 class="item-title">{{ item.name }}</h3>
              <p><strong>Price: </strong> {{ item.price }} kr</p>
            </div>
          </div>
        </router-link>
        <button class="deleteListing-btn" @click.stop="deleteListing(item.id)">Delete</button>
      </div>
    </div>
    <router-link :to="{ name: 'create-item' }">
      <button class="btn">+ Add New Listing</button>
    </router-link>
  </section>
</template>
<style scoped>
.listings {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}
h1 {
  font-family: var(--font-headings);
  margin: 1em;
  color: var(--color-h2);
  font-size: 3em;
}
.item-image {
  margin-bottom: 1rem;
}
.card-container {
  position: relative;
}
h3 {
  font-family: var(--font-links);
  color: var(--color-secondary);
}
p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}
.deleteListing-btn {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(194, 77, 77);
  color: var(--color-btn-text);
  font-family: var(--font-links);
}
.deleteListing-btn:hover {
  background-color: rgb(198, 119, 119);
}
.btn {
  font-size: 1.2em;
  margin: 1em 0em 2em 0em;
}
</style>
