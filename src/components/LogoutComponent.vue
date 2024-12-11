<script setup>
import { useRouter } from 'vue-router'
// import { useUsersStore } from '@/stores/users'
// const usersStore = useUsersStore()

const router = useRouter()

const handleLogout = async () => {
  //   await usersStore.logoutUser()
  alert('Logged out successfully!')
  router.push({ name: 'home' })
}
</script>

<template>
  <button class="btn btn-logout" @click="handleLogout">Logout</button>
</template>

<style scoped>
.btn-logout {
  background-color: #c94022;
  font-family: var(--font-links);
  font-size: 1rem;
}

.btn-logout:hover {
  background-color: #bf897d;
}
</style>
