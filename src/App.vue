<script setup>
import { RouterLink, RouterView } from 'vue-router'

//For testing JSONBin:
// import { itemsApi } from './services/testJSONBin';
// const data = itemsApi.fetchItems()
// console.log(data)
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'items' }">Items</RouterLink>
      <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
