import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import boss from '../views/boss.vue'
import checkOut from '../views/checkOut.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/boss',
    name: 'boss',
    component: boss
  },

  {
    path: '/checkOut',
    name: 'checkOut',
    component: checkOut
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
