<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/img/logo-green.png'
import Navbar from './Navbar.vue'
import Search from './Search.vue'
</script>

<template>
  <header>
    <div class="logo-section">
      <RouterLink class="logo-link" :to="{ name: 'home' }">
        <img class="logo-img" :src="logo" alt="Rently logo" />
        <span class="logo-text">Rently</span>
      </RouterLink>
    </div>

    <!-- SEARCH COMPONENT -->
    <Search />

    <Navbar />
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-primary, #047857);
  border-bottom: 1px solid #fff;
  min-height: 5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* z-index: 1000; */
}

/* Logo */
.logo-section {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: 1rem;
  text-decoration: none;
}
.logo-img {
  height: 2.5rem;
  width: auto;
}
.logo-text {
  font-family: var(--font-headings);
  display: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 0.5rem;
}

@media (min-width: 768px) {
  .logo-text {
    display: block;
  }
}

@media (max-width: 580px) {
  header {
    padding: 1em;
    align-items: start;
    min-height: 8rem;
    justify-content: space-between;
  }
}
</style>
