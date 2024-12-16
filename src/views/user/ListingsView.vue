<script setup>
import { useItemsStore } from '@/stores/items'
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'

const itemsStore = useItemsStore()
const usersStore = useUsersStore()

// Hardcode a specific user for testing
usersStore.activeUser = {
  id: 'U001',
}

const items = computed(() => {
  const activeUserId = usersStore.activeUser?.id
  return itemsStore.items.filter((item) => item.owner === activeUserId)
})
</script>

<template>
  <section class="listings">
    <h2>My Listings</h2>
    <div class="container">
      <p v-if="items.length === 0">You have no active listings.</p>
      <div v-for="item in items" :key="item.id">
        <router-link :to="{ name: 'item-details', params: { id: item.id } }">
          <div class="item-card">
            <img class="item-image" :src="item.images[0]" :alt="item.name" />
            <div class="item-details">
              <h3 class="item-title">{{ item.name }}</h3>
              <p><strong>Price:</strong> {{ item.price }} kr</p>
            </div>
          </div></router-link
        >
      </div>
    </div>
    <button class="btn">+ Add New Listing</button>
  </section>
</template>

<style scoped>
.listings {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

h2 {
  font-family: var(--font-headings);
  margin: 1em;
  color: var(--color-h2);
}

.item-card {
  background-color: var(--color-third);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  border-radius: 8px;
  padding: 1.5rem;
  width: auto;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 1em;
}

.item-card:hover {
  opacity: 0.8;
  cursor: pointer;
}

h3 {
  font-family: var(--font-links);
  color: var(--color-secondary);
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}

.btn {
  font-size: 1.2em;
  margin: 1em 0em 2em 0em;
}
</style>
