<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section class="about">
    <h1 class="title">About Us</h1>
    <h2>Welcome to Rently - The Rent, Don't Buy Revolution!</h2>
    <p class="message">
      At Kinda Programming, we’re just a bunch of ambitious students who believe that sharing is
      caring – and also pretty darn practical. Imagine this: instead of cluttering your home (and
      emptying your wallet) with tools, gadgets, or gear you only use once in a blue moon, you can
      simply rent what you need. Yep, it's as easy as that.
    </p>
    <p class="message">
      Rently is our heartwarming answer to overconsumption and unnecessary waste. Why buy when you
      can rent? By connecting neighbors, friends, and local communities, we’re creating a space
      where stuff gets used, not wasted. Got a power drill collecting dust? Rent it out to someone
      who’s fixing their shelf. Need a tent for that one camping trip? Rent it from your neighbor
      instead of shelling out cash for a new one.
    </p>
    <p class="message">
      With Rently, you’re not just saving money – you’re also saving the planet (and making your
      garage less of a black hole). Because we think the future looks a little brighter when we all
      share what we’ve got.
    </p>
    <p class="message">
      So, join us! Together, we can build a community where kindness, sustainability, and a little
      ingenuity go a long way. Rent more. Waste less. Share happy.
    </p>
    <p class="message from-text">
      Kinda Programming – renting stuff, saving the world, one item at a time. 🌱
    </p>
    <RouterLink to="/" class="btn">Back To Home</RouterLink>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  gap: 1em;
}
.title {
  font-family: var(--font-headings);
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  font-size: 3em;
  color: var(--color-h1);
}

.message {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
  width: clamp(300px, 80%, 650px);
  text-align: justify;
}

.from-text {
  font-style: italic;
}

h2 {
  font-family: var(--font-links);
  color: var(--color-secondary);
  width: clamp(300px, 80%, 650px);
  text-align: center;
}
</style>
