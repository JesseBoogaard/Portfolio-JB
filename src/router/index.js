import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import downloads from '@/components/downloads'
import timeline from '@/components/timeline'
import media from '@/components/media'
import business from '@/components/business'
import software from '@/components/software'
import technology from '@/components/technology'
import portfolio from '@/components/portfolio'
import photography from '@/components/photography'

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
    },
    {
      path: '/photography',
      name: 'photography',
      component: photography
    }
  ]
})
