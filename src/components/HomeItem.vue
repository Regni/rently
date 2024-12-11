<script setup>
import { RouterLink } from 'vue-router'
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const showFullDescription = ref(false)

const truncatedDescription = computed(() => {
  let description = props.item.description
  if (!showFullDescription.value) {
    description = description.substring(0, 30) + '...'
  }
  return description
})
</script>

<template>
  <div class="card-container">
    <div class="card-image">
      <img :src="item.images?.[0]" :alt="item.name" />
    </div>
    <div class="card-information">
      <h4 class="card-title">{{ item.name }}</h4>
      <p class="card-description">{{ truncatedDescription }}</p>
      <div class="card-price-moreInfo">
        <p class="card-price">{{ item.price }} kr</p>
        <RouterLink :to="{ name: 'item-details', params: { id: item.id } }">More</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
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

.card-container:hover {
  opacity: 0.8;
  cursor: pointer;
}
.card-image {
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 8px;
}
h4 {
  font-family: var(--font-links);
  color: var(--color-secondary);
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}

.card-price-moreInfo {
  display: flex;
  flex-direction: row;
  gap: 5em;
}
</style>
