<script setup>
import { ref } from 'vue'
const itemDummy = ref({
  id: 'I201',
  name: 'Mountain Bike',
  description: 'A high-quality mountain bike suitable for all terrains.',
  price: 450,
  category: ['Sports', 'Outdoor'],
  publishedDate: '2023-06-15',
  owner: 'U101',
  renter: 'U201',
  images: [
    'https://example.com/images/mountain-bike-1.jpg',
    'https://example.com/images/mountain-bike-2.jpg',
  ],
  archived: false,
})
const ownerDummy = ref({
  id: 'U101',
  firstname: 'Alice',
  lastname: 'Johnson',
  email: 'alice.johnson@example.com',
  password: 'securepassword123',
  ownedItems: ['I201', 'I202'],
  rentedHistory: ['b301', 'b302'],
})

const loggedInUserDummy = ref({
  id: 'U102',
  firstname: 'Bob',
  lastname: 'Smith',
  email: 'bob.smith@example.com',
  password: 'mypassword456',
  ownedItems: ['I203'],
  rentedHistory: ['b303', 'b304', 'b305'],
})
</script>

<template>
  <section>
    <h2>Item name here</h2>

    <div>
      <!-- title -->
      <!-- img -->
      <div>img here</div>
      <!-- description -->
      <h4>Description</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quas culpa? Sint est
        doloremque adipisci, aperiam quia totam necessitatibus earum itaque id provident ipsa
        temporibus at ab quos cupiditate consequatur?
      </p>
      <!--owner  -->
      <p><strong>owner:</strong> name here</p>
      <!-- availble -->
      <div>some kind of date object here</div>
      <!--rent now button creates a Modal with a calender which the user can pick how long they want to rent it-->
    </div>
    <button>rent now!</button>
  </section>
</template>

<style scoped></style>
