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
import { useItemsStore } from '@/stores/items'
import { DatePicker } from 'v-calendar'
import { useRoute } from 'vue-router'
import 'v-calendar/style.css'
import { computed, ref, watch } from 'vue'
const route = useRoute()
const itemID = route.params.id
const itemsStore = useItemsStore()
const item = computed(() => itemsStore.items.find((findItem) => findItem.id === itemID))

const owner = ref(dummyData.owner)
const heroImg = ref(dummyData.item.images[0])
const loggedInUser = ref(dummyData.loggedInUser)
const range = ref({
  start: new Date(2024, 11, 6),
  end: new Date(2024, 11, 10),
})
//Calculates the time between start date and end date and includes the first day
const totalTime = computed(() => (range.value.end - range.value.start) / (1000 * 60 * 60 * 24) + 1)

const handleDateChange = (e) => {
  const steve = e.target.value.split('-')
  range.value = {
    ...range.value,
    start: new Date(Number(steve[0]), Number(steve[1] - 1), Number(steve[2])),
  }
  console.log(range.value.start)
}
watch(range, () => {
  console.log(range)
})
</script>

<template>
  <div v-if="itemsStore.isLoading"><h1>Loading...</h1></div>
  <section v-else>
    <div class="main-content-container">
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
      <div class="info-container">
        <div class="item-user-container">
          <div class="description-wrapper">
            <h2>{{ item.name }}</h2>
            <p class="owner-wrapper">
              <strong>Owner:</strong> {{ owner.firstname }} {{ owner.lastname }}
            </p>
            <!-- description -->
            <h3>Description:</h3>
            <p class="description-text-wrapper">
              {{ item.description }}
            </p>
          </div>

          <!--owner  -->

          <!-- availble -->
        </div>

        <div class="date-price-container">
          <DatePicker v-model.range="range" />

          <!-- THIS IS FOR LATER IMPLEMENTATION SO YOU CAN ADD A DATE AND CALENDER WILL ADJUST -->
          <!-- <span
            >Start date:<input
              type="date"
              :value="range.start.toISOString().split('T')[0]"
              @input="handleDateChange" /></span
          ><span
            >End date:
            <input
              type="date"
              :value="range.end.toISOString().split('T')[0]"
              @input="range.value.end = new Date($event.target.value)"
          /></span> -->

          <button class="btn">Rent now for {{ item.price * totalTime }} kr!</button>
        </div>
      </div>
    </div>

    <!-- <div>
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
    </div> -->
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
}
h2 {
  font-size: 2.5rem;
  font-family: var(--font-links);
  color: var(--color-h2);
}
h3 {
  color: var(--color-h3);
  font-family: var(--font-basic);
}
p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
}
.main-content-container {
  display: flex;
  justify-content: center;
  width: 95%;
}

.big-picture-container {
  width: clamp(150px, 80vw, 1000px);
  height: clamp(100px, 80vh, 700px);
  border: 2px solid var(--color-secondary);
  border-radius: 10px;
  margin: 1rem 1rem;
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
.date-price-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 0.3rem;
  max-width: 30rem;
  max-height: 700px;
  width: 60%;
  margin: 0 4rem 0 0.1rem;
}
.item-user-container {
  margin: 0.8rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.owner-wrapper {
  display: block;
  margin-bottom: 0.6rem;
}

.description-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
}
.description-text-wrapper {
  margin-top: 0.6rem;
  max-height: 125px;
  overflow: auto;
}

@media screen and (max-width: 750px) {
  .main-content-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem 1rem 1rem;
  }
  .big-picture-container {
    width: 100%;
    height: clamp(100px, 80vh, 700px);
  }

  .info-container {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: none;
  }
  .description-wrapper > h2,
  .owner-wrapper {
    text-align: center;
  }
  .btn {
    height: 4.5rem;
  }
  .description-text-wrapper {
    margin-top: 0.6rem;
    max-height: none;
  }
}
</style>
