<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useItemsStore } from '@/stores/items.js'
import { debounce } from 'lodash'

const itemsStore = useItemsStore()
const items = computed(() => itemsStore.items)

// Reactive states
const searchQuery = ref('')
const searchResults = ref([])
const hasSearched = ref(false)
const showNoResult = ref(false)
const selectedResult = ref(null)

// Truncate Length
const truncateLength = 60

// Truncate description
const truncateDescription = (description) => {
  if (description && description.length > truncateLength) {
    return description.substring(0, truncateLength) + '...'
  }
  return description
}

// Search function
const handleSearch = debounce(() => {
  hasSearched.value = true

  if (!searchQuery.value.trim()) {
    searchResults.value = [] // If input is empty, clear the results array
    showNoResult.value = false // Hide no result message when input is empty
    return
  }

  const query = searchQuery.value.toLowerCase()

  // Filter items
  searchResults.value = items.value.filter((item) => {
    return item.name.toLowerCase().includes(query)
  })

  // Show no results message
  showNoResult.value = searchResults.value.length === 0 && searchQuery.value.length > 0

  // Select the first result if found
  selectedResult.value = searchResults.value.length > 0 ? searchResults.value[0] : null
}, 300)

// Watch the search query and update the results
watch(searchQuery, handleSearch)

// Handle Enter key press
const handleKeydown = (event) => {
  if (event.key === 'Enter') {
    handleSearch()
    if (selectedResult.value) {
      navigateToFirstResult()
    }
  }
}

// Navigate to the first search result
const navigateToFirstResult = () => {
  if (selectedResult.value) {
    window.location.href = `/items/${selectedResult.value.id}`
  }
}

// Search button click handler
const handleButtonClick = () => {
  handleSearch()
  if (selectedResult.value) {
    navigateToFirstResult()
  }
}

// Clear the search query
const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  hasSearched.value = false
  showNoResult.value = false
}
</script>

<template>
  <div class="search-section">
    <div class="input-container">
      <input
        v-model="searchQuery"
        class="search-input"
        id="search"
        type="text"
        placeholder="Search"
        @keydown="handleKeydown"
      />
      <button v-if="searchQuery" class="clear-button" @click="clearSearch">X</button>
    </div>
    <button class="search-button" @click.stop.prevent="handleButtonClick">
      <i class="pi pi-search search-icon"></i>
    </button>

    <div
      class="search-results"
      :class="{ show: searchResults.length > 0 || showNoResult }"
      @click.stop
    >
      <template v-if="hasSearched">
        <template v-if="searchResults.length > 0">
          <ul>
            <RouterLink
              v-for="item in searchResults"
              :key="item.id"
              :to="`/items/${item.id}`"
              class="search-result-item"
            >
              <li>
                <span class="name"> {{ item.name }} </span> -
                <span class="description"> {{ truncateDescription(item.description) }} </span>
              </li>
            </RouterLink>
          </ul>
        </template>
        <p v-else v-if="showNoResult" class="no-results">
          No results found for "{{ searchQuery }}" 😢
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
a {
  color: var(--color-basic-text);
}

.search-section {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
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

.clear-button {
  position: absolute;
  right: 4rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-basic-text);
}

.search-button {
  font-family: var(--font-links);
  padding: 0.6rem 1rem;
  background-color: var(--color-btn);
  height: auto;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-button:hover {
  background-color: var(--color-btn-hover);
}

.search-icon {
  font-size: 1rem;
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

.search-results li,
.no-results {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: var(--font-links);
  font-size: 0.9rem;
}

.search-results li:hover {
  background-color: #ececec;
}

.name {
  font-weight: bold;
}

.description {
  font-style: italic;
}

.no-results {
  cursor: auto;
}
</style>
