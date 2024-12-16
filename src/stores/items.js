import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { jsonBinApi } from '@/services/jsonBinApi'
import { v4 as uuidv4 } from 'uuid'
import dummydata from '@/assets/dummyData.json'

const itemsURL = import.meta.env.VITE_JSONBIN_BIN_URL_ITEMS

export const useItemsStore = defineStore('items', () => {
  const items = ref(dummydata.items)
  const isLoading = ref(false)
  const error = ref(null)

  // if you want to use dummy data just comment this line out.
  onMounted(fetchItems)

  // Get items from jsonbin
  async function fetchItems() {
    isLoading.value = true
    error.value = null
    try {
      items.value = await jsonBinApi.fetchData(itemsURL)
    } catch (err) {
      console.error('Error fetching items:', err)
      error.value = 'Error fetching items:' + err
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
      owner: item.owner,
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
    } catch (err) {
      console.error('Error adding item:', err)
      error.value = 'Error adding item:' + err
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
    } catch (err) {
      console.error('Error updating item:', err)
      error.value = 'Error updating item:' + err
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
    } catch (err) {
      console.error('Error deleting item:', err)
      error.value = 'Error deleting item:' + err
    } finally {
      isLoading.value = false
    }
  }

  return { items, error, isLoading, fetchItems, addItem, deleteItem, updateItem }
})
