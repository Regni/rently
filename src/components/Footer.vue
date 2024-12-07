<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="footer-container">
    <div class="copyright">
      <p>&copy; 2024 Rently. All rights reserved.</p>
    </div>
    <div class="more-information">
      <RouterLink to="/about">General rules</RouterLink>
      <RouterLink to="/contact">Privacy</RouterLink>
      <RouterLink to="/contact">Terms and Compatibility</RouterLink>
      <RouterLink to="/contact">|</RouterLink>
      <RouterLink to="/contact-us">Contact us</RouterLink>
    </div>
    <div class="socialMedia-icons">
      <i class="pi pi-at icon"></i>
      <i class="pi pi-twitter icon"></i>
      <i class="pi pi-instagram icon"></i>
      <i class="pi pi-facebook icon"></i>
      <i class="pi pi-google icon"></i>
      <i class="pi pi-github icon"></i>
      <i class="pi pi-linkedin icon"></i>
      <i class="pi pi-paypal icon"></i>
    </div>
  </section>
</template>

<style scoped>
/* Footer Styles */
.footer-container {
  background-color: var(--color-primary, #047857);
  color: white;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
}

.more-information {
  display: flex;
  gap: 1rem;
  text-decoration: none;
}

.socialMedia-icons {
  padding-right: 2rem;
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
}
.icon {
  font-size: 1.5rem;
  color: white;
}
a:-webkit-any-link {
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer {
    padding: 0.5rem 0;
    font-size: 0.875rem;
  }
}
</style>
