const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': import.meta.env.VITE_JSONBIN_API_KEY,
  'X-Access-Key': import.meta.env.VITE_JSONBIN_BIN_URL_ITEMS,
}

export const itemsApi = {
  async fetchItems() {
    const response = await fetch(import.meta.env.VITE_JSONBIN_BIN_URL_ITEMS, { headers })
    const data = await response.json()
    console.log(data)
    return data.record.items
  },
}
