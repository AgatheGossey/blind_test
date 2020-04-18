import Vue from 'vue'
import VueRouter from 'vue-router'
import Loader from '../components/Loader.vue'
import Login from '../components/Login.vue'
import Game from '../components/Game.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/loader',
      name: 'Loader',
      component: Loader
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
