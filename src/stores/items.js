import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { jsonBinApi } from '@/services/jsonBinApi'
import { v4 as uuidv4 } from 'uuid'

const itemsURL = import.meta.env.VITE_JSONBIN_BIN_URL_ITEMS_TEST

export const useItemsStore = defineStore('items', () => {
  // Dummy data for testing purposes:
  // const items = ref([
  //   {
  //     id: 'item1',
  //     name: 'Mountain Bike',
  //     description: 'A durable mountain bike suitable for off-road trails.',
  //     price: 250,
  //     category: ['Sports', 'Outdoors'],
  //     publishedDate: '2023-05-15',
  //     owner: 'user1',
  //     renter: 'user2',
  //     images: ['https://example.com/bike1.jpg', 'https://example.com/bike2.jpg'],
  //     archived: false,
  //   },
  //   {
  //     id: 'item2',
  //     name: 'Camping Tent',
  //     description: 'A spacious tent that fits up to 4 people.',
  //     price: 150,
  //     category: ['Outdoors', 'Camping'],
  //     publishedDate: '2023-06-10',
  //     owner: 'user3',
  //     renter: null,
  //     images: ['https://example.com/tent1.jpg'],
  //     archived: false,
  //   },
  //   {
  //     id: 'item3',
  //     name: 'Electric Scooter',
  //     description: 'An eco-friendly electric scooter with a range of 25 km.',
  //     price: 100,
  //     category: ['Transportation', 'Eco-friendly'],
  //     publishedDate: '2023-07-20',
  //     owner: 'user4',
  //     renter: 'user1',
  //     images: ['https://example.com/scooter1.jpg', 'https://example.com/scooter2.jpg'],
  //     archived: false,
  //   },
  //   {
  //     id: 'item4',
  //     name: 'DJI Drone',
  //     description: 'A high-quality drone with 4K video recording capabilities.',
  //     price: 300,
  //     category: ['Electronics', 'Photography'],
  //     publishedDate: '2023-08-05',
  //     owner: 'user2',
  //     renter: null,
  //     images: [
  //       'https://example.com/drone1.jpg',
  //       'https://example.com/drone2.jpg',
  //       'https://example.com/drone3.jpg',
  //     ],
  //     archived: true,
  //   },
  // ])
  const items = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  onMounted(() => {
    error.value = null
    fetchItems()
  })

  async function fetchItems() {
    isLoading.value = true
    try {
      items.value = await jsonBinApi.fetchData(itemsURL)
      error.value = null
    } catch (error) {
      console.error('Error fetching items:', error)
      error.value = error
    } finally {
      isLoading.value = false
    }
  }

  async function addItem(item) {
    isLoading.value = true
    const newID = 'I' + uuidv4().replace(/-/g, '')
    const newItem = {
      id: newID,
      publishedDate: new Date().toISOString(),
      //This is a placeholder for the active user and should be replaced with the actual user's ID
      owner: 'active-user',
      renter: null,
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
      error.value = null
    } catch (error) {
      console.error('Error adding item:', error)
      error.value = error
    } finally {
      isLoading.value = false
    }
  }

  async function updateItem(updatedItem) {
    isLoading.value = true
    try {
      const updatedArray = items.value.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item,
      )
      items.value = await jsonBinApi.updateData(itemsURL, updatedArray)
      error.value = null
    } catch (error) {
      console.error('Error updating item:', error)
      error.value = error
    } finally {
      isLoading.value = false
    }
  }

  async function deleteItem(id) {
    isLoading.value = true
    try {
      // Check if item with the given ID exists
      const itemToRemove = items.value.find((item) => item.id === id)
      if (!itemToRemove) {
        error.value = `Item with ID ${id} not found`
        return
      }
      const updatedArray = items.value.filter((item) => item.id !== id)
      items.value = await jsonBinApi.updateData(itemsURL, updatedArray)
      error.value = null
    } catch (error) {
      console.error('Error deleting item:', error)
      error.value = error
    } finally {
      isLoading.value = false
    }
  }

  return { items, isLoading, fetchItems, addItem, deleteItem, updateItem }
})
