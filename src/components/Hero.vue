<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Rently, Simply rent and live',
    required: true,
  },
  subtitle: {
    type: String,
    default: 'Search and find whatever you need to rent',
    required: true,
  },
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="text-center">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Styling */
.hero-section {
  background-color: var(--color-primary, #047857); /* Tailwind's bg-green-700 */
  padding: 1rem 0; /* Equivalent to py-20 */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
}

/* Container Styling */
.hero-container {
  max-width: 1280px; /* Equivalent to max-w-7xl */
  margin: 0 auto; /* Equivalent to mx-auto */
  padding: 0 1rem; /* Equivalent to px-4 */
}

.hero-title {
  font-family: var(--font-headings);
  margin-top: 10px;
  margin-bottom: 0;
}

.hero-subtitle {
  font-family: var(--font-basic);
}

@media (min-width: 640px) {
  .hero-container {
    padding: 0 1.5rem; /* Equivalent to sm:px-6 */
  }
}

@media (min-width: 1024px) {
  .hero-container {
    padding: 0 2rem; /* Equivalent to lg:px-8 */
  }
}

/* Text Centering */
.text-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Title Styling */
.hero-title {
  font-size: 2.25rem; /* Equivalent to text-4xl */
  font-weight: 500;
  color: white;

  /* Responsive Font Sizes */
  @media (min-width: 640px) {
    font-size: 3rem; /* Equivalent to sm:text-5xl */
  }

  @media (min-width: 768px) {
    font-size: 3.75rem; /* Equivalent to md:text-6xl */
  }
}

/* Subtitle Styling */
.hero-subtitle {
  margin: 1rem 0; /* Equivalent to my-4 */
  font-size: 1.25rem; /* Equivalent to text-xl */
  color: white;
}
</style>
