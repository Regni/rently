<script setup>
import { computed, ref } from 'vue'
import { useItemsStore } from '../stores/items.js'
import HeroComponent from '@/components/HeroComponent.vue'
import Slider from '@/components/slider/Slider.vue'
import Categories from '@/components/Categories.vue'
import ItemSearchListComponent from '@/components/ItemSearchListComponent.vue'

const storeItems = useItemsStore()

const items = computed(() => storeItems.items)

const limit = ref(10)
</script>

<template>
  <!-- HERO -->
  <HeroComponent
    title="Rently -  simply rent and live!"
    subtitle="Connecting people to share and rent everyday items - from tools to tech, saving money and reducing waste."
  />
  <!-- ITEM SEARCH AND LIST -->
  <ItemSearchListComponent />

  <!-- CATEGORIES -->
  <Categories />
  <!-- CAROUSEL -->
  <Slider :carouselItems="items" :limit="limit" />
</template>
