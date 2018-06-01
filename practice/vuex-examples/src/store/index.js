import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const state = {
    count: 0,
    history: [],
    all: [],
    added: [],
    checkoutStatus: null,
    vuexTodos: [],
    vuexFilters: [
        {
          name: 'All',
          isActive: true
        },
        {
          name: 'Active',
          isActive: false
        },
        {
          name: 'Completed',
          isActive: false
        }
    ],
    allChecked: false,
    currentThreadID: null,
    threads:{
      // id:{
      //   id,
      //   name,
      //   messages: [...ids],
      //   lastMessage
      // }
    },
    messages:{
      /*
        id:{
          id,
          threadId,
          threadName,
          authorName,
          text,
          timestamp,
          isRead
        }
      */
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []
})
