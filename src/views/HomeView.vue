<script setup>
import { RouterLink } from 'vue-router'
import { useItemsStore } from '../stores/items.js'

const storeItems = useItemsStore()

console.log(storeItems.items)
</script>

<template>
  <div>
    <RouterLink :to="{ name: 'items' }"><button>renting</button></RouterLink>

    <RouterLink :to="{ name: 'create-item' }"><button>rentals</button></RouterLink>
  </div>
</template>

<!-- "Rent Products": "Browse and book items for rent." "Rent Out Your Items": "Share your products and
start earning." -->
