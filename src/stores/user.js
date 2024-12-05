import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const users = ref([
    {
      id: 'U001',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      ownedItems: ['I001', 'I002'],
      rentedHistory: ['B003'],
    },
    {
      id: 'U002',
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      password: 'securepass456',
      ownedItems: ['I004'],
      rentedHistory: ['B001', 'B006'],
    },
    {
      id: 'U003',
      firstname: 'Mike',
      lastname: 'Johnson',
      email: 'mike.johnson@example.com',
      password: 'mypassword789',
      ownedItems: [''],
      rentedHistory: ['B004'],
    },
    {
      id: 'U004',
      firstname: 'Emily',
      lastname: 'Davis',
      email: 'emily.davis@example.com',
      password: 'emily123!',
      ownedItems: ['I003'],
      rentedHistory: ['B002', 'B005'],
    },
  ])

  async function fetchUsers() {
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
})
