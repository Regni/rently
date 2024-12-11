<script setup></script>

<template>
  <div class="search-section">
    <input class="search-input" id="search" type="text" placeholder="Search" />
    <button class="search-button">Search</button>
  </div>
</template>

<style scoped>
.search-section {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.search-input {
  padding: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
  height: 10px;
  width: 500px;
  font-size: 1.1rem;
  color: var(--color-basic-text);
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: var(--color-btn);
  outline: none;
}

.search-button {
  font-family: var(--font-links);
  padding: 0.5rem 1rem;
  background-color: var(--color-btn);
  height: auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: var(--color-btn-hover);
}
</style>
