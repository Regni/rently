import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': import.meta.env.VITE_JSONBIN_API_KEY,
}

export const bookingsApi = {
  async fetchBookings() {
    console.log(headers)
    const response = await axios.get(import.meta.env.VITE_JSONBIN_BIN_URL_BOOKINGS, { headers })
    const data = await response.data.record
    return data
  },
}
