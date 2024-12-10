<script setup>
import { RouterLink } from 'vue-router'
import { useItemsStore } from '../stores/items.js'
import Hero from '@/components/Hero.vue'
import Slider from '@/components/slider/Slider.vue'
import Categories from '@/components/Categories.vue'

const storeItems = useItemsStore()

console.log(storeItems.items)

const carouselImages = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bike',
  },
  {
    src: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Computer',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Table',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Car',
  },
]
</script>

<template>
  <!-- HEOR -->
  <Hero />
  <div>
    <div class="buttons">
      <!-- Cards Section -->
      <div class="cards-container">
        <!-- Card 1 -->
        <div class="card">
          <h3>Search for Items</h3>
          <p>Find what you're looking for quickly and easily.</p>
          <button class="btn btn-search">Search for Items</button>
        </div>
        <!-- Card 2 -->
        <div class="card">
          <h3>List Your Items</h3>
          <p>Share your items with others and connect.</p>
          <button class="btn btn-list">List Your Items</button>
        </div>
      </div>
    </div>

    <!-- CATEGORIES -->

    <Categories />
    <!-- CAROUSEL -->
    <!-- this is going to be filled with card components with carousel images -->
    <Slider :carouselImages="carouselImages" />
    <!-- background img -->

    <!-- button component for renting and renting out items -->
    <!-- <RouterLink :to="{ name: 'items' }"><button>renting</button></RouterLink> -->

    <!-- <RouterLink :to="{ name: 'create-item' }"><button>rentals</button></RouterLink> -->
    <!-- search bar which links to itemsview -->

    <!-- latest rent outs carousel-->

    <!-- users/reviews? -->
  </div>
</template>

<style scoped>
.buttons {
  margin-top: 1rem;
}

.btn {
  width: 150px;
  align-self: center;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background-color: var(--color-third);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
  border-radius: 8px;
  padding: 1.5rem;
  width: 300px;
  height: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 0.5rem;
  color: var(--color-h3);
  font-family: var(--font-links);
}

p {
  margin-bottom: 1rem;
  color: var(--color-basic-text);
  font-family: var(--font-basic);
  font-size: 0.9em;
}
</style>
<!-- "Rent Products": "Browse and book items for rent." "Rent Out Your Items": "Share your products and
start earning." -->
