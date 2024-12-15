<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="privacy">
    <h1 class="title">Privacy Policy</h1>
    <p class="intro">
      At Rently, we take your privacy seriously. This Privacy Policy outlines how we collect, use,
      and protect your personal information when you use our platform.
    </p>

    <h2>1. Information We Collect</h2>
    <p>We collect personal information that you provide to us, including:</p>
    <ul class="info-list">
      <li>Your name, email address, and phone number when you register or contact us.</li>
      <li>Your rental listings, including descriptions, images, and pricing information.</li>
      <li>Your payment information for transaction processing.</li>
      <li>Usage data, such as the pages you visit and how you interact with the platform.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use your information for the following purposes:</p>
    <ul class="info-list">
      <li>To provide, improve, and personalize our services to you.</li>
      <li>To process transactions and payments for rental services.</li>
      <li>
        To communicate with you, including updates on your rental activities or changes to our
        policies.
      </li>
      <li>
        To prevent fraud, enforce our terms of service, and ensure a safe environment for all users.
      </li>
    </ul>

    <h2>3. How We Protect Your Information</h2>
    <p>
      We implement a variety of security measures to protect your personal information. These
      include:
    </p>
    <ul class="info-list">
      <li>Encryption of sensitive data during transmission.</li>
      <li>Secure storage of data on our servers.</li>
      <li>Regular audits of our security practices to ensure we are meeting industry standards.</li>
    </ul>

    <h2>4. Sharing Your Information</h2>
    <p>
      We do not sell or rent your personal information to third parties. We may share your
      information in the following circumstances:
    </p>
    <ul class="info-list">
      <li>
        With service providers who assist us in operating the platform and processing payments.
      </li>
      <li>
        With law enforcement or other authorities if required by law or to protect the rights and
        safety of our users.
      </li>
    </ul>

    <h2>5. Your Rights</h2>
    <p>You have the right to:</p>
    <ul class="info-list">
      <li>Access the personal information we hold about you.</li>
      <li>Request the correction or deletion of your personal information.</li>
      <li>Opt out of certain communications or marketing emails.</li>
    </ul>

    <h2>6. Changes to This Privacy Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. Any changes will be posted on this page,
      and the effective date will be updated accordingly.
    </p>

    <h2>7. Contact Us</h2>
    <p class="closing">
      If you have any questions or concerns about this Privacy Policy, please contact us at
      <RouterLink to="mailto:contact@rently.com">contact@rently.com</RouterLink>.
    </p>

    <RouterLink to="/" class="btn">Back to Home</RouterLink>
  </section>
</template>

<style scoped>
.privacy {
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

.info-list {
  margin-left: 2rem;
  font-family: var(--font-basic);
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: var(--font-basic);
}

h2,
p {
  font-family: var(--font-basic);
}

.closing {
  margin-bottom: 2rem;
}
.btn {
  width: 10rem;
}
</style>
