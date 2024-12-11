<script setup>
import { useItemsStore } from '@/stores/items.js'
import { computed, ref } from 'vue'

const itemsStore = useItemsStore()
const items = computed(() => itemsStore.items)

// Extracting unique categories from items
const uniqueCategories = computed(() => {
  const categories = items.value.flatMap((item) => item.category)
  return [...new Set(categories)].sort()
})
</script>

<template>
  <section class="categories-container">
    <div v-for="category in uniqueCategories" :key="category" class="category-container">
      <div class="category-card">
        <h3>{{ category }}</h3>
      </div>
    </div>
  </section>
</template>

<style>
.categories-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}
.category-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.category-card {
  font-family: var(--font-links);
  height: 75px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--color-third);
}
.category-card h3 {
  color: var(--color-secondary);
}
</style>
