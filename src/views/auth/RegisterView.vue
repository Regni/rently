<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useUsersStore } from '@/stores/users'

const router = useRouter()
// const usersStore = useUsersStore()

// REMOVE WHEN USER STORE IS WORKING:
const isLoading = ref(false)
// const errors = ['error1', 'error2', 'error3']

// ----- REACTIVE DATA -----
const newUser = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const repeatedPassword = ref('')
const showPassword = ref(false)

// ----- COMPUTED PROPERTIES -----
// const errors = computed(() => {
//   usersStore.errors
// })
// const isLoading = computed(() => {usersStore.isLoading})
// Check if passwords match
const passwordsMatch = computed(() => newUser.value.password === repeatedPassword.value)

// Form validation
const formValid = computed(() => {
  return (
    newUser.value.firstName.trim() !== '' &&
    newUser.value.lastName.trim() !== '' &&
    newUser.value.email.includes('@') &&
    newUser.value.password.length >= 8 &&
    passwordsMatch.value
  )
})

// ----- METHODS -----
const handleRegister = async () => {
  //validate form and passwords before registering
  if (!formValid.value) {
    alert('Please fill in all fields')
    return
  }

  if (newUser.value.password !== repeatedPassword.value) {
    alert('Passwords do not match')
    return
  }
  // await usersStore.registerUser({newUser.value})
  alert('Account created successfully!')

  // clear form after successful registration:
  newUser.value = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  repeatedPassword.value = ''

  // redirect to dashboard page:
  router.push({ name: 'login' })
}
</script>

<template>
  <section>
    <div class="form-container">
      <div class="form-header">
        <h1>Create Account</h1>
        <p>Get access to all of Rently's features and services with a free account.</p>
        <p>All fields are required.</p>
      </div>

      <div v-if="errors" class="error-container">
        <p v-for="error in errors" :key="error" class="error-message">{{ error }}</p>
      </div>
      <form class="register-form" @submit.prevent="handleRegister">
        <div class="form-group">
          <input
            class="input"
            type="text"
            required
            minlength="2"
            v-model="newUser.firstName"
            placeholder=" "
          />
          <label for="firstName" class="label">First Name</label>
        </div>
        <div class="form-group">
          <input
            class="input"
            type="text"
            required
            minlength="2"
            v-model="newUser.lastName"
            placeholder=" "
          />
          <label for="lastName" class="label">Last Name</label>
        </div>
        <div class="form-group">
          <input class="input" type="email" required v-model="newUser.email" placeholder=" " />
          <label for="email" class="label">Email</label>
        </div>
        <div class="form-group">
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            required
            minlength="8"
            v-model="newUser.password"
            placeholder=" "
          />
          <label for="password" class="label">Password</label>
        </div>
        <div class="form-group">
          <input
            class="input"
            :type="showPassword ? 'text' : 'password'"
            required
            minlength="8"
            v-model="repeatedPassword"
            placeholder=" "
          />
          <label for="repeatedPassword" class="label">Repeat Password</label>
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

        <button class="btn" type="submit" :disabled="isLoading">Register</button>
      </form>
      <p class="login-redirect">
        Already have an account? <router-link :to="{ name: 'login' }">Login</router-link>
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

.register-form {
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

.login-redirect {
  font-family: var(--font-basic);
  font-size: 0.9rem;
  color: var(--color-basic-text);
}

.login-redirect a {
  font-family: var(--font-links);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.login-redirect a:hover {
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
