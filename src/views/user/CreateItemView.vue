<script setup>
import { computed, ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { useItemsStore } from '@/stores/items'
import { useToast } from 'vue-toastification'
import itemCategories from '@/assets/itemCategories'
import 'primeicons/primeicons.css'
import axios from 'axios'
import LoginModal from '@/components/LoginModal.vue'

const usersStore = useUsersStore()
const itemsStore = useItemsStore()

const router = useRouter()

// Vue toastification package for toast notifications
const toast = useToast()

// ----- REACTIVE VARIABLES -----
const isDropdownOpen = ref(false)

const newItem = ref({
  name: '',
  description: '',
  images: [],
  price: '',
  category: [],
})

// variable to handle image upload
const imageUrl = ref('')

// ----- COMPUTED PROPERTIES -----
const activeUserId = computed(() => usersStore.activeUser?.id || '')
const itemsStoreError = computed(() => itemsStore.error)

console.log('active user:', activeUserId.value)
// Form validation
const formValid = computed(() => {
  return (
    newItem.value.name.trim() !== '' &&
    newItem.value.description.trim() !== '' &&
    newItem.value.images.length > 0 &&
    newItem.value.category.length > 0
  )
})

// Image lengthvalidation
const validImageLength = computed(() => {
  return newItem.value.images.length < 5
})

// ----- METHODS -----
//clear error message when user navigates away
onUnmounted(() => {
  itemsStore.error = null
})

// check if image URL is valid
const validateImage = async (url) => {
  try {
    const res = await axios.head(url)
    const contentType = res.headers['content-type']
    return contentType.startsWith('image/')
  } catch (err) {
    console.error('Invalid URL or not an image', err)
    imageUrl.value = ''
    return false
  }
}

// function to handle image upload
const addImageUrl = async () => {
  if (!validImageLength.value) {
    toast.error('You can only add 5 images', {
      toastClassName: 'error-toast',
      timeout: 4000,
    })
    return
  }
  // Validate image URL
  const isValid = await validateImage(imageUrl.value)

  if (!isValid) {
    toast.error('Please enter a valid image URL', {
      toastClassName: 'error-toast',
      timeout: 4000,
    })
    return
  }
  // Add image to newItem array and clear imageUrl field
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
const handleCreateItem = async () => {
  console.log(newItem.value)

  if (!formValid.value) {
    toast.error('Please fill in all fields', {
      toastClassName: 'error-toast',
      timeout: 4000,
    })
    return
  }

  // owner is same as active user
  newItem.value.owner = activeUserId.value
  // add item to itemstore
  await itemsStore.addItem(newItem.value)

  // clear the form
  newItem.value = {
    name: '',
    description: '',
    price: '',
    category: [],
    images: [],
  }

  toast.success('Item created successfully!', {
    toastClassName: 'success-toast',
    timeout: 2000,
  })

  router.push({ name: 'dashboard-listings' })
}
</script>
<template>
  <section @click="isDropdownOpen = false">
    <LoginModal v-if="!activeUserId" />
    <div class="create-item-container">
      <h1>Create Item</h1>
      <div v-if="itemsStoreError" class="error-container">
        <p class="error-message">{{ itemsStoreError }}</p>
      </div>
      <form class="create-item-form" @submit.prevent="handleCreateItem">
        <div class="dropdown">
          <div class="dropdown-input-group">
            <label for="category">Choose Categories:</label>
            <button
              type="button"
              class="dropdown-button"
              @click.stop="isDropdownOpen = !isDropdownOpen"
            >
              <div>Categories <i class="pi pi-angle-down"></i></div>
            </button>
            <div v-if="isDropdownOpen" class="dropdown-menu" @click.stop>
              <label v-for="category in itemCategories" :key="category" class="dropdown-item">
                <input type="checkbox" :value="category" v-model="newItem.category" required />
                <span class="category-option">
                  {{ category }}
                </span>
              </label>
            </div>
          </div>
        </div>
        <ul v-for="category in newItem.category" class="chosen-categories">
          <li>{{ category }}</li>
        </ul>

        <label for="title" class="form-title">Title</label>
        <input required name="title" type="text" maxlength="50" v-model="newItem.name" />

        <label for="description">Description (max 400 characters)</label>
        <textarea
          required
          name="description"
          rows="4"
          cols="50"
          maxlength="400"
          v-model="newItem.description"
        ></textarea>

        <label for="images">Images (max 5, min 1)</label>
        <div class="add-image-container">
          <input type="url" v-model="imageUrl" placeholder="Add image URL" />
          <button
            type="button"
            @click="addImageUrl"
            class="btn add-image-btn"
            :disabled="!validImageLength"
          >
            + Add
          </button>
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

        <label for="price">Price per day in SEK</label>
        <input required name="price" type="number" min="0" v-model="newItem.price" />

        <button name="submit" class="btn create-item-btn" type="submit">Create Listing</button>
      </form>
    </div>
  </section>
</template>

<!-- // To make modal work we need global styling -->
<style>
.modal-container {
  z-index: 2;
}
</style>
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
  padding: 4em 4em 2em;
  position: relative;
  width: clamp(300px, 98%, 600px);
  z-index: 1;
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
  margin-bottom: 0.3em;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-h2);
}

label {
  font-family: var(--font-links);
  color: var(--color-basic-text);
  font-weight: bold;
}

form input,
form textarea {
  margin-bottom: 2em;
  font-size: 1rem;
  font-family: var(--font-basic);
  padding: 0.4rem;
}

.form-title {
  margin-top: 1em;
}

/* Category Dropdown Menu */
.dropdown {
  position: relative;
  display: inline-block;
  margin: 1rem 0;
}

.dropdown-input-group {
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
}

.dropdown-button {
  flex-grow: 1;
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
  max-height: 450px;
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

.chosen-categories {
  list-style: circle;
  font-family: var(--font-basic);
  color: var(--color-basic-text);
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

.add-image-btn[disabled] {
  cursor: not-allowed;
}
.add-image-btn[disabled]:hover {
  background-color: #ccc;
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
  align-self: center;
  margin-top: 3em;
}

/* Error Handling */
.error-container {
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #ffdddd;
  border: 1px solid #ff0000;
  border-radius: 4px;
}
.error-message {
  color: #ff0000;
  margin: 0.5rem 0;
  font-family: var(--font-basic);
}

/* --- Media Queries --- */
@media (max-width: 600px) {
  .create-item-container {
    width: 90%;
    padding: 2em 1em;
  }

  h1 {
    font-size: 2.5rem;
  }

  .dropdown-button {
    padding: 0.5rem;
  }

  .create-item-form {
    max-width: 98%;
  }
}
</style>
