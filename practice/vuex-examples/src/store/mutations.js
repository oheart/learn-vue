// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument,followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment(state) {
        state.count++;
        state.history.push('increment')
    },
    decrement(state) {
        state.count--
        state.history.push('decrement')
    },
    setProducts(state, products) {
        state.all = products
    },
    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    },
    pushProductToCart(state, { id }) {
        state.added.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.added.find(item => item.id === id)
        cartItem.quantity++
    },
    setCartItems(state, { items }) {
        state.added = items
    },
    setCheckoutStatus(state, status) {
        state.checkoutStatus = status;
    }
}

export default mutations
