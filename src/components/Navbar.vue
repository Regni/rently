<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'items' }">Items</RouterLink>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
  </nav>
</template>
