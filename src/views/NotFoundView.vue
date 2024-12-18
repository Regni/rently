<script setup>
import { RouterLink } from 'vue-router'
import 'primeicons/primeicons.css'
</script>
<template>
  <section class="not-found-page">
    <i class="pi pi-exclamation-triangle icon"></i>
    <h1 class="title">404 Not Found</h1>
    <p class="message">This page does not exist</p>
    <RouterLink to="/" class="back-button">Go Back</RouterLink>
  </section>
</template>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 24rem;
  text-align: center;
}

.icon {
  font-size: 4.5rem;
  color: #fbbf24;
  margin-bottom: 1.25rem;
}

.title {
  font-size: 3.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.message {
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
}

.back-button {
  color: white;
  background-color: #047857;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.back-button:hover {
  background-color: #065f46;
}
</style>
