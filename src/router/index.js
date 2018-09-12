import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import OffSet from '@/components/OffSet'
import TireSize from '@/components/TireSize'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
