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
import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import { ref } from 'vue'
const item = ref(dummyData.item)
const owner = ref(dummyData.owner)
const heroImg = ref(dummyData.item.images[0])
const loggedInUser = ref(dummyData.loggedInUser)
const range = ref({
  start: new Date(2024, 11, 6),
  end: new Date(2024, 11, 10),
})
</script>

<template>
  <section>
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

            <!-- description -->

            <h3>Description:</h3>
            <p>
              <!-- {{ item.description }} -->
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam optio, facilis
              dignissimos iusto nobis explicabo iste itaque possimus ex placeat eaque, nemo
              praesentium distinctio quod nihil eligendi sapiente. Sapiente beatae sequi magni
              aperiam modi animi ex, nihil incidunt nesciunt expedita commodi qui tenetur sit eos
              impedit, delectus adipisci? Facilis voluptatem, magni quasi cupiditate tenetur ducimus
              non impedit dolores ipsa vitae! Consequatur, quod placeat magnam molestiae esse
              reiciendis blanditiis a necessitatibus expedita distinctio tenetur, ullam similique
              dolore nihil voluptatem nobis nulla minus recusandae? Aut labore voluptatum libero
              quam numquam reiciendis earum quo culpa necessitatibus illo! Inventore odit nostrum,
              hic vitae blanditiis sit possimus, perferendis quas optio quod autem qui accusantium
              maiores impedit cupiditate veniam suscipit magni. Sunt doloremque veritatis, molestiae
              eum dolorem aliquid saepe a laudantium ex facilis voluptatem ut nostrum officiis
              veniam amet nulla fugiat, illo quod quae accusamus soluta! Iusto facilis quo,
              quibusdam iste minus neque voluptatum aspernatur, saepe eius sed ducimus in nulla
              soluta pariatur. Soluta minus incidunt quaerat fugiat fuga doloremque alias dolorum
              ipsum laudantium animi sunt aspernatur non illum mollitia, labore eius impedit in
              culpa deleniti itaque eos? Ullam perferendis labore eligendi voluptatum accusamus
              ipsa? Optio at libero inventore tempore illo natus saepe. Beatae, quaerat nihil
              minima, mollitia itaque ut quos eum similique amet, quo aspernatur consequuntur
              commodi atque. Tempora voluptatem modi, corrupti omnis tempore iste laboriosam, culpa
              eius optio veritatis, nisi a autem itaque eligendi. Nesciunt distinctio ipsam neque ea
              quam quis, culpa illo inventore corporis quidem corrupti veniam expedita sapiente
              dolor beatae explicabo officia.
            </p>
            <p class="owner-wrapper">
              <strong>Owner:</strong> {{ owner.firstname }} {{ owner.lastname }}
            </p>
          </div>
          <!--owner  -->

          <!-- availble -->
        </div>
        <div class="date-price-container">
          <DatePicker v-model.range="range" />
          <span
            >Start date:<input
              type="date"
              v-model="range.start.toISOString().split('T')[0]" /></span
          ><span
            >End date: <input type="date" v-model="range.end.toISOString().split('T')[0]"
          /></span>

          <h1>{{ item.price }} kr per day!!</h1>
          <button>rent now!</button>
        </div>

        <!--rent now button creates a Modal with a calender which the user can pick how long they want to rent it-->
      </div>
    </div>

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
section {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
}

.main-content-container {
  border: 2px solid salmon;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
}

.big-picture-container {
  width: clamp(150px, 80vw, 1000px);
  height: clamp(100px, 80vh, 700px);
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
.date-price-container {
  display: flex;
  flex-direction: column;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 0.3rem;
  max-width: 30rem;
  width: 50%;
  margin: 0 15rem 0 1rem;
}
.item-user-container {
  display: flex;
  flex-direction: column;
}
.owner-wrapper {
  display: block;
}

.description-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0rem;
}
</style>
