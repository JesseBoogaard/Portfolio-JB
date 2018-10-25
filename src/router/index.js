import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import downloads from '@/components/downloads'
import media from '@/components/media'
import business from '@/components/business'
import software from '@/components/software'
import technology from '@/components/technology'
import portfolio from '@/components/portfolio'

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
      path: '/media',
      name: 'media',
      component: media
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/software',
      name: 'software',
      component: software
    },
    {
      path: '/technology',
      name: 'technology',
      component: technology
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    }
  ]
})
