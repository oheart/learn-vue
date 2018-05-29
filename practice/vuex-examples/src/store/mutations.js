// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument,followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
import Vue from 'vue'

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
    },
    receiveAll(state, messages){
      let latestMessage
      messages.forEach(message => {
        // create new thread if the thread doesn't exist
        if(!state.threads[message.threadID]){
          createThread(state, message.threadID, message.threadName)
        }
        // mark the latest message
        if(!latestMessage || message.timestamp > latestMessage.timestamp){
          latestMessage = message;
        }
        // add message
        addMessage(state, message)
      })
      // set initial thread to the one with the latest message
      setCurrentThread(state, latestMessage.threadID)
    },
    receiveMessage(state, message){
      addMessage(state, message)
    },
    switchThread(state, id){
      setCurrentThread(state, id)
    }
}

function createThread(state, id , name){
  Vue.set(state.threads, id, {
    id,
    name,
    messages:[],
    lastMessage: null
  })
}

function addMessage(state, message){
  // add a  `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if(!thread.messages.some(id => id === message.id)){
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  // add it to the messsages map
  Vue.set(state.messages, message.id, message)
}

function setCurrentThread(state, id){
  state.currentThreadID = id
  if(!state.threads[id]){
    debugger
  }
  // mark threads as read
  state.threads[id].lastMessage.isRead = true
}

export default mutations
