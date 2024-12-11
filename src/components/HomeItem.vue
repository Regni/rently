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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  background-color: #fff;
  width: 20rem;
  height: 20rem;
}

.card-image {
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 8px;
}
</style>
