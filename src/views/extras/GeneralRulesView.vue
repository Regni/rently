<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="general-rules">
    <h1 class="title">General Rules for Using Rently</h1>
    <p class="message">
      Welcome to Rently! To ensure a safe and reliable experience for all users, we ask that you
      follow these general rules:
    </p>

    <ul class="rules-list">
      <li>
        <strong>Be Honest and Transparent</strong>: Provide accurate descriptions, photos, and terms
        for any item you list. Transparency helps build trust.
      </li>
      <li>
        <strong>Respect Other Users</strong>: Treat all users with respect. Harassment or
        inappropriate behavior will not be tolerated.
      </li>
      <li>
        <strong>Maintain Item Quality</strong>: Ensure that items you list are clean, functional,
        and in good condition. Return items in the same condition you received them.
      </li>
      <li>
        <strong>Follow Rental Agreements</strong>: Adhere to the agreed-upon rental terms, including
        fees, deadlines, and conditions.
      </li>
      <li>
        <strong>Report Issues Promptly</strong>: If any disputes arise, contact Rently’s support
        team immediately.
      </li>
      <li>
        <strong>Use the Platform Responsibly</strong>: Only use Rently for legitimate rental
        transactions. Misrepresentation or illegal activities are strictly prohibited.
      </li>
      <li>
        <strong>Respect Local Laws</strong>: Ensure all rental activities comply with local laws and
        regulations.
      </li>
    </ul>

    <p class="closing">
      By following these rules, you help us create a positive, trustworthy community. Thank you for
      using Rently!
    </p>

    <RouterLink to="/" class="btn">Back to Home</RouterLink>
  </section>
</template>

<style scoped>
.general-rules {
  padding: 2rem;
  display: flex;
  flex-direction: column;
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

.rules-list {
  list-style-type: none;
  padding-left: 2rem;
  font-family: var(--font-basic);
}

.rules-list li {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
}

.rules-list li strong {
  font-weight: bold;
}

.closing {
  margin-top: 2rem;
  font-size: 1.2rem;
  font-family: var(--font-basic);
  margin-bottom: 1rem;
}

.btn {
  width: 10rem;
}
</style>
