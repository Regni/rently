import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import dummyData from '@/assets/dummyData.json'
import { v4 as uuIDv4 } from 'uuid'
import { jsonBinApi } from '@/services/jsonBinApi'

const usersURL = import.meta.env.VITE_JSONBIN_BIN_URL_USERS

export const useUsersStore = defineStore('users', () => {
  const users = ref(dummyData.users)
  const error = ref(null)
  const isLoading = ref(false)
  const activeUser = ref({})

  onMounted(fetchUsers)

  async function fetchUsers() {
    isLoading.value = true
    error.value = null
    try {
      users.value = await jsonBinApi.fetchData(usersURL)
      return users.value
    } catch (error) {
      error.value = 'Error fetching Users:' + error
    } finally {
      isLoading.value = false
    }
  }

  async function registerUser(user) {
    isLoading.value = true
    error.value = null

    const newID = 'U' + uuIDv4().replace(/-/g, '')

    try {
      if (users.value.find((existingUser) => existingUser.email === user.email)) {
        throw new Error('Email already excists')
      }

      const newUser = {
        id: newID,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        password: user.password,
        ownedItems: [],
        rentedHistory: [],
      }
      const updateArray = [...users.value, newUser]
      users.value = await jsonBinApi.updateData(usersURL, updateArray)
      return newUser
    } catch (error) {
      error.value = 'Error in adding user: ' + error
      return error
    } finally {
      isLoading.value = false
    }
  }

  async function updateUser() {
    isLoading.value = true
    error.value = null
    try {
    } catch (error) {
      console.error('Error updating user:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function deleteUser(id) {
    isLoading.value = true
    error.value = null

    try {
      if (!users.value.find((excistingUser) => excistingUser.id === id)) {
        throw new Error('User not found')
      }
      users.value = await jsonBinApi.updateData(
        usersURL,
        users.value.filter((user) => user.id !== id),
      )
      return 'succes'
    } catch (error) {
      console.error('Error deleting user:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function loginUser(email, password) {
    isLoading.value = true
    error.value = null
    try {
    } catch (error) {
    } finally {
      isLoading.value = false
    }
  }

  async function logoutUser() {
    isLoading.value = true
    error.value = null
    try {
    } catch (error) {
    } finally {
      isLoading.value = false
    }
  }

  return {
    users,
    activeUser,
    fetchUsers,
    registerUser,
    deleteUser,
    updateUser,
    loginUser,
    logoutUser,
    isLoading,
    error,
  }
})
