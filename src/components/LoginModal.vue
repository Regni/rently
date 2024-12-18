<script setup>
import { useRoute } from 'vue-router'
import 'primeicons/primeicons.css'

const route = useRoute()
</script>

<template>
  <div class="modal-container">
    <div class="modal-content">
      <h2>Login to continue</h2>
      <p>You need to be logged in to see this content.</p>
      <RouterLink :to="{ name: 'login', query: { from: route.fullPath } }">
        <button class="btn">Login</button>
      </RouterLink>
      <p class="register-redirect">
        Don't have an account? <router-link :to="{ name: 'register' }">Register</router-link>
      </p>
      <div class="home-redirect">
        <router-link :to="{ name: 'home' }">
          <p class="home-text"><span class="arrow">← </span>Back Home <br /></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.modal-content {
  background-color: var(--color-third);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2em;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-family: var(--font-links);
  color: var(--color-secondary);
  margin-top: 2em;
  margin-bottom: 1em;
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}

.btn {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
  width: 100px;
  font-size: 1.2em;
}

.register-redirect,
.home-redirect {
  font-family: var(--font-basic);
  font-size: 0.9rem;
  color: var(--color-basic-text);
}

.register-redirect {
  font-size: 0.8rem;
}

.home-redirect {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 3em;
}

.register-redirect a,
.home-redirect p {
  font-family: var(--font-links);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.register-redirect a:hover,
.home-text:hover {
  text-decoration: underline;
}

.arrow {
  font-size: 2em;
  color: var(--color-secondary);
}
</style>
