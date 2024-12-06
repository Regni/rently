<script setup>
import { RouterLink } from 'vue-router'
import { useItemsStore } from '../stores/items.js'
import { useBookingsStore } from '../stores/bookings.js'

const storeItems = useItemsStore()
const bookingsStore = useBookingsStore()

// console.log(storeItems.items)
console.log()
const handleClick = () => {
  bookingsStore.updateBooking({
    id: 'B006',
    item: 'I001',
    renter: 'U023',
    startDate: '2024-01-20',
    endDate: '2024-01-25',
  })
}
</script>

<template>
  <div>
    <!-- background img -->
    <RouterLink :to="{ name: 'items' }"><button>renting</button></RouterLink>

    <RouterLink :to="{ name: 'create-item' }"><button>rentals</button></RouterLink>

    <button @click="handleClick">test</button>
    <!-- search bar which links to itemsview -->

    <!-- latest rent outs carousel-->

    <!-- users/reviews? -->
  </div>
</template>

<!-- "Rent Products": "Browse and book items for rent." "Rent Out Your Items": "Share your products and
start earning." -->
