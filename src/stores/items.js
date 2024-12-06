import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { itemsApiPinia } from '../services/itemsApiPinia'

export const useItemsStore = defineStore('items', () => {
  const items = ref([
    {
      id: 'I001',
      name: 'Mountain Bike',
      description: 'A durable mountain bike suitable for off-road trails.',
      price: 250,
      category: ['Sports', 'Outdoors'],
      publishedDate: '2023-05-15',
      owner: 'U001',
      renter: 'U002',
      images: ['https://example.com/bike1.jpg', 'https://example.com/bike2.jpg'],
      archived: false,
    },
    {
      id: 'I002',
      name: 'Camping Tent',
      description: 'A spacious tent that fits up to 4 people.',
      price: 150,
      category: ['Outdoors', 'Camping'],
      publishedDate: '2023-06-10',
      owner: 'U001',
      renter: null,
      images: ['https://example.com/tent1.jpg'],
      archived: false,
    },
    {
      id: 'I003',
      name: 'Electric Scooter',
      description: 'An eco-friendly electric scooter with a range of 25 km.',
      price: 100,
      category: ['Transportation', 'Eco-friendly'],
      publishedDate: '2023-07-20',
      owner: 'U004',
      renter: 'user1',
      images: ['https://example.com/scooter1.jpg', 'https://example.com/scooter2.jpg'],
      archived: false,
    },
    {
      id: 'I004',
      name: 'DJI Drone',
      description: 'A high-quality drone with 4K video recording capabilities.',
      price: 300,
      category: ['Electronics', 'Photography'],
      publishedDate: '2023-08-05',
      owner: 'U002',
      renter: null,
      images: [
        'https://example.com/drone1.jpg',
        'https://example.com/drone2.jpg',
        'https://example.com/drone3.jpg',
      ],
      archived: true,
    },
  ])
  const isLoading = ref(false)

  async function fetchItems() {
    isLoading.value = true
    try {
      items.value = await itemsApiPinia.fetchItems()
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function addItem(title) {
    const newItem = {
      id: `item${Date.now()}`,
      title,
    }

    try {
      items.value = await itemsApiPinia.createItem(items.value, newItem)
    } catch (error) {
      console.error('Error adding item:', error)
    }
  }

  async function updateItem(id, newTitle) {
    try {
      items.value = await itemsApiPinia.updateItem(items.value, id, { title: newTitle })
    } catch (error) {
      console.error('Error updating item:', error)
    }
  }

  async function deleteItem(id) {
    try {
      items.value = await itemsApiPinia.deleteItem(items.value, id)
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  return { items, isLoading, fetchItems, addItem, deleteItem, updateItem }
})
