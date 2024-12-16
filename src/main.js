import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  className: 'success-toast',
  position: 'top-center',
  timeout: 2000,
  closeOnClick: true,
  pauseOnHover: true,
}

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Toast, options)
app.use(router)

app.mount('#app')
