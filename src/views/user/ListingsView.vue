<script setup>
import { useItemsStore } from '@/stores/items'
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'

//THIS VIEW WAS CREATED BY ANNA-SARA, ELLEN ONLY ADDED THE DELETE ITEM FUNCTIONALITY

const itemsStore = useItemsStore()
const usersStore = useUsersStore()

const items = computed(() => {
  const activeUserId = usersStore.activeUser?.id
  return itemsStore.items.filter((item) => item.owner === activeUserId)
})
</script>

<template>
  <section class="listings">
    <h1>My Listings</h1>
    <div class="container">
      <p v-if="items.length === 0">You have no active listings.</p>
      <div v-for="item in items" :key="item.id">
        <router-link :to="{ name: 'item-details', params: { id: item.id } }">
          <div class="item-card">
            <img class="item-image" :src="item.images[0]" :alt="item.name" />
            <div class="item-details">
              <h3 class="item-title">{{ item.name }}</h3>
              <p><strong>Price: </strong> {{ item.price }} kr</p>
            </div>
          </div></router-link
        >
      </div>
    </div>
    <router-link :to="{ name: 'create-item' }">
      <button class="btn">+ Add New Listing</button>
    </router-link>
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

h1 {
  font-family: var(--font-headings);
  margin: 1em;
  color: var(--color-h2);
  font-size: 3em;
}

.item-image {
  margin-bottom: 1rem;
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
