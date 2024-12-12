<script setup>
import { useItemsStore } from '@/stores/items.js'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const itemsStore = useItemsStore()
const items = computed(() => itemsStore.items)

const route = useRoute()
const router = useRouter()

// Reactive states
const selectedCategories = ref(route.query.category ? route.query.category.split(',') : [])
const isDropdownOpen = ref(false)

// Extracting unique categories from items
const uniqueCategories = computed(() => {
  const categories = items.value.flatMap((item) => item.category)
  return [...new Set(categories)].sort()
})

// Filter items based on selected categories
const filteredItems = computed(() => {
  if (selectedCategories.value.length === 0) return items.value
  return items.value.filter((item) =>
    item.category.some((cat) => selectedCategories.value.includes(cat)),
  )
})

// Update query string whenever `selectedCategories` changes
watch(selectedCategories, (newCategories) => {
  const query = newCategories.length > 0 ? { category: newCategories.join(',') } : {}
  router.push({ query })
})
</script>

<template>
  <div class="items-container" @click="isDropdownOpen = false">
    <h2 class="itemPage-title">Items</h2>

    <!-- Category Filter Dropdown -->
    <div class="dropdown">
      <button class="dropdown-button" @click.stop="isDropdownOpen = !isDropdownOpen">
        Categories
      </button>
      <div v-if="isDropdownOpen" class="dropdown-menu" @click.stop>
        <label v-for="category in uniqueCategories" :key="category" class="dropdown-item">
          <input type="checkbox" :value="category" v-model="selectedCategories" />
          <span :class="{ 'selected-category': selectedCategories.includes(category) }">
            {{ category }}
          </span>
        </label>
      </div>
    </div>

    <div class="items-grid">
      <div v-for="item in filteredItems" :key="item.id" class="item-card">
        <div class="image-container">
          <img class="item-image" :src="item.images[0]" :alt="item.name" />
          <img
            class="item-image-hover"
            v-if="item.images[1]"
            :src="item.images[1]"
            :alt="`${item.name} (hover)`"
          />
          <div class="item-details">
            <h3 class="item-title">{{ item.name }}</h3>
            <p><strong>Price:</strong> {{ item.price }} kr</p>
            <p><strong>Owner:</strong> {{ item.owner }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h2,
h3,
p {
  font-family: var(--font-headings);
  text-align: left;
  color: var(--color-h2);
}

h3 {
  color: var(--color-h3);
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}

.items-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}

.itemPage-title {
  padding: 1rem;
  font-size: 2rem;
  align-self: center;
}

/* Category Dropdown Menu */
.dropdown {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.dropdown-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #69985f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-button:hover {
  background-color: #a2af9f;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 250px;
  overflow-y: auto;
  padding: 0.5rem;
  width: 200px;
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
}

.dropdown-item input {
  margin-left: 0.5rem;
  cursor: pointer;
  order: 2;
}

.dropdown-item span {
  order: 1;
}

.dropdown-item input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  background-color: transparent;
}

.dropdown-item input[type='checkbox']:checked:after {
  content: '✓';
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
}

.selected-category {
  font-weight: bold;
}
/* -------------------- */

.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
}

.item-card {
  border-radius: 10px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.item-card:hover {
  transform: scale(1.025);
}

.item-title {
  font-size: 1.5rem;
}

.image-container {
  position: relative;
}

.item-image {
  width: 100%;
  max-width: 300px;
  height: 450px;
  border-radius: 8px;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.item-image-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  object-fit: cover;
  opacity: 0;
  border-radius: 8px;
  transition: opacity 0.3s ease;
}

.item-card:hover .item-image {
  opacity: 0;
}

.item-card:hover .item-image-hover {
  opacity: 1;
}

.item-details {
  margin: 0 auto;
}

.item-details p {
  margin: 0.5rem 0;
}

@media (max-width: 600px) {
  .items-container {
    align-items: center;
  }

  .items-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .item-image {
    max-width: 350px;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .items-container {
    align-items: center;
  }

  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .item-image {
    max-width: 350px;
  }
}
</style>

<!-- search bar -->
<!-- grid with items to be rented so click to open to itemDetailView. The grid should dynamicly adjust to search bar  -->
<!-- each grid item should have name-price-owner-img -->
