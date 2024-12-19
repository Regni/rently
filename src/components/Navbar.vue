<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import LogoutComponent from './LogoutComponent.vue'

const route = useRoute()
const usersStore = useUsersStore()

const activeUserEmail = computed(() => usersStore.activeUser?.email || '')
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
    <RouterLink
      @click="closeMenu"
      v-if="!activeUserEmail"
      :to="{ name: 'login', query: { from: route.fullPath } }"
      >Log in</RouterLink
    >
    <router-link
      class="register-link"
      v-if="!activeUserEmail"
      :to="{ name: 'register', query: { from: route.fullPath } }"
      >Register</router-link
    >
    <div v-else class="logged-in-links">
      <RouterLink :to="{ name: 'dashboard-listings' }">Dashboard</RouterLink>
      <LogoutComponent />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease;
}
.nav {
  display: flex;
  gap: 0.2em;
}

.logged-in-links {
  display: flex;
  gap: 0.2em;
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
  align-items: flex-end;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: var(--color-primary);
  padding: 1rem;
  z-index: 1000;
}

/* Hides navigation links on smaller screens by default */
@media (max-width: 1068px) {
  .nav {
    position: absolute;
    top: 70px;
    right: 0;
    width: 150px;
    background-color: var(--color-primary);
    flex-direction: column;
    transform: translateY(-100%);
    visibility: hidden;
    opacity: 0;
    padding: 10px;
    border-radius: 6px;
    align-items: center;
    border: 1px solid #fff;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .nav-open {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
}

/* Show navigation links on larger screens */
@media (min-width: 1068px) {
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

.register-link {
  background-color: #cccc39;
  color: var(--color-basic-text);
}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
