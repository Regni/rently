import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': import.meta.env.VITE_JSONBIN_API_KEY,
}

export const jsonBinApi = {
  //gets data from jsonbin, send correct bin URL.
  async fetchData(URL) {
    const response = await axios.get(URL, { headers })
    const data = await response.data.record
    return data
  },
  //updates the jsonbin and need correct bin URL.
  async updateData(URL, updatedArray) {
    const response = await axios.put(URL, updatedArray, { headers })
    const data = await response.data.record
    return data
  },
}
