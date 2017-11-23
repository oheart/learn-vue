所有Vue组件，都是vue实例，并且组件都接受相同的选项对象（除了一些根实例特有的选项）。
## data 和 methods
 在创建Vue实例时，会将所有在data对象中找到的属性，都添加到vue的响应式系统中。每当这些属性的只发生变化时，视图
 都会“及时响应”，并更新相应的新值。值得注意的是，如果实例已经创建，那么只有那些data中原本就已经存在的属性，才是
 响应式的。
## 实例生命周期钩子函数
 每个 Vue 实例在被创建之前，都要经过以下一系列的初始化过程：
 1. 数据观察（set up data observation）
 2. 编译模板（compile the template）
 3. 在DOM挂载实例（mount the instance to the DOM）
 4. 在数据变化时更新DOM（update the DOM when data change） 
在这个过程中，Vue 实例还会调用执行一些生命周期钩子函数，这样用户能够在特定阶段添加自己的代码。  
例如，在实例创建后将调用 created 钩子函数：  
 ```js
 new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
 ```
 也有一些其它的钩子，会在实例生命周期的不同阶段调用，如 mounted、updated 和 destroyed。所有的钩子函数在调用时，其 this 上下文都会指向调用它的 Vue 实例。   
 注：     
 不要在选项属性或者回调函数中使用箭头函数（例如，created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())）。因为箭头函数会绑定父级上下文，所以 this 不会按照预期指向 Vue 实例，然后 this.a 或 this.myMethod 将是 undefined。 

 ## 生命周期示意图
 - new Vue()
 - beforeCreate
 - created
 - beforeMount
 - mounted
 - beforeUpdate
 - updated
 - beforeDestory
 - destoryed
 ![lifecycle](img/lifecycle.png)
