import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetails from '../components/FoodDetails'
import Cart from '../components/Cart'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food-details',
    name: 'food-details',
    component: FoodDetails
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    props:true
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
