<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="contact-us">
    <h1>Contact Us</h1>
    <bold><p>Email: kindaprogramming@totallyrealemail.com</p></bold>
    <RouterLink to="/" class="btn">Back To Home</RouterLink>
  </section>
</template>
<style scoped>
.contact-us {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  gap: 2em;
}

h1 {
  font-family: var(--font-headings);
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 3em;
  color: var(--color-h1);
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}
</style>
