import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { itemsApiPinia } from '../services/itemsApiPinia'

export const useItemsStore = defineStore('items', () => {
  const items = ref([
    {
      id: 'item1',
      name: 'Mountain Bike',
      description: 'A durable mountain bike suitable for off-road trails.',
      price: 250,
      category: ['Sports', 'Outdoors'],
      publishedDate: '2023-05-15',
      owner: 'user1',
      renter: 'user2',
      images: {
        urls: ['https://example.com/bike1.jpg', 'https://example.com/bike2.jpg'],
        alt: ['Mountain Bike 1', 'Mountain Bike 2'],
      },
      archived: false,
    },
    {
      id: 'item2',
      name: 'Camping Tent',
      description: 'A spacious tent that fits up to 4 people.',
      price: 150,
      category: ['Outdoors', 'Camping'],
      publishedDate: '2023-06-10',
      owner: 'user3',
      renter: null,
      images: {
        urls: ['https://example.com/tent1.jpg'],
        alt: ['Camping Tent'],
      },
      archived: false,
    },
    {
      id: 'item3',
      name: 'Electric Scooter',
      description: 'An eco-friendly electric scooter with a range of 25 km.',
      price: 100,
      category: ['Transportation', 'Eco-friendly'],
      publishedDate: '2023-07-20',
      owner: 'user4',
      renter: 'user1',
      images: {
        urls: ['https://example.com/scooter1.jpg', 'https://example.com/scooter2.jpg'],
        alt: ['Electric Scooter 1', 'Electric Scooter 2'],
      },
      archived: false,
    },
    {
      id: 'item4',
      name: 'DJI Drone',
      description: 'A high-quality drone with 4K video recording capabilities.',
      price: 300,
      category: ['Electronics', 'Photography'],
      publishedDate: '2023-08-05',
      owner: 'user2',
      renter: null,
      images: {
        urls: [
          'https://example.com/drone1.jpg',
          'https://example.com/drone2.jpg',
          'https://example.com/drone3.jpg',
        ],
        alt: ['DJI Drone 1', 'DJI Drone 2', 'DJI Drone 3'],
      },
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
