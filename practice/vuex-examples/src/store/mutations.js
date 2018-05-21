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
    },
    addTodo(state, text) {
        state.vuexTodos.push({ title: text, completed: false })
    },
    toggleTodo(state, todo){
        todo.completed = !todo.completed;
    },
    toggleAll(state, isCompleted){
       state.vuexTodos.map(item => item.completed = isCompleted)
    },
    deleteTodo(state, todo){
        state.vuexTodos.splice(state.vuexTodos.indexOf(todo), 1)
    },
    clearCompleted(state){
      state.vuexTodos = state.vuexTodos.filter(item => !item.completed);
    },
    activeFilter(state, filterIndex){
      state.vuexFilters = state.vuexFilters.map((filter, index) => {
        return {...filter, isActive: (index === filterIndex)}
      })
    }
}

export default mutations
