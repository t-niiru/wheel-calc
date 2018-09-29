import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Index from '@/components/Index'
import OffSet from '@/components/OffSet'
import TireSize from '@/components/TireSize'

Vue.use(Router)

Vue.use(VueAnalytics, {
  id: 'UA-60693399-3',
  Router
})

export default new Router({
  mode: 'history',
  base: process.env.ROOT_BASE,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/OffSet',
      name: 'OffSet',
      component: OffSet
    },
    {
      path: '/TireSize',
      name: 'TireSize',
      component: TireSize
    }
  ]
})
