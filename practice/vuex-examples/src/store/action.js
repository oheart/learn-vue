import shop from '../api/shop'
import chat from '../api/chat'

// actions are functions that cause side effects and can involve asynchronous operations.
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve();
            }, 1000)
        })
    },
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products)
        })
    },
    addProductToCart({ state, commit }, product) {
        commit('setCheckoutStatus', null)
        if (product.inventory > 0) {
            const cartItem = state.added.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            // remove 1 item from stock
            commit('decrementProductInventory', { id: product.id })
        }
    },
    checkout({ commit, state }, products) {
        const savedCartItems = [...state.added]
        commit('setCheckoutStatus', null)
        // empty cart
        commit('setCartItems', { items: [] })

        shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed')
                // rollback to the cart saved before sending the request
                commit('setCartItems', { items: savedCartItems })
            }
        )
    },
    addTodo: ({commit}, text) => commit('addTodo', text),
    toggleTodo: ({commit}, todo) => commit('toggleTodo', todo),
    toggleAll: ({commit}, isCompleted) => commit('toggleAll', isCompleted),
    deleteTodo: ({commit}, todo) => commit('deleteTodo', todo),
    clearCompleted: ({commit}) => commit('clearCompleted'),
    activeFilter: ({commit}, filterIndex) => commit('activeFilter', filterIndex),
    getAllMessages: ({commit}) => {
      chat.getAllMessages(messages => {
        commit('receiveAll', messages)
      })
    },
    sendMessage: ({commit}, payload) => {
      chat.createMessage(payload, message => {
        commit('receiveMessage', message)
      })
    },
    switchThread: ({commit}, payload) => {
      commit('switchThread', payload)
    }
}

export default actions
