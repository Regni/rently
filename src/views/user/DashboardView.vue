<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users.js'
import { useItemsStore } from '@/stores/items'
import { useBookingsStore } from '@/stores/bookings'
import { useToast } from 'vue-toastification'

//THIS VIEW WAS CREATED BY ANNA-SARA, ELLEN ONLY ADDED THE DELETE ACCOUNT FUNCTIONALITY

// Vue toastification package for toast notifications
const toast = useToast()

const route = useRoute()
const router = useRouter()

const usersStore = useUsersStore()
const itemsStore = useItemsStore()
const bookingsStore = useBookingsStore()

const usersStoreError = computed(() => usersStore.error)
const itemsStoreError = computed(() => itemsStore.error)

//Anna-Saras computed code for "items" that I also needed (Ellen):
const ownedItems = computed(() => {
  const activeUserId = usersStore.activeUser?.id
  return itemsStore.items.filter((item) => item.owner === activeUserId)
})

// Check if owned items are rented out(Ellen)
const activeRentals = computed(() => {
  return ownedItems.value.filter((item) =>
    bookingsStore.bookings.some(
      (booking) => booking.item === item.id && new Date(booking.endDate) >= new Date(),
    ),
  )
})

//Part of Anna-Saras computed code for "bookings" that I also needed (Ellen):
const activeBookings = computed(() => {
  const activeUserId = usersStore.activeUser?.id

  // Filter bookings where the current user is the renter
  return bookingsStore.bookings.filter(
    (booking) => booking.renter === activeUserId && new Date(booking.endDate) >= Date.now(),
  )
})

// Computed property to determine which button text to display
const buttonText = computed(() => {
  return route.name === 'dashboard-listings' ? 'My Bookings' : 'My Listings'
})

// Function to toggle routes depending on the current route
const toggleView = () => {
  if (route.name === 'dashboard-listings') {
    router.push({ name: 'dashboard-bookings' })
  } else {
    router.push({ name: 'dashboard-listings' })
  }
}

// Function to delete account
const deleteAccount = async () => {
  try {
    //Prevent account deletion if user are currently renting or renting out items
    if (activeBookings.value.length > 0 || activeRentals.value.length > 0) {
      toast.error('Account cannot be deleted while you have active bookings or rentals.', {
        toastClassName: 'error-toast',
        timeout: 4000,
      })
      return
    }

    // Delete all listings before deleting account
    if (ownedItems.value.length > 0) {
      await Promise.all(ownedItems.value.map((item) => itemsStore.deleteItem(item.id)))

      //Check if there are any errors deleting items
      if (itemsStoreError.value) {
        console.log(itemsStoreError.value)
        toast.error(
          `An unexpected error occurred while deleting listings: ${itemsStoreError.value}`,
          { toastClassName: 'error-toast', timeout: 4000 },
        )
        return
      }
    }

    // Delete account
    await usersStore.deleteUser()
    if (usersStoreError.value) {
      toast.error(`Could not delete account: ${usersStoreError.value} `, {
        toastClassName: 'error-toast',
        timeout: 4000,
      })
      return
    }
    toast.success('Account deleted succesfully!', {
      toastClassName: 'success-toast',
      timeout: 2000,
    })
    router.push({ name: 'home' })
  } catch (err) {
    console.error('Unexpected error during account deletion:', err)
    toast.error('An unexpected error occurred. Please try again later.', {
      toastClassName: 'error-toast',
      timeout: 4000,
    })
  }
}
</script>

<template>
  <section class="container">
    <div class="side-bar">
      <h2>User's Profile</h2>
      <button class="btn" @click="toggleView">{{ buttonText }}</button>
      <button class="delete-acc" @click="deleteAccount">Delete Account</button>
    </div>
    <div class="vl"></div>
    <RouterView />
  </section>
</template>

<style scoped>
.container {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}

.side-bar {
  width: 20%;
  height: 90vh;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: 3em 0;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-secondary);
  margin: 30px;
}

.btn {
  margin: 0 30px;
  width: 12em;
}

.delete-acc {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(194, 77, 77);
  color: var(--color-btn-text);
  font-family: var(--font-links);
  width: 12em;
  margin: 0px 30px;
  margin-top: auto;
}

.delete-acc:hover {
  background-color: rgb(198, 119, 119);
}

.vl {
  border-left: 3px solid var(--color-secondary);
  height: 80%;
}
</style>
