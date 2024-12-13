<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- menu button for small screens -->
  <button class="btn" @click="toggleMenu" aria-label="Toggle Menu">Menu</button>

  <nav :class="{ nav: true, 'nav-open': isMenuOpen }">
    <RouterLink @click="closeMenu" :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink @click="closeMenu" :to="{ name: 'about' }">About</RouterLink>
    <RouterLink @click="closeMenu" :to="{ name: 'items' }">Items</RouterLink>
    <RouterLink @click="closeMenu" :to="{ name: 'contact-us' }">Contact Us</RouterLink>
    <RouterLink @click="closeMenu" :to="{ name: 'login' }">Login</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease;
}
nav a.router-link-exact-active {
  background-color: var(--color-btn);
  color: #fff;
}

nav a {
  color: #fff;
  font-family: var(--font-links);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;
}

nav a:hover {
  background-color: var(--color-btn-hover);
  color: #fff;
}

.nav-open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--color-primary, #047857);
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Hides navigation links on smaller screens by default */
@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: 70px;
    left: 0;
    width: 150px;
    background-color: var(--color-primary);
    flex-direction: column;
    transform: translateY(-100%);
    visibility: hidden;
    opacity: 0;
    padding: 10px;
  }

  .nav-open {
    transform: translateY(-100%);
    transform: translateX(400%);
    visibility: visible;
    opacity: 1;
  }
}

/* Show navigation links on larger screens */
@media (min-width: 768px) {
  .btn {
    display: none;
  }

  .nav {
    position: static;
    transform: none;
    visibility: visible;
    opacity: 1;
    flex-direction: row;
  }
}
</style>
