<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <nav class="nav">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'items' }">Items</RouterLink>
    <RouterLink :to="{ name: 'contact-us' }">Contact Us</RouterLink>
    <RouterLink :to="{ name: 'login', query: { from: route.fullPath } }">Login</RouterLink>
  </nav>
</template>

<style scoped>
nav a.router-link-exact-active {
  background-color: #065f46;
  color: #fff;
}

nav a {
  color: white;
  font-family: var(--font-links);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;
}

nav a:hover {
  background-color: var(--color-btn-hover, #065f46);
  color: #fff;
}
</style>
