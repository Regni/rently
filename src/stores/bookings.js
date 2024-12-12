import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { jsonBinApi } from '@/services/jsonBinApi'
import { v4 as uuIDv4 } from 'uuid'
import dummyData from '@/assets/dummyData.json'

const bookingsURL = import.meta.env.VITE_JSONBIN_BIN_URL_BOOKINGS

export const useBookingsStore = defineStore('bookings', () => {
  const bookings = ref(dummyData.bookings)
  const isLoading = ref(false)
  const error = ref(null)

  // if you want to use dummy data just comment this line out.
  // onMounted(fetchBookings)

  async function fetchBookings() {
    isLoading.value = true
    error.value = null
    try {
      bookings.value = await jsonBinApi.fetchData(bookingsURL)
      return bookings.value
    } catch (error) {
      console.error('Error fetching bookings:', error)
      error.value = 'Error fetching bookings:' + error
    } finally {
      isLoading.value = false
    }
  }
  //Add new bookings
  async function addBooking(booking) {
    isLoading.value = true
    error.value = null
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
      bookings.value = await jsonBinApi.updateData(bookingsURL, updateArray)
    } catch (error) {
      console.error('Error in adding booking:', error)
      error.value = 'Error in adding booking: ' + error
    } finally {
      isLoading.value = false
    }
  }
  //update a excisting booking
  async function updateBooking(newBooking) {
    isLoading.value = true
    error.value = null
    try {
      bookings.value = await jsonBinApi.updateData(
        bookingsURL,
        bookings.value.map((booking) => (booking.id === newBooking.id ? newBooking : booking)),
      )
    } catch (error) {
      console.error('Error updating booking:', error)
      error.value = 'Error updating booking:' + error
    } finally {
      isLoading.value = false
    }
  }
  //delete a booking
  async function deleteBooking(id) {
    isLoading.value = true
    error.value = null
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
      console.error('Error deleting booking:', error)
      error.value = 'Error deleting booking:' + error.message
    } finally {
      isLoading.value = false
    }
  }

  return { bookings, fetchBookings, addBooking, deleteBooking, updateBooking, isLoading, error }
})
