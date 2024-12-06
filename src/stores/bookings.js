import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { jsonBinApi } from '@/services/jsonBinApi'
import { v4 as uuIDv4 } from 'uuid'

const bookingsURL = import.meta.env.VITE_JSONBIN_BIN_URL_BOOKINGS

export const useBookingsStore = defineStore('bookings', () => {
  const bookings = ref(null)
  const isLoading = ref(false)

  onMounted(fetchBookings)

  // const bookings = ref([
  //   {
  //     id: 'B001',
  //     item: 'I001',
  //     renter: 'U002',
  //     startDate: '2023-12-10',
  //     endDate: '2023-12-15',
  //   },
  //   {
  //     id: 'B002',
  //     item: 'I002',
  //     renter: 'U004',
  //     startDate: '2023-12-20',
  //     endDate: '2023-12-25',
  //   },
  //   {
  //     id: 'B003',
  //     item: 'I003',
  //     renter: 'U001',
  //     startDate: '2023-12-05',
  //     endDate: '2023-12-10',
  //   },
  //   {
  //     id: 'B004',
  //     item: 'I004',
  //     renter: 'U003',
  //     startDate: '2024-01-01',
  //     endDate: '2024-01-05',
  //   },
  //   {
  //     id: 'B005',
  //     item: 'I002',
  //     renter: 'U004',
  //     startDate: '2024-01-10',
  //     endDate: '2024-01-15',
  //   },
  //   {
  //     id: 'B006',
  //     item: 'I001',
  //     renter: 'U002',
  //     startDate: '2024-01-20',
  //     endDate: '2024-01-25',
  //   },
  // ])

  async function fetchBookings() {
    isLoading.value = true
    try {
      bookings.value = await jsonBinApi.fetchData(bookingsURL)
      return bookings.value
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function addBooking(booking) {
    const newID = 'B' + uuIDv4().replace(/-/g, '')
    const newBooking = {
      id: newID,
      item: booking.item,
      owner: booking.owner,
      renter: booking.renter,
      startDate: booking.startDate,
      endDate: booking.endDate,
      createdAt: new Date().toISOString(),
    }
    try {
      const updateArray = [...bookings.value, newBooking]
      //updatebin function here
      bookings.value = await jsonBinApi.updateData(bookingsURL, updateArray)
    } catch (error) {
      console.error('Error in adding booking', error)
    } finally {
      isLoading.value = false
    }
  }

  async function updateBooking(newBooking) {
    try {
      bookings.value = await jsonBinApi.updateData(
        bookingsURL,
        bookings.value.map((booking) => (booking.id === newBooking.id ? newBooking : booking)),
      )
    } catch (error) {
      console.error('Error updating booking:', error)
    }
  }

  async function deleteBooking(id) {
    try {
      const deleteID = bookings.value.find((item) => item.id === id)
      if (!deleteID) {
        throw new Error('No item found')
      }
      bookings.value = await jsonBinApi.updateData(
        bookingsURL,
        bookings.value.filter((booking) => booking.id !== id),
      )
    } catch (error) {
      console.error('Error deleting booking:', error.message)
    } finally {
      isLoading.value = false
    }
  }

  return { bookings, fetchBookings, addBooking, deleteBooking, updateBooking, isLoading }
})
