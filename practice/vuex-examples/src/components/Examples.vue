<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <ul>
      <li>
        <router-link to="Counter">
            Counter
        </router-link>
      </li>
      <li>
        <router-link to="CounterHot">
            Counter with Hot Reload
        </router-link>
      </li>
      <li>
        <router-link to="ShoppingCart">
          Shopping Cart
        </router-link>
      </li>
      <li>
        <router-link to="TodoMVC">
          todomvc
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Examples',
  data () {
    return {
      msg: 'Vuex Examples'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
