<script setup>
import { useItemsStore } from '@/stores/items'
import { DatePicker } from 'v-calendar'
import { useRoute } from 'vue-router'
import 'v-calendar/style.css'
import { computed, ref } from 'vue'
import { useUsersStore } from '@/stores/users'

const route = useRoute()
const itemsStore = useItemsStore()
const usersStore = useUsersStore()

const item = computed(() => itemsStore.items.find((findItem) => findItem.id === route.params.id))
const heroImg = ref(item.value.images[0] || null)
const owner = computed(() => usersStore.users.find((findUser) => findUser.id === item.value.owner))
//This will be used later when rent now is implemented
// const loggedInUser = ref(dummyData.loggedInUser)

//this is for the datepicker to work
const range = ref({
  start: new Date(2024, 11, 6),
  end: new Date(2024, 11, 10),
})
//Calculates the time between start date and end date and includes the first day
const totalTime = computed(() => (range.value.end - range.value.start) / (1000 * 60 * 60 * 24) + 1)
</script>

<template>
  <!-- placeholder for loading component -->
  <div v-if="itemsStore.isLoading"><h1>Loading...</h1></div>
  <section v-else>
    <div class="main-content-container">
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
          <!-- no functionality yet - need a modal to confirm? -->
          <button class="btn">Rent now for {{ item.price * totalTime }} kr!</button>
        </div>
      </div>
    </div>

    <!-- More items of this owner adverts -->
    <!-- More items of this category -->
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
