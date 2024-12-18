<script setup></script>

<template>
  <div>
    <div class="buttons">
      <!-- Cards Section -->
      <div class="cards-container">
        <!-- Card 1 -->
        <div class="card">
          <h3>Search for Items</h3>
          <p>Find what you're looking for quickly and easily.</p>
          <router-link :to="{ name: 'items' }">
            <button class="btn btn-search">Search for Items</button>
          </router-link>
        </div>
        <!-- Card 2 -->
        <div class="card">
          <h3>List Your Items</h3>
          <p>Share your items with others and connect.</p>
          <router-link :to="{ name: 'create-item' }"
            ><button class="btn btn-list">List Your Items</button></router-link
          >
        </div>
      </div>
    </div>
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
  align-items: center;
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
  margin-bottom: 2rem;
  color: var(--color-basic-text);
  font-family: var(--font-basic);
  font-size: 0.9em;
  text-align: center;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 200px;
    height: auto;
  }

  .card h3,
  p {
    display: none;
  }
}
</style>
