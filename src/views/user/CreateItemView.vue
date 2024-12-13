<!--  Inspiration from Hygglo: https://www.hygglo.se/new-item - beeing able to see form, but having to
 login before typing -->

<script setup>
import { computed, ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import itemCategories from '@/assets/itemCategories'

const usersStore = useUsersStore()

// ----- REACTIVE VARIABLES -----
const isDropdownOpen = ref(false)

const newItem = ref({
  name: '',
  description: '',
  price: '',
  category: [],
  images: [],
})

// ----- COMPUTED PROPERTIES -----
const activeUser = computed(() => usersStore.activeUser || null)

const handleCreateItem = () => {
  console.log('handleCreateItem')
}
</script>
<template>
  <section>
    <div class="create-item-container">
      <h2>Create Item</h2>
      <form class="create-item-form" @submit.prevent="handleCreateItem">
        <label for="title">Title</label>
        <input name="title" type="text" v-model="newItem.name" />
        <label for="description">Description</label>
        <textarea name="description" rows="4" cols="50" v-model="newItem.description"></textarea>
        <label for="images">Images</label>
        <input type="url" v-model="newItem.images" />
        <label for="price">Price</label>
        <input name="price" type="number" v-model="newItem.price" />
        <div class="dropdown">
          <button class="dropdown-button" @click.stop="isDropdownOpen = !isDropdownOpen">
            Categories
          </button>
          <div v-if="isDropdownOpen" class="dropdown-menu" @click.stop>
            <label v-for="category in itemCategories" :key="category" class="dropdown-item">
              <input type="checkbox" v-model="newItem.category" />
              <span class="category-option">
                {{ category }}
              </span>
            </label>
          </div>
        </div>
        <button name="submit" class="btn" type="submit">Create Listing</button>
      </form>
    </div>
  </section>
</template>

<!-- { "name": "String", "description": "String", "price": "Number", "category": ["String"] "images":
["String"], "archived": "BOOLEAN" } //"active-user????" -->

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.create-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-third);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 4em;
  padding: 4em;
}

.create-item-form {
  display: flex;
  flex-direction: column;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-h2);
}

label {
  font-family: var(--font-links);
  color: var(--color-basic-text);
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
  background-color: var(--color-btn);
  color: var(--color-third);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-button:hover {
  background-color: var(--color-btn-hover);
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
</style>
