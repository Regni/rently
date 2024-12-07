<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  carouselCards: Array,
})
</script>

<template>
  <div class="carousel rounded-box">
    <div class="carousel-item" v-for="card in carouselCards">
      <img :src="card.src" alt="card.image.alt" />
    </div>
  </div>
</template>
