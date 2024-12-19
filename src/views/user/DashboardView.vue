<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'

const route = useRoute()
const router = useRouter()
const usersStore = useUsersStore()

// Computed property to determine which user's name to display
const activeUserName = computed(() => {
  return usersStore.activeUser?.firstname
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
</script>

<template>
  <section class="container">
    <div class="side-bar">
      <h2>{{ activeUserName }}'s Profile</h2>
      <button class="btn" @click="toggleView">{{ buttonText }}</button>
      <!-- no functionality yet -->
      <button class="btn">Account Settings</button>
      <button class="delete-acc">Delete Account</button>
    </div>
    <div class="vl"></div>
    <RouterView />
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}

.side-bar {
  width: 20%;
  height: 90vh;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  padding: 3em 0;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-secondary);
  margin: 30px;
}

.btn {
  margin: 5px 30px;
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

@media screen and (max-width: 750px) {
  .container {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .side-bar {
    width: 100%;
    height: auto;
    align-self: center;
    padding: 1em;
    margin-bottom: 2em;
    flex-direction: row;
    padding: 0;
    align-items: center;
    gap: 10px;
  }

  .btn {
    height: 35px;
    width: 100%;
    padding: 0;
    margin: 5px 0px;
  }

  .vl {
    border-top: 3px solid var(--color-secondary);
    height: 0;
    width: 80%;
  }

  .delete-acc {
    padding: 0;
    width: 100%;
    height: 35px;
    margin: 5px 0px;
  }
}
</style>
