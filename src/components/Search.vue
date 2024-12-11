<script setup>
import { ref, computed, watch } from 'vue'
import { useItemsStore } from '@/stores/items.js'
import { debounce } from 'lodash'

const itemsStore = useItemsStore()
console.log('Items Store:', itemsStore)
console.log('Items in Store:', itemsStore.items)

const items = computed(() => itemsStore.items)

// Reactive states for search field/array
const searchQuery = ref('')
const searchResults = ref([])
const hasSearched = ref(false)

// Search function
const handleSearch = debounce(() => {
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
}, 300)

// Watch the search query and update the results
watch(searchQuery, handleSearch)
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

    <div class="search-results" :class="{ show: searchResults.length > 0 }">
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
  </div>
</template>

<style scoped>
.search-section {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 1.06rem;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
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
  padding: 0.45rem 1rem;
  background-color: var(--color-btn);
  height: auto;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: var(--color-btn-hover);
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition:
    max-height 0.3s ease-out,
    opacity 0.3s ease-out,
    visibility 0.3s ease-out;
  z-index: 1001;
}

.search-results.show {
  max-height: 300px;
  opacity: 1;
  visibility: visible;
}

.search-results ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.search-results li {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: var(--font-links);
  font-size: 0.9rem;
}

.search-results li:hover {
  background-color: var(--color-btn-hover);
}
</style>
