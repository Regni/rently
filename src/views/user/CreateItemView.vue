<!--  Inspiration from Hygglo: https://www.hygglo.se/new-item - beeing able to see form, but having to
 login before typing -->

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { useItemsStore } from '@/stores/items'
import itemCategories from '@/assets/itemCategories'
import 'primeicons/primeicons.css'

const usersStore = useUsersStore()
const itemsStore = useItemsStore()

const router = useRouter()

// ----- REACTIVE VARIABLES -----
const isDropdownOpen = ref(false)

const newItem = ref({
  name: '',
  description: '',
  images: [],
  price: '',
  category: [],
})

// variable to hanlde image upload
const imageUrl = ref('')

// ----- COMPUTED PROPERTIES -----
// const activeUser = computed(() => usersStore.activeUser || null)
const activeUser = ref({ id: 'testUser' })

// ----- METHODS -----
// function to handle image upload
const addImageUrl = () => {
  if (imageUrl.value) {
    newItem.value.images.push(imageUrl.value)
    imageUrl.value = ''
  }
}

// Remove uploaded image
const removeImage = (index) => {
  newItem.value.images.splice(index, 1)
}

// Add a new item
const handleCreateItem = (event) => {
  console.log(newItem.value)

  newItem.value.owner = activeUser.value.id

  itemsStore.addItem(newItem.value)

  //clear the form
  newItem.value = {
    name: '',
    description: '',
    price: '',
    category: [],
    images: [],
  }

  console.log('Before router.push')
  // Redirect to the Dashboard-listings???
  router.push({ name: 'dashboard-listings' })
}
</script>
<template>
  <section @click="isDropdownOpen = false">
    <div class="create-item-container">
      <h1>Create Item</h1>
      <form class="create-item-form" @submit.prevent="handleCreateItem">
        <div class="dropdown">
          <label for="category">Choose Item Categories</label>
          <button
            type="button"
            class="dropdown-button"
            @click.stop="isDropdownOpen = !isDropdownOpen"
          >
            <div>Categories <i class="pi pi-angle-down"></i></div>
          </button>
          <div v-if="isDropdownOpen" class="dropdown-menu" @click.stop>
            <label v-for="category in itemCategories" :key="category" class="dropdown-item">
              <input type="checkbox" :value="category" v-model="newItem.category" />
              <span class="category-option">
                {{ category }}
              </span>
            </label>
          </div>
        </div>
        <label for="title">Title</label>
        <input name="title" type="text" v-model="newItem.name" />

        <label for="description">Description</label>
        <textarea name="description" rows="4" cols="50" v-model="newItem.description"></textarea>

        <label for="images">Images</label>
        <div class="add-image-container">
          <input type="url" v-model="imageUrl" placeholder="Add image URL" />
          <button type="button" @click="addImageUrl" class="btn add-image-btn">+ Add</button>
        </div>

        <div v-if="newItem.images.length > 0">
          <h2>Added Images:</h2>
          <div class="image-preview-container">
            <div v-for="(addedImage, index) in newItem.images" :key="index" class="image-preview">
              <img :src="addedImage" alt="Image Preview" class="image-thumbnail" />
              <button type="button" class="btn remove-btn" @click.stop="removeImage(index)">
                Remove
              </button>
            </div>
          </div>
        </div>

        <label for="price">Price</label>
        <input name="price" type="number" v-model="newItem.price" />

        <button name="submit" class="btn create-item-btn" type="submit">Create Listing</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  position: relative;
}

.create-item-form {
  display: flex;
  flex-direction: column;
}

h1 {
  font-family: var(--font-headings);
  color: var(--color-h1);
  font-size: 3rem;
  font-weight: 500;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-h2);
  font-weight: 500;
}

label {
  font-family: var(--font-links);
  color: var(--color-basic-text);
}

form input,
form textarea {
  margin-bottom: 2em;
  font-size: 1rem;
  font-family: var(--font-basic);
  padding: 0.4rem;
}

/* Category Dropdown Menu */
.dropdown {
  position: relative;
  display: inline-block;
  margin: 1rem 0;
  width: 60%;
}

.dropdown-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #ccc;
  color: var(--color-basic-text);
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-button:hover {
  background-color: var(--color-secondary);
}

.dropdown-button div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
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
  width: 100%;
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
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

/* Image Upload */
.add-image-container {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 0.5rem;
}

.add-image-container input {
  flex-grow: 1;
}

.add-image-btn {
  background-color: #ccc;
  color: var(--color-basic-text);
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-image-btn:hover {
  background-color: var(--color-secondary);
}

.image-preview-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1em 0;
}

.image-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.image-thumbnail {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 0.5em;
}

.remove-btn {
  padding: 0.2em 0.5em;
  background-color: #c94022;
  font-family: var(--font-links);
}

.create-item-btn {
  position: absolute;
  bottom: 1.5em;
  right: 4em;
}
</style>
