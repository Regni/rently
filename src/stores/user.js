import { defineStore } from 'pinia'
import { ref } from 'vue'
import dummyData from '@/assets/dummyData.json'
export const useUserStore = defineStore('user', () => {
  const users = ref(dummyData.users)
  const error = ref(null)
  const isLoading = ref(false)
  async function fetchUser() {
    isLoading.value = true
    try {
      users.value = await itemsApiPinia.fetchUsers()
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function addUser(user) {
    const newUser = {
      // {
      //   "id": "ID",
      //   "firstname": "String",
      //   "lastname": "String",
      //   "email": "String",
      //   "password": "String",
      //   "ownedItems": ["ItemID"],
      //   "rentedHistory": ["BookingID"]
      //   }
      //   id: `item${Date.now()}`,
      //   user,
    }
    try {
    } catch (error) {}
  }

  async function updateUser() {
    try {
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  async function deleteUser(id) {
    try {
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return { users, fetchUser, addUser, deleteUser, updateUser, isLoading, error }
})
