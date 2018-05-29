const limit = 5;

// getters are functions
const getters = {
    count: state => state.count,
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    recentHistory: state => {
        const end = state.history.length;
        const begin = end - limit < 0 ? 0 : end - limit;
        return state.history
            .slice(begin, end)
            .join(',');
    },
    allProducts: state => state.all,
    checkoutStatus: state => state.checkoutStatus,
    cartProducts: (state, getters) => {
        return state.added.map(({ id, quantity }) => {
            const product = state.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    },
    threads: state => state.threads,
    currentThread: state => {
      return state.currentThreadID
          ? state.threads[state.currentThreadID]
          : {}
    },
    currentMessages: state => {
      const thread = getters.currentThread(state)
      return thread.messages
          ? thread.messages.map(id => state.messages[id])
          : []
    },
    unreadCount:({threads}) => {
      return Object.keys(threads).reduce((count, id) => {
        return threads[id].lastMessage.isRead ? count : count + 1;
      },0)
    },
    sortedMessages:(state, getters) => {
      const messages = getters.currentMessages
      return messages.slice().sort((a,b) => a.timestamp - b.timestamp)
    }

}

export default getters
