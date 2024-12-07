<script setup>
import { RouterLink, useRoute } from 'vue-router'
import logo from '@/assets/img/logo.jpg'

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="logo-section">
          <RouterLink class="logo-link" :to="{ name: 'home' }">
            <img class="logo-img" :src="logo" alt="Rently logo" />
            <span class="logo-text">Rently</span>
          </RouterLink>
        </div>
        <!-- SEARCH COMPONENT TO BE ADDED -->
        <div class="search-section">
          <input class="search-input" id="search" type="text" placeholder="Search" />
          <button class="search-button">Search</button>
        </div>
        <div class="menu">
          <RouterLink
            :to="{ name: 'home' }"
            :class="[isActiveLink('/') ? 'active' : '', 'nav-link']"
            >Home</RouterLink
          >
          <RouterLink
            :to="{ name: 'about' }"
            :class="[isActiveLink('/about') ? 'active' : '', 'nav-link']"
            >About</RouterLink
          >
          <RouterLink
            :to="{ name: 'items' }"
            :class="[isActiveLink('/items') ? 'active' : '', 'nav-link']"
            >Items</RouterLink
          >
          <RouterLink
            :to="{ name: 'contact-us' }"
            :class="[isActiveLink('/contact-us') ? 'active' : '', 'nav-link']"
            >Contact Us</RouterLink
          >
          <RouterLink
            :to="{ name: 'login' }"
            :class="[isActiveLink('/login') ? 'active' : '', 'nav-link']"
            >Login</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
/* Navbar */

.navbar {
  background-color: var(--color-primary, #047857);
  border-bottom: 1px solid #fff;
  height: 5rem;
  margin: auto 0;
  max-height: 50px;
}
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  margin-top: 5px;
}
.logo-text {
  display: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

/* Search Section */
.search-section {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.search-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
  height: 10px;
  width: 500px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #047857;
  outline: none;
}

.search-button {
  padding: 0.5rem 1rem;
  background-color: #047857;
  height: auto;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* Menu Section */
.menu {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  color: #000;
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
