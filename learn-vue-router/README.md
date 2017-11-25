## 动态路由匹配
1. 响应路由参数的变化
- 简单地watch（检测变化）$route对象
```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```
- 使用2.2中引入的beforeRouteUpdate守卫
```js
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```
2. 匹配优先级
有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

## demo link
https://github.com/chrisvfritz/vue-2.0-simple-routing-example  


路由先这样，晚点回头再看。。


