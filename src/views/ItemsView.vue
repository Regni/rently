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
        <div class="image-container">
          <img class="item-image" :src="item.images[0]" :alt="item.name" />
          <img
            class="item-image-hover"
            v-if="item.images[1]"
            :src="item.images[1]"
            :alt="`${item.name} (hover)`"
          />
          <div class="item-details">
            <h3 class="item-title">{{ item.name }}</h3>
            <p><strong>Price:</strong> {{ item.price }}</p>
            <p><strong>Owner:</strong> {{ item.owner }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
h3,
p {
  font-family: var(--font-headings);
  text-align: left;
  color: var(--color-h2);
}

h3 {
  color: var(--color-h3);
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}

.items-container {
  padding: 1rem;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
}

.item-card {
  border-radius: 10px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.item-card:hover {
  transform: scale(1.025);
}

.item-title {
  font-size: 1.5rem;
}

.image-container {
  position: relative;
}

.item-image {
  width: 100%;
  max-width: 300px;
  height: 450px;
  border-radius: 8px;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.item-image-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  object-fit: cover;
  opacity: 0;
  border-radius: 8px;
  transition: opacity 0.3s ease;
}

.item-card:hover .item-image {
  opacity: 0;
}

.item-card:hover .item-image-hover {
  opacity: 1;
}

.item-details {
  margin: 0 auto;
}

.item-details p {
  margin: 0.5rem 0;
}

@media (max-width: 600px) {
  .items-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<!-- search bar -->
<!-- grid with items to be rented so click to open to itemDetailView. The grid should dynamicly adjust to search bar  -->
<!-- each grid item should have name-price-owner-img -->
