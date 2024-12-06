<script setup>
import { useItemsStore } from '@/stores/items.js'
import { computed } from 'vue'

const itemsStore = useItemsStore()
const items = computed(() => itemsStore.items)
</script>

<template>
  <div class="items-container">
    <h2>Items</h2>
    <div class="items-grid">
      <div v-for="item in items" :key="item.id" class="item-card">
        <h3>{{ item.name }}</h3>
        <img :src="item.images[0]" :alt="item.name" />
        <div class="item-details">
          <p><strong>Price:</strong> {{ item.price }}</p>
          <p><strong>Owner:</strong> {{ item.owner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<!-- search bar -->
<!-- grid with items to be rented so click to open to itemDetailView. The grid should dynamicly adjust to search bar  -->
<!-- each grid item should have name-price-owner-img -->
