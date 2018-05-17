<template>
    <li class="bd-list-item clear">
            <img src="../../assets/img/check.svg" class="check-img"
                @click="toggleTodo({todo: todo})"/>
            <span>{{todo.title}}</span>
            <span class="close-icon flr"></span>
     </li>
</template>

<script>
export default {
  name: "Todo",
  props: ['todo'],
  methods:{
      toggleTodo(event,todo){
          console.log('e', event)
          todo.completed = !todo.completed;
      }
  }
};
</script>


<style>
.bd-list-item {
  padding: 15px 15px 15px 15px;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
.check-img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.close-icon {
  color: #af5b5e;
  transition: color 0.2s ease-out;
  font-size: 30px;
}
.close-icon:after {
  content: "\D7";
}
</style>