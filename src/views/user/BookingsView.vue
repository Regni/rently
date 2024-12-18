<script setup>
import { useBookingsStore } from '@/stores/bookings'
import { useItemsStore } from '@/stores/items'
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'

const usersStore = useUsersStore()
const itemsStore = useItemsStore()
const bookingsStore = useBookingsStore()

// Active bookings (bookings for items the user is currently renting)
const activeItems = computed(() => {
  const activeUserId = usersStore.activeUser?.id
  console.log('active user id', activeUserId)

  // Filter bookings where the current user is the renter
  const userActiveBookings = bookingsStore.bookings.filter(
    (booking) => booking.renter === activeUserId && new Date(booking.endDate) >= new Date(),
  ) // Only future/current bookings
  console.log('aktive bokningar', userActiveBookings)

  // Map bookings to full item details
  return userActiveBookings.map((booking) =>
    itemsStore.items.find((item) => item.id === booking.item),
  )
})

// Booking history (past bookings for items the user has rented)
const historyItems = computed(() => {
  const activeUserId = usersStore.activeUser?.id

  // Filter bookings where the current user was the renter
  const userPastBookings = bookingsStore.bookings.filter(
    (booking) => booking.renter === activeUserId && new Date(booking.endDate) < new Date(),
  ) // Only past bookings

  // Map bookings to full item details
  return userPastBookings.map((booking) =>
    itemsStore.items.find((item) => item.id === booking.item),
  )
})
</script>

<template>
  <div class="container">
    <section class="active-bookings bookings">
      <h2>Active Bookings</h2>
      <div class="item-container">
        <p v-if="activeItems.length === 0">You have no active bookings.</p>
        <div v-for="item in activeItems" key="item.id">
          <router-link :to="{ name: 'item-details', params: { id: item.id } }">
            <div class="item-card">
              <img class="item-image" :src="item.images[0]" :alt="item.name" />
              <div class="item-details">
                <h3 class="item-title">{{ item.name }}</h3>
                <p><strong>Price:</strong> {{ item.price }} kr</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
    </section>
    <section class="bookings">
      <h2>Booking History</h2>
      <div class="item-container">
        <p v-if="historyItems.length === 0">You have no booking history.</p>
        <div v-for="item in historyItems" key="item.id">
          <router-link :to="{ name: 'item-details', params: { id: item.id } }">
            <div class="booking-history item-card">
              <img class="item-image" :src="item.images[0]" :alt="item.name" />
              <div class="item-details">
                <h3 class="item-title">{{ item.name }}</h3>
              </div>
            </div></router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
}

.bookings {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;
}

.item-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.booking-history {
  opacity: 0.7;
}

h2 {
  font-family: var(--font-headings);
  margin: 1em;
  color: var(--color-h2);
  margin-bottom: 2em;
}

.item-card {
  background-color: var(--color-third);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  border-radius: 8px;
  padding: 1.5rem;
  width: auto;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 1em;
}

.item-card:hover {
  opacity: 0.8;
  cursor: pointer;
}

h3 {
  font-family: var(--font-links);
  color: var(--color-secondary);
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}

.btn {
  font-size: 1.2em;
  margin: 1em 0;
}
</style>
