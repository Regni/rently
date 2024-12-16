<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/img/logo.jpg'
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
}

/* Logo */
.logo-text {
  font-family: var(--font-headings);
}

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
  margin-top: 5px;
}
.logo-text {
  display: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

/* Menu Section */
.menu {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  color: white;
  font-family: var(--font-links);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.nav-link:hover {
  background-color: var(--color-btn-hover, #065f46);
  color: #fff;
}

.active {
  background-color: #065f46;
  color: #fff;
}
a:-webkit-any-link {
  text-decoration: none;
}
@media (min-width: 768px) {
  .logo-text {
    display: block; /* Show text on medium screens and above */
  }
}
</style>
