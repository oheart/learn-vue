import Vue from 'vue'
import Router from 'vue-router'
import Examples from '@/components/Examples'
import Counter from '@/page/counter'
import CounterHot from '@/page/counter-hot'
import ShoppingCart from '@/page/shopping-cart'
import TodoMVC from '@/page/todomvc'
import VuexTodoMVC from '@/page/vuex-todomvc'
import Chat from '@/page/Chat'

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
      component: ShoppingCart
    },
    {
      path: '/TodoMVC',
      name: 'TodoMVC',
      component: TodoMVC
    },
    {
      path: '/VuexTodoMVC',
      name: 'VuexTodoMVC',
      component: VuexTodoMVC
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
