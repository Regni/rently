<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// import { useUsersStore } from '@/stores/users'
// const usersStore = useUsersStore()

const router = useRouter()

// REMOVE WHEN USER STORE IS WORKING:
const isLoading = ref(false)
// const errors = ['error1', 'error2', 'error3']

// ----- REACTIVE DATA -----
const userEmail = ref('')
const userPassword = ref('')
const showPassword = ref(false)

// ----- COMPUTED PROPERTIES -----
// const errors = computed(() => {
//   usersStore.errors
// })
// const isLoading = computed(() => {usersStore.isLoading})

const formValid = computed(() => userEmail.value && userPassword.value)

// ----- METHODS -----
const handleLogin = async () => {
  if (!formValid.value) {
    alert('Please fill in all fields')
    return
  }
  //await usersStore.loginUser(userEmail.value, userPassword.value)
  console.log(userEmail.value, userPassword.value)
  alert('Login successful!')

  //CHANGE THIS TO REDIRECT TO USER PROFILE PAGE
  //What will we call the userProfile page?
  router.push({ name: 'test' })
}
</script>

<template>
  <section>
    <div class="form-container">
      <div class="form-header">
        <h1>Login</h1>
        <p>Login to access all of Rently's features and services.</p>
      </div>

      <div v-if="errors" class="error-container">
        <p v-for="error in errors" :key="error" class="error-message">{{ error }}</p>
      </div>
      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <input class="input" type="email" required v-model="userEmail" placeholder=" " />
          <label for="email" class="label">Email</label>
        </div>
        <div class="form-group">
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            required
            v-model="userPassword"
            placeholder=" "
          />
          <label for="password" class="label">Password</label>
          <p class="show-password-text">
            Show Password
            <input
              type="checkbox"
              id="chk"
              v-model="showPassword"
              @click="showPassword = !showPassword"
            />
          </p>
        </div>

        <button class="btn" type="submit" :disabled="isLoading">Log in</button>
      </form>
      <p class="register-redirect">
        Don't have an account? <router-link :to="{ name: 'register' }">Register</router-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

h1 {
  font-family: var(--font-headings);
  color: var(--color-h1);
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

p {
  font-family: var(--font-basic);
  color: var(--color-basic-text);
  line-height: 1.5;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
  background-color: var(--color-third);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  font-size: 1.2rem;
  font-family: var(--font-basic);
  position: relative;
  color: var(--color-basic-text);
}

.input {
  font-family: var(--font-basic);
  font-size: 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 4px;
  background-color: #fff;
  color: var(--color-basic-text);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  padding: 1rem;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #a1a0a0;
  pointer-events: none;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:is(:focus, :not(:placeholder-shown)) ~ label {
  transform: translateY(-120%) scale(0.7);
  background-color: #fff;
  padding-inline: 0.3rem;
  color: var(--primary);
}

.input:focus {
  outline: none;
  border: 1px solid var(--color-primary);
  box-shadow: 0 0 4px var(--color-primary);
}

.show-password-text {
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.btn:disabled {
  background-color: #c1bfbf;
  color: rgb(72, 72, 72);
  cursor: arrow;
}

.register-redirect {
  font-family: var(--font-basic);
  font-size: 0.9rem;
  color: var(--color-basic-text);
}

.register-redirect a {
  font-family: var(--font-links);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.register-redirect a:hover {
  text-decoration: underline;
}

/* Error Styles */
.error-container {
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #ffdddd;
  border: 1px solid #ff0000;
  border-radius: 4px;
}

.error-message {
  color: #ff0000;
  margin: 0.5rem 0;
  font-family: var(--font-basic);
}
</style>
