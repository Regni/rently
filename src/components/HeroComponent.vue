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
.hero-section {
  background-color: var(--color-primary, #047857);
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    padding: 0 2rem;
  }
}

.text-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 500;
  color: white;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
}

.hero-subtitle {
  margin: 1rem 0;
  font-size: 1.25rem;
  color: white;
}
</style>
