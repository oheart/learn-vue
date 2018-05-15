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
    cartProducts: (state, getters, rootState) => {
        return state.added.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    }
}

export default getters
