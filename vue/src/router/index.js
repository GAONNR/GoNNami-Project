import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/Cards'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Cards
    },
    {
      path: '/test',
      component: Test
    },
  ]
})
