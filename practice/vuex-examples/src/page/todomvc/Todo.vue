<template>
    <li class="bd-list-item clear">
            <img src='../../assets/img/check.svg' class="check-img"
                @click="toggleCheckImg({todo: todo}, $event)"/>
            <span>{{todo.title}}</span>
            <span class="close-icon flr"></span>
     </li>
</template>

<script>
import defaultCheckImg from '../../assets/img/check.svg'
import ActiveCheckImg from '../../assets/img/active-check.svg'

export default {
  name: "Todo",
  props: ['todo'],
  methods:{
      toggleCheckImg(todo, event){
          var src = event.srcElement.src;
          todo.completed
            ? (event.srcElement.src = defaultCheckImg)
            : (event.srcElement.src = ActiveCheckImg)
          this.$emit('toggleTodo', todo)
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
