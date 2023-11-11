import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import SettingView from '../views/SettingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: WeatherView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingView
    }
  ]
})

export default router
