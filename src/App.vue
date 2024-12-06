<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

//For testing JSONBin:
// import { itemsApi } from './services/testJSONBin';
// const data = itemsApi.fetchItems()
// console.log(data)
</script>

<template>
  <div class="layout">
    <header>
      <Navbar />
    </header>
    <main class="content">
      <RouterView />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<style>
@import 'assets/vars.css';

/* Flexbox Layout */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  background-color: var(--color-primary, #047857);
  color: white;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
header {
  width: 100%;
}
</style>
