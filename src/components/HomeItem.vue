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
    description = description.substring(0, 40) + '...'
  }
  return description
})
</script>

<template>
  <RouterLink :to="{ name: 'item-details', params: { id: item.id } }">
    <div class="item-card">
      <img class="item-image" :src="item.images?.[0]" :alt="item.name" />
      <div class="card-information">
        <h3 class="card-title">{{ item.name }}</h3>
        <p class="card-description">{{ truncatedDescription }}</p>
        <div class="card-price-moreInfo">
          <p><strong>Price: </strong>{{ item.price }} kr</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
h3 {
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
  align-items: center;
  margin-top: 10px;
}

.item-card {
  margin-top: 1em;
  margin-bottom: 5em;
}
</style>
