<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import LogoutComponent from './LogoutComponent.vue'

const route = useRoute()
const usersStore = useUsersStore()

const activeUserEmail = computed(() => usersStore.activeUser?.email || '')
</script>
<template>
  <nav class="nav">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'items' }">Items</RouterLink>
    <RouterLink :to="{ name: 'contact-us' }">Contact Us</RouterLink>
    <RouterLink v-if="!activeUserEmail" :to="{ name: 'login', query: { from: route.fullPath } }"
      >Sign in</RouterLink
    >
    <router-link
      class="register-link"
      v-if="!activeUserEmail"
      :to="{ name: 'register', query: { from: route.fullPath } }"
      >Register</router-link
    >
    <LogoutComponent v-else />
  </nav>
</template>

<style scoped>
nav a.router-link-exact-active {
  background-color: var(--color-btn);
  color: #fff;
}

nav a {
  color: #fff;
  font-family: var(--font-links);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;
  margin-left: 0.2em;
}

nav a:hover {
  background-color: var(--color-btn-hover);
  color: #fff;
}

.register-link {
  background-color: #cccc39;
  color: var(--color-basic-text);
}
</style>
