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
      'https://picsum.photos/600/600',
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
const heroImg = ref(dummyData.item.images[0])
const loggedInUser = ref(dummyData.loggedInUser)

const handleHeroImgChange = () => {
  // heroImg.value =
}
</script>

<template>
  <section>
    <div>
      <!-- title -->
      <!-- img -->
      <div class="big-picture-container">
        <img class="hero-picture" :src="heroImg" />
        <div class="secondary-img-container">
          <div
            :class="['secondary-img-wrapper', { 'hero-active': heroImg === img }]"
            v-for="(img, index) in item.images"
            :key="index"
            @click="heroImg = img"
          >
            <img loading="lazy" class="secondary-img" :src="img" />
          </div>
        </div>
      </div>
      <h2>{{ item.name }}</h2>
      <!-- description -->
      <h3>Description:</h3>
      <p>
        {{ item.description }}
      </p>
      <!--owner  -->
      <p><strong>Owner:</strong> {{ owner.firstname }} {{ owner.lastname }}</p>
      <!-- availble -->
      <div class="date-container">
        <span>Start date:<input type="date" /></span><span>End date: <input type="date" /></span>
      </div>
      <!--rent now button creates a Modal with a calender which the user can pick how long they want to rent it-->
    </div>
    <h1>{{ item.price }} kr per day!!</h1>
    <button>rent now!</button>

    <div>
      <h3>More of {{ owner.firstname }} adverts</h3>
      <div class="advert-card-collection-container">
        <div class="advert-card-container" v-for="(item, index) in owner.ownedItems" :key="index">
          <div class="advert-card-img-wrapper">
            <img class="advert-card-img" src="https://picsum.photos/400/300" loading="lazy" />
          </div>
          <h4>test item</h4>
          <p>price: 99 kr</p>
        </div>
      </div>
    </div>

    <div>
      <div>more adverts of same category</div>
    </div>
  </section>
</template>

<style scoped>
.big-picture-container {
  width: clamp(150px, 80vw, 1000px);
  height: clamp(100px, 80vh, 600px);
  border: 2px solid var(--color-secondary);
  border-radius: 10px;
  margin: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-picture {
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
}

.secondary-img-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}

.secondary-img-wrapper {
  margin: 5px;
  height: 4rem;
  width: 4rem;
  position: relative;
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  z-index: 10;
  overflow: hidden;
}

.secondary-img-wrapper::before {
  content: '🔎︎';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  transition: opacity 0.2s ease;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.secondary-img-wrapper:hover::before {
  opacity: 0;
}

.secondary-img-wrapper:hover {
  cursor: pointer;
  scale: 1.1;
}
.secondary-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.hero-active::before {
  content: none;
}

.advert-card-collection-container {
  display: flex;
  gap: 3px;
  width: 100%;
  height: 20rem;
}

.advert-card-container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 2px solid black;
  width: 10rem;
  height: 90%;
}

.advert-card-img-wrapper {
  width: 100%;
  height: 60%;
}
.advert-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.date-container {
  display: flex;
  flex-direction: column;
}
</style>
