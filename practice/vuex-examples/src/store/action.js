
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
    getAllProducts({ commit }){
        shop.getAllProducts(products => {
            commit('setProducts', products)
        })
    }
}

export default actions