<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { useToast } from 'vue-toastification'

const router = useRouter()
const usersStore = useUsersStore()

// Vue toastification package for toast notifications
const toast = useToast()

const handleLogout = async () => {
  await usersStore.logoutUser()
  toast.success('Logged out successfully!', {
    toastClassName: 'success-toast',
    timeout: 2000,
  })
  router.push({ name: 'home' })
}
</script>

<template>
  <button class="btn btn-logout" @click="handleLogout">Sign out</button>
</template>

<style scoped>
.btn-logout {
  background-color: #c94022;
  font-family: var(--font-links);
  font-size: 1rem;
}

.btn-logout:hover {
  background-color: #c45941;
}
</style>
