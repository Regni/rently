<script setup>
const dummyData = {
  item: {
    id: 'I201',
    name: 'Mountain Bike',
    description: 'A high-quality mountain bike suitable for all terrains.',
    price: 450,
    category: ['Sports', 'Outdoor'],
    publishedDate: '2023-06-15',
    owner: 'U101',
    renter: 'U201',
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/300/300',
      'https://picsum.photos/300/200',
      'https://picsum.photos/400/300',
    ],
    archived: false,
  },
  owner: {
    id: 'U101',
    firstname: 'Alice',
    lastname: 'Johnson',
    email: 'alice.johnson@example.com',
    password: 'securepassword123',
    ownedItems: ['I201', 'I202'],
    rentedHistory: ['b301', 'b302'],
  },
  loggedInUser: {
    id: 'U102',
    firstname: 'Bob',
    lastname: 'Smith',
    email: 'bob.smith@example.com',
    password: 'mypassword456',
    ownedItems: ['I203'],
    rentedHistory: ['b303', 'b304', 'b305'],
  },
}

import { ref } from 'vue'
const item = ref(dummyData.item)
const owner = ref(dummyData.owner)

const loggedInUser = ref(dummyData.loggedInUser)
</script>

<template>
  <section>
    <h2>{{ item.name }}</h2>

    <div>
      <!-- title -->
      <!-- img -->
      <div>
        <img
          v-for="(img, index) in item.images"
          :key="index"
          :src="img"
          :alt="'image of a ' + item.name"
        />
      </div>
      <!-- description -->
      <h4>Description</h4>
      <p>
        {{ item.description }}
      </p>
      <!--owner  -->
      <p><strong>owner:</strong> {{ owner.firstname }} {{ owner.lastname }}</p>
      <!-- availble -->
      <div><input type="date" /></div>
      <!--rent now button creates a Modal with a calender which the user can pick how long they want to rent it-->
    </div>
    <h1>{{ item.price }} kr per day!!</h1>
    <button>rent now!</button>

    <div>
      <div>more adverts of the user</div>
    </div>

    <div>
      <div>more adverts of same category</div>
    </div>
  </section>
</template>

<style scoped></style>
