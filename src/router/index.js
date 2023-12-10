import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import socialMedia from '../views/socialMedia.vue'

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/socialmedia',
    component: socialMedia
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
