<script setup>
import { defineProps, ref } from 'vue'
import HomeItem from '@/components/HomeItem.vue'

const props = defineProps({
  carouselItems: {
    type: Object,
    required: true,
  },
  limit: {
    type: Number,
    default: 10,
  },
})

const carouselContainer = ref(null)

const scrollCarousel = (direction) => {
  if (carouselContainer.value) {
    const scrollAmount = direction === 'left' ? -300 : 300 // Adjust scroll increment
    carouselContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="carousel-wrapper">
    <h2>Latest Items</h2>
    <!-- Navigation Buttons -->
    <button class="carousel-btn left" @click="scrollCarousel('left')">&lt;</button>

    <!-- Carousel -->
    <div class="carousel" ref="carouselContainer">
      <HomeItem
        v-for="item in carouselItems.slice(0, props.limit)"
        :key="item.id"
        :item="item"
        class="carousel-item"
      />
    </div>

    <!-- Navigation Buttons -->
    <button class="carousel-btn right" @click="scrollCarousel('right')">&gt;</button>
  </div>
</template>

<style scoped>
/* Wrapper for Carousel */
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
}

h2 {
  font-family: var(--font-headings);
  color: var(--color-h2);
  font-size: 2.5em;
  font-weight: 500;
}
/* Carousel Container */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

/* Individual Carousel Items */
.carousel-item {
  flex: 0 0 auto;
  position: relative;
  text-align: center;
}

/* Image Container */
.image-container {
  position: relative;
  width: 20rem;
  height: 20rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Navigation Buttons */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
}

.carousel-btn.left {
  left: 3rem;
}

.carousel-btn.right {
  right: 3rem;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
/* Carousel Items */
.carousel-item {
  flex: 0 0 calc(33.33% - 1rem); /* 3 items per row on larger screens */
  max-width: 100%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--color-third, #fff);
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s;
}

.carousel-item:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .carousel-item {
    flex: 0 0 calc(50% - 1rem); /* 2 items per row on tablets */
  }
}

@media (max-width: 768px) {
  .carousel-item {
    flex: 0 0 calc(100% - 1rem); /* 1 item per row on smaller screens */
  }
}
</style>
