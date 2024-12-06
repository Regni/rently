<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

//For testing JSONBin:
// import { itemsApi } from './services/testJSONBin';
// const data = itemsApi.fetchItems()
// console.log(data)
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
