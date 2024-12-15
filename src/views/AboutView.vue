<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="about">
    <h1 class="title">About Us</h1>
    <p class="message">
      Welcome to Rently, your trusted platform for renting and letting! Whether you're looking to
      rent items or have something to offer, Rently makes the process quick, easy, and secure. Our
      mission is to connect people with the resources they need while fostering a community that
      values sustainability and convenience. At Rently, we believe in sharing over owning. From
      electronics to furniture, outdoor gear to everyday essentials, you can find it all here.
      Renting not only saves money but also reduces waste, helping us move towards a more
      sustainable future. Join Rently today and discover the smarter way to rent and let others rent
      with ease!
    </p>
    <RouterLink to="/" class="btn">Back To Home</RouterLink>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
.btn {
  width: 10rem;
}
</style>
