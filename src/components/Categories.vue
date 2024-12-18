<script setup>
import { useItemsStore } from '@/stores/items.js'
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const itemsStore = useItemsStore()
const items = computed(() => itemsStore.items)

const route = useRoute()
const query = ref(route.query.category)

const selectedCategories = ref(route.query.category ? route.query.category.split(',') : [])
const isDropdownOpen = ref(false)
// Extracting unique categories from items
const uniqueCategories = computed(() => {
  const categories = items.value.flatMap((item) => item.category)
  return [...new Set(categories)].sort()
})
</script>

<template>
  <!-- CATEGORIES IN DROPDOWN -->
  <section class="categories-container-dropdown">
    <div class="dropdown">
      <button class="btn" @click.stop="isDropdownOpen = !isDropdownOpen">Selcet Categories</button>
      <div v-if="isDropdownOpen" class="dropdown-menu" @click.stop>
        <div v-for="category in uniqueCategories" :key="category" class="dropdown-item">
          <RouterLink :to="{ path: '/items', query: { category: category } }">
            <div class="btn">
              <h4>{{ category }}</h4>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!-- CATEGORIES IN GRID -->
  <section class="categories-container-grid">
    <div v-for="category in uniqueCategories" :key="category" class="category-container">
      <RouterLink :to="{ path: '/items', query: { category: category } }">
        <div class="category-card">
          <h3>{{ category }}</h3>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.categories-container-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem;
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
.dropdown {
  display: none;
}

@media (max-width: 768px) {
  .categories-container-grid {
    display: none;
  }
  .categories-container-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }

  /* Category Dropdown Menu */
  .dropdown {
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
    background-color: var(--color-third);
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 150px;
    overflow-y: auto;
    padding: 0.5rem;
    width: 250px;
  }

  .dropdown-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: var(--font-basic);
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
    background-color: var(--color-btn);
    border-radius: 8px;
  }

  .dropdown-item:hover {
    background-color: var(--color-btn-hover);
  }

  .selected-category {
    font-weight: bold;
  }

  .category-card {
    font-family: var(--font-links);
    height: auto;
    width: 100%;
    border: none;
    border-radius: none;
    padding: none;
    text-align: center;
    box-shadow: none;
    background-color: var(--color-third);
  }
  .category-card h4 {
    font-size: 1rem;
    color: var(--color-secondary);
  }
}
</style>
