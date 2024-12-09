<script setup></script>

<template>
  <section class="categories-container">
    <div class="category-container">
      <div class="category-card"><h3>random saker</h3></div>
      <div class="category-card"><h3>random saker</h3></div>
      <div class="category-card"><h3>random saker</h3></div>
      <div class="category-card"><h3>random saker</h3></div>
    </div>
  </section>
</template>

<style>
.category-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.category-card {
  height: 75px;
  width: 75px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--color-third);
}
.category-card h3 {
  color: var(--color-secondary);
}
</style>
