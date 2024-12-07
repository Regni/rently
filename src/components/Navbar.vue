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
          <RouterLink :to="{ name: 'home' }">
            <img class="logo" :src="logo" alt="Rently logo" />
            <span class="site-name">Rently</span>
          </RouterLink>
        </div>
        <div class="search-section">
          <label for="search">Sök</label>
          <input id="search" type="text" placeholder="Search" />
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
  border-bottom: 1px solid #059669;
  height: 5rem;
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
  align-items: center;
  text-decoration: none;
  color: #fff;
  margin-right: 1rem;
}

.logo {
  height: 2.5rem;
  width: auto;
}

.site-name {
  /* display: none; */
  color: #000;
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
</style>
