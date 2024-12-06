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
      images: [
        'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://example.com/bike2.jpg',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1698521665923-db05bf9eed26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1648204834832-78e68052c04f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://example.com/scooter2.jpg',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1620926530930-1bfbb8984405?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
