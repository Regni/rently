<script setup>
import { RouterLink } from 'vue-router'
import 'primeicons/primeicons.css'
</script>
<template>
  <section>
    <i class="pi pi-exclamation-triangle"></i>
    <h1>404 Page not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <RouterLink :to="{ name: 'home' }">Back to Home</RouterLink>
  </section>
</template>
