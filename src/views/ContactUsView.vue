<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="contact-us">
    <h1 class="title">Contact Us</h1>
    <p class="message">Have any questions or need assistance? Feel free to reach out to us!</p>
    <div class="contact-details">
      <p><strong>Address:</strong> 123 Main Street, Rentville, RE 56789</p>
      <p><strong>Email:</strong> support@rently.com</p>
      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
    </div>
    <RouterLink to="/" class="btn">Back To Home</RouterLink>
  </section>
</template>

<style scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: center;
  padding: 2rem;
  background-color: var(--color-background);
  min-height: 100vh;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-family: var(--font-headings);
}

.message {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: var(--font-basic);
}

.contact-details {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.contact-details p {
  margin: 0.5rem 0;
}

.btn {
  width: 10rem;
}
</style>
