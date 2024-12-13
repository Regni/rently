<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

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
</script>

<template>
  <section class="container">
    <div class="side-bar">
      <h2>User's Profile</h2>
      <button class="btn" @click="toggleView">{{ buttonText }}</button>
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
  height: 90%;
  align-self: flex-start;
  padding: 3em 0;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-secondary);
  margin: 30px;
}

.btn {
  margin: 0 30px;
}

.vl {
  border-left: 3px solid var(--color-secondary);
  height: 80%;
}
</style>
