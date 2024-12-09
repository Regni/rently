import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ItemsView from '@/views/ItemsView.vue'
import ItemDetailsView from '@/views/ItemDetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import CreateItemView from '@/views/user/CreateItemView.vue'
import Test from '@/views/Test.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import GeneralRulesView from '@/views/extras/GeneralRulesView.vue'
import PrivacyView from '@/views/extras/PrivacyView.vue'
import TermsAndCompatibilityView from '@/views/extras/TermsAndCompatibilityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsView,
    },
    {
      path: '/items/:id',
      name: 'item-details',
      component: ItemDetailsView,
    },
    {
      path: '/create',
      name: 'create-item',
      component: CreateItemView,
    },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/general-rules',
      name: 'general-rules',
      component: GeneralRulesView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/terms-and-compatibility',
      name: 'terms-and-compatibility',
      component: TermsAndCompatibilityView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
