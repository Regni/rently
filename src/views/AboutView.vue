<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- simple with just some writing about us and sell our product -->
    <!-- img? -->
  </div>
</template>
<script setup>
import { useBookingsStore } from '@/stores/bookings'
const bookingsStore = useBookingsStore()
console.log(bookingsStore.bookings)
</script>
<style></style>
