import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'


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
    allChecked: false
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
