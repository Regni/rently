<script setup>
import { ref, computed } from 'vue'
import { useItemsStore } from '@/stores/items.js'

const itemsStore = useItemsStore()
console.log('Items Store:', itemsStore)
console.log('Items in Store:', itemsStore.items)

const items = computed(() => itemsStore.items)

// Reactive states for search field/array
const searchQuery = ref('')
const searchResults = ref([])
const hasSearched = ref(false)

// Search function
const handleSearch = () => {
  hasSearched.value = true

  if (!searchQuery.value.trim()) {
    searchResults.value = [] // If input is empty, clear the results array
    return
  }

  const query = searchQuery.value.toLowerCase()

  console.log('Items for search:', items.value)

  // Filter items
  searchResults.value = items.value.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      (item.description && item.description.toLowerCase().includes(query))
    )
  })
}
</script>

<template>
  <div class="search-section">
    <input
      v-model="searchQuery"
      class="search-input"
      id="search"
      type="text"
      placeholder="Search"
    />
    <button class="search-button" @click="handleSearch">Search</button>
  </div>

  <div class="search-results">
    <template v-if="hasSearched">
      <template v-if="searchResults.length > 0">
        <ul>
          <li v-for="item in searchResults" :key="item.id">
            {{ item.name }} - {{ item.description }}
          </li>
        </ul>
      </template>
      <p v-else>No results found for "{{ searchQuery }}"</p>
    </template>
  </div>
</template>

<style scoped>
.search-section {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.search-input {
  padding: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
  height: 10px;
  width: 500px;
  font-size: 1.1rem;
  color: var(--color-basic-text);
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: var(--color-btn);
  outline: none;
}

.search-button {
  font-family: var(--font-links);
  padding: 0.5rem 1rem;
  background-color: var(--color-btn);
  height: auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: var(--color-btn-hover);
}

.search-results {
  margin-top: 1rem;
}

.search-results ul {
  list-style-type: none;
  padding: 0;
}

.search-results li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}
</style>
