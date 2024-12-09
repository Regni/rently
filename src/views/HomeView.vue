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
  <div>
    <!-- HEOR -->
    <Hero />
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

<!-- "Rent Products": "Browse and book items for rent." "Rent Out Your Items": "Share your products and
start earning." -->
