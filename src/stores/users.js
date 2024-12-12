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
  // if you want to use dummy data just comment this line out.
  onMounted(fetchUsers)

  async function fetchUsers() {
    isLoading.value = true
    error.value = null
    try {
      users.value = await jsonBinApi.fetchData(usersURL)
      return users.value
    } catch (error) {
      console.error('Error fetching Users', error)
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
        email: user.email.toLowerCase(),
        password: user.password,
        ownedItems: [],
        rentedHistory: [],
      }
      const updateArray = [...users.value, newUser]
      users.value = await jsonBinApi.updateData(usersURL, updateArray)
      //deconstructing the object to remove the password to hide it.
      const { password, ...newActiveUser } = newUser
      activeUser.value = newActiveUser
      return activeUser.value
    } catch (error) {
      console.error('Error registering User', error)
      error.value = 'Error registering User: ' + error
    } finally {
      isLoading.value = false
    }
  }

  async function updateUser(updateUser) {
    isLoading.value = true
    error.value = null
    let updateArray = []
    try {
      //if password is updated then a new array with new password is made, otherwise the old password is added.
      if (updateUser.password) {
        updateArray = users.value.map((user) => (user.id === updateUser.id ? updateUser : user))
      } else {
        updateArray = users.value.map((user) =>
          user.id === updateUser.id ? { ...updateUser, password: user.password } : user,
        )
      }

      users.value = await jsonBinApi.updateData(usersURL, updateArray)
      //remove the password field.
      const { password, ...newActiveUser } = updateUser
      activeUser.value = newActiveUser
      return activeUser.value
    } catch (error) {
      console.error('Error updating User', error)
      error.value = 'Error updating User: ' + error
    } finally {
      isLoading.value = false
    }
  }

  async function deleteUser(id = activeUser.value.id) {
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
      return 'user removed'
    } catch (error) {
      console.error('Error deleting User:', error)
      error.value = 'Error deleting User: ' + error
    } finally {
      isLoading.value = false
    }
  }

  async function loginUser(email, checkPassword) {
    isLoading.value = true
    error.value = null
    try {
      const newLoginUser = users.value.find(
        (excistingUser) => excistingUser.email === email.toLowerCase(),
      )

      if (!newLoginUser || newLoginUser.password !== checkPassword) {
        throw new Error('Your email or password is wrong')
      }
      //deconstructing the object to remove the password to hide it.
      const { password, ...newActiveUser } = newLoginUser
      activeUser.value = newActiveUser
      return activeUser.value
    } catch (error) {
      error.value = 'Error in login: ' + error
      console.error('Login failed: ', error)
    } finally {
      isLoading.value = false
    }
  }

  async function logoutUser() {
    isLoading.value = true
    error.value = null
    try {
      if (!activeUser) {
        throw new Error('You need to be logged in to perform this action')
      }
      activeUser.value = null
    } catch (error) {
      error.value = 'Error in logout: ' + error
      console.error('Logout failed: ', error)
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