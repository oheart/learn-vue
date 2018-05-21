<template>
    <li class="bd-list-item clear">
            <img src='../../assets/img/check.svg' class="check-img"
                v-on:click="toggleCheckImg(todo, $event)"
                v-if="!todo.completed"
                />
            <img src='../../assets/img/active-check.svg' class="check-img"
                v-if="todo.completed"
                v-on:click="toggleCheckImg(todo, $event)"
                />
            <span v-bind:class="{'completed-txt': todo.completed}">{{todo.title}}</span>
            <span class="close-icon flr cursors"
              @click="deleteTodo(todo)"
             ></span>
     </li>
</template>

<script>
import defaultCheckImg from '../../assets/img/check.svg'
import ActiveCheckImg from '../../assets/img/active-check.svg'
import {mapState, mapActions} from 'vuex'

export default {
  name: "Todo",
  props: ['todo'],
  methods:{
      toggleCheckImg(todo, event){
          var src = event.srcElement.src;
          this.toggleTodo(todo);
          todo.completed
            ? (event.srcElement.src = ActiveCheckImg)
            : (event.srcElement.src = defaultCheckImg)
      },
      ...mapActions([
        'toggleTodo',
        'deleteTodo'
      ])
  },
  
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
  display: none;
}
.close-icon:after {
  content: "\D7";
}
.bd-list-item:hover .close-icon{
  display: block;
}
.completed-txt{
    color: #d9d9d9;
    text-decoration: line-through;
}
</style>
