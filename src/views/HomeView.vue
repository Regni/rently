<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <RouterLink :to="{ name: 'items' }"><button>renting</button></RouterLink>

    <RouterLink :to="{ name: 'create-item' }"><button>rentals</button></RouterLink>
  </main>
</template>

<!-- "Rent Products": "Browse and book items for rent." "Rent Out Your Items": "Share your products and
start earning." -->
