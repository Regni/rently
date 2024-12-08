import { defineStore } from 'pinia'

export const useBookingsStore = defineStore('bookings', () => {
  const bookings = ref([
    {
      id: 'B001',
      item: 'I001',
      renter: 'U002',
      startDate: '2023-12-10',
      endDate: '2023-12-15',
    },
    {
      id: 'B002',
      item: 'I002',
      renter: 'U004',
      startDate: '2023-12-20',
      endDate: '2023-12-25',
    },
    {
      id: 'B003',
      item: 'I003',
      renter: 'U001',
      startDate: '2023-12-05',
      endDate: '2023-12-10',
    },
    {
      id: 'B004',
      item: 'I004',
      renter: 'U003',
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    {
      id: 'B005',
      item: 'I002',
      renter: 'U004',
      startDate: '2024-01-10',
      endDate: '2024-01-15',
    },
    {
      id: 'B006',
      item: 'I001',
      renter: 'U002',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
    },
  ])

  async function fetchBookings() {
    isLoading.value = true
    try {
      bookings.value = await itemsApiPinia.fetchBookings()
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function addBooking(booking) {
    const newBooking = ref({})
    // {
    //     "id": "ID",
    //     "item": "ItemID",
    //     "owner": "UserID",
    //     "renter": "UserID",
    //     "startDate": "DATE",
    //     "endDate": "DATE",
    //     }
    try {
    } catch (error) {}
  }

  async function updateBooking() {
    try {
    } catch (error) {
      console.error('Error updating booking:', error)
    }
  }

  async function deleteBooking(id) {
    try {
    } catch (error) {
      console.error('Error deleting booking:', error)
    }
  }
})
