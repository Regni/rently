<script setup>
import { computed, defineProps } from 'vue'
import { useItemsStore } from '../stores/items.js'
import HeroComponent from '@/components/HeroComponent.vue'
import Slider from '@/components/slider/Slider.vue'
import Categories from '@/components/Categories.vue'
import ItemSearchListComponent from '@/components/ItemSearchListComponent.vue'

const storeItems = useItemsStore()

const items = computed(() => storeItems.items)

defineProps({
  limit: {
    type: Number,
    default: 10,
  },
})
</script>

<template>
  <!-- HEOR -->
  <HeroComponent
    title="Rently, Simply rent and live"
    subtitle="Search and find whatever you need to rent or rent out. Find what you are looking for quickly and easily."
  />
  <!-- ITEM SEARCH AND LIST -->
  <ItemSearchListComponent />

  <!-- CATEGORIES -->

  <Categories />
  <!-- CAROUSEL -->
  <Slider :carouselItems="items" :limit="limit" />
</template>
