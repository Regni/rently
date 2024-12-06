<script setup>
import { useItemsStore } from '@/stores/items.js'
import { computed } from 'vue'

const itemsStore = useItemsStore()
const items = computed(() => itemsStore.items)
</script>

<template>
  <div class="items-container">
    <h2 class="itemPage-title">Items</h2>
    <div class="items-grid">
      <div v-for="item in items" :key="item.id" class="item-card">
        <h3 class="item-title">{{ item.name }}</h3>
        <img class="item-image" :src="item.images[0]" :alt="item.name" />
        <div class="item-details">
          <p><strong>Price:</strong> {{ item.price }}</p>
          <p><strong>Owner:</strong> {{ item.owner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Global styles -->
<style></style>

<style scoped>
.items-container {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.itemPage-title {
  padding: 1rem;
  font-size: 2rem;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
}

/* Mobile */
@media (max-width: 600px) {
  .items-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Tablet */
@media (max-width: 1000px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item-card {
  justify-self: center;
  /* width: 400px; */
  max-width: 500px;
  border: 1.5px solid rgb(31, 31, 31);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
}

.item-card:hover {
  transform: scale(1.025);
}

.item-title {
  font-size: 1.5rem;
  padding: 1rem;
}

.item-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.item-details {
  margin: 1rem 0;
}

.item-details p {
  margin: 0.5rem 0;
}
</style>

<!-- search bar -->
<!-- grid with items to be rented so click to open to itemDetailView. The grid should dynamicly adjust to search bar  -->
<!-- each grid item should have name-price-owner-img -->
