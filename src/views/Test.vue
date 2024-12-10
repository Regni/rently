<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <div id="app">
    <!-- Header Section -->
    <header class="header">
      <nav class="navbar">
        <h1>Rently</h1>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Section -->
    <main class="content">
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
      <div class="other-container">
        <div class="other-card"><h3>random saker</h3></div>
        <div class="other-card"><h3>random saker</h3></div>
        <div class="other-card"><h3>random saker</h3></div>
        <div class="other-card"><h3>random saker</h3></div>
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="footer">
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Header Styles */
h1 {
  font-family: 'Montserrat Underline', sans-serif;
  font-weight: 500;
  font-size: 3rem;
}

.header {
  background-color: var(--color-primary);
  color: white;
  font-size: 1.5rem;
  padding: 2rem;
  height: 7em;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  font-family: var(--font-links);
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--color-secondary);
  text-decoration: none;
}

/* Content Styles */
.content {
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 75vh;
}

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
  align-items: space-between;
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

.other-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.other-card {
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--color-third);
}
.other-card h3 {
  color: var(--color-secondary);
}

/* Footer Styles */
.footer {
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  margin-top: auto;
}
</style>
