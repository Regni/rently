import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_JSONBIN_BIN_URL_ITEMS_TEST,
  headers: {
    'Content-Type': 'application/json',
    'X-Master-Key': import.meta.env.VITE_JSONBIN_API_KEY,
  },
})

export const itemsApiCrud = {
  async fetchItems() {
    const response = await apiClient.get('/')
    console.log('Items:', response.data.record)
    return response.data.record
  },

  async createItem(items, newItem) {
    return this.updateBin([...items, newItem])
  },

  // async updateItem(items, id, updatedItem) {
  //   const updatedItems = items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
  //   return this.updateBin(updatedItems)
  // },

  // async deleteItem(items, id) {
  //   const filteredItems = items.filter((item) => item.id !== id)
  //   return this.updateBin(filteredItems)
  // },

  async updateBin(items) {
    const response = await apiClient.put('/', { items })
    return response.data.record
  },
}
