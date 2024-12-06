<script setup>
import { RouterLink } from 'vue-router'
import { useItemsStore } from '../stores/items.js'
import Hero from '@/components/Hero.vue'

const storeItems = useItemsStore()

console.log(storeItems.items)
</script>

<template>
  <div>
    <Hero />
    <!-- background img -->
    <RouterLink :to="{ name: 'items' }"><button>renting</button></RouterLink>

    <RouterLink :to="{ name: 'create-item' }"><button>rentals</button></RouterLink>
    <!-- search bar which links to itemsview -->

    <!-- latest rent outs carousel-->

    <!-- users/reviews? -->
  </div>
</template>

<!-- "Rent Products": "Browse and book items for rent." "Rent Out Your Items": "Share your products and
start earning." -->
