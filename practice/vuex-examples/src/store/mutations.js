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
    }
}

export default mutations