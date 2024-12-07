<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  carouselImages: Array, // Expecting an array of image objects { src: '', alt: '' }
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
    <!-- Navigation Buttons -->
    <button class="carousel-btn left" @click="scrollCarousel('left')">&lt;</button>

    <!-- Carousel -->
    <div class="carousel" ref="carouselContainer">
      <div class="carousel-item" v-for="image in carouselImages" :key="image.src">
        <div class="image-container">
          <img :src="image.src" :alt="image.alt" />
          <button class="rent-btn">Rent</button>
        </div>
      </div>
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
}

/* Carousel Container */
.carousel {
  display: flex;
  overflow-x: auto; /* Enables horizontal scrolling */
  scroll-behavior: smooth; /* Smooth scrolling */
  gap: 1rem; /* Spacing between items */
  padding: 1rem 0;
  scrollbar-width: none; /* Hides scrollbar in Firefox */
}

.carousel::-webkit-scrollbar {
  display: none; /* Hides scrollbar in Chrome, Safari, etc. */
}

/* Individual Carousel Items */
.carousel-item {
  flex: 0 0 auto; /* Prevent items from shrinking or stretching */
  position: relative;
  text-align: center;
}

/* Image Container */
.image-container {
  position: relative;
  width: 20rem; /* Set fixed width for images */
  height: 20rem; /* Set fixed height for images */
}

img {
  width: 100%; /* Match the container's width */
  height: 100%; /* Match the container's height */
  object-fit: cover;
  border-radius: 8px;
}

/* Rent Button */
.rent-btn {
  position: absolute;
  bottom: 10%; /* Position near the bottom of the image */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  background-color: #047857; /* Green background */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s;
}

.rent-btn:hover {
  background-color: #065f46; /* Darker green on hover */
}

/* Show Button on Hover */
.image-container:hover .rent-btn {
  opacity: 1; /* Make button visible when hovering over the image */
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
  left: 1rem;
}

.carousel-btn.right {
  right: 1rem;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
