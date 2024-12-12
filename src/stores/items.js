import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { jsonBinApi } from '@/services/jsonBinApi'
import { v4 as uuidv4 } from 'uuid'

const itemsURL = import.meta.env.VITE_JSONBIN_BIN_URL_ITEMS

export const useItemsStore = defineStore('items', () => {
  const items = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  onMounted(() => {
    fetchItems()
  })

  // Get items from jsonbin
  async function fetchItems() {
    isLoading.value = true
    error.value = null
    try {
      items.value = await jsonBinApi.fetchData(itemsURL)
    } catch (error) {
      console.error('Error fetching items:', error)
      error.value = 'Error fetching items:' + error
    } finally {
      isLoading.value = false
    }
  }

  // Add item to jsonbin
  async function addItem(item) {
    isLoading.value = true
    error.value = null
    const newID = 'I' + uuidv4().replace(/-/g, '')
    const newItem = {
      id: newID,
      publishedDate: new Date().toISOString(),
      //This is a placeholder for the active user and should be replaced with the actual user's ID
      owner: 'active-user',
      archived: false,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      images: item.images,
    }

    try {
      const updatedArray = [...items.value, newItem]
      items.value = await jsonBinApi.updateData(itemsURL, updatedArray)
    } catch (error) {
      console.error('Error adding item:', error)
      error.value = 'Error adding item:' + error
    } finally {
      isLoading.value = false
    }
  }

  // Update item in jsonbin
  async function updateItem(updatedItem) {
    isLoading.value = true
    error.value = null
    try {
      const updatedArray = items.value.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item,
      )
      items.value = await jsonBinApi.updateData(itemsURL, updatedArray)
    } catch (error) {
      console.error('Error updating item:', error)
      error.value = 'Error updating item:' + error
    } finally {
      isLoading.value = false
    }
  }

  //Delete item from jsonbin
  async function deleteItem(id) {
    isLoading.value = true
    error.value = null
    try {
      // Check if item with the given ID exists
      const itemToRemove = items.value.find((item) => item.id === id)
      if (!itemToRemove) {
        error.value = `Item with ID ${id} not found`
        return
      }
      const updatedArray = items.value.filter((item) => item.id !== id)
      items.value = await jsonBinApi.updateData(itemsURL, updatedArray)
    } catch (error) {
      console.error('Error deleting item:', error)
      error.value = 'Error deleting item:' + error
    } finally {
      isLoading.value = false
    }
  }

  return { items, error, isLoading, fetchItems, addItem, deleteItem, updateItem }
})
