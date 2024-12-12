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
