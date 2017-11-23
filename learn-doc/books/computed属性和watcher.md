## computed缓存 vs method方法  
computed属性会基于它所依赖的数据进行缓存。每个computed属性，只有在它所依赖的数据发生变化时，才会重新取值；
多次访问computed属性，将会立即返回之前计算过的结果，而不必每次都重新执行函数。相比之下，每当触发重新渲染时，
method调用方式将总是再次执行函数。
## computed属性 vs watch属性
vue还提供了一种更加通用的方式，来观察和响应vue实例上的数据变化： watch属性。watch 属性是很吸引人的使用方式，然而，当你有一些数据需要随着另外一些数据变化时，过度滥用 watch 属性会造成一些问题。因此，更推荐的方式是，使用 computed 属性，而不是命令式(imperative)的 watch 回调函数。
## computed属性中设置getter、setter
```js
// ...
computed: {
  fullName: {
    // getter 函数
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter 函数
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```
## watcher
  虽然在大多数情况下，更适合使用 computed 属性，然而有些时候，还是需要一个自定义 watcher。这就是为什么 Vue 要通过 watch 选项，来提供一个更加通用的响应数据变化的方式。当你需要在数据变化响应时，执行异步操作，或高性能消耗的操作，自定义 watcher 的方式就会很有帮助。