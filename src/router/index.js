import Vue from 'vue'
import Router from 'vue-router'
import homeNL from '@/components/homeNL'
import homeEN from '@/components/homeEN'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeNL',
      component: homeNL
    },
    {
      path: '/en',
      name: 'homeEN',
      component: homeEN
    }
  ]
})
