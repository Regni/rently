<script setup>
import { RouterView } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="layout">
    <HeaderComponent />

    <main class="content">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style>
/* Flexbox Layout */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.content {
  flex: 1;
}
</style>
