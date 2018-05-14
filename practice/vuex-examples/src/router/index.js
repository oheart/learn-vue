import Vue from 'vue'
import Router from 'vue-router'
import Examples from '@/components/Examples'
import Counter from '@/page/counter'
import CounterHot from '@/page/counter-hot'
import ShoppingCart from '@/page/shopping-cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Examples',
      component: Examples
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      componnet: ShoppingCart
    }
  ]
})
