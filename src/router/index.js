import Vue from 'vue'
import Router from 'vue-router'
import downloads from '@/components/downloads'
import home from '@/components/home'
import timeline from '@/components/timeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: downloads
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: timeline
    }
  ]
})
