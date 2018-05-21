<template>
    <section class="todoapp">
        <!-- header -->
        <header class="header">
            <h1 class="hd-tit">todos</h1>
        </header>
        <!-- main section -->
        <section class="main">
            <div class="hd-add-todo">
                  <input id="toggle-all" type="checkbox"
                    :checked="allChecked"
                    @change="handleToggleAll(!allChecked)"
                    />
                  <label for="toggle-all" class="toggle-all-icon" v-bind:class="{'active-toggle-all-icon': allChecked}"
                  v-if="vuexTodos.length > 0"></label>
                  <input class="add-todo-input"
                    autofocus
                    autocomplete="off"
                    placeholder="What needs to be done?"
                    @keyup.enter="handleAddTodo"
                />
            </div>
            <ul class="bd-todolist">
                <Todo
                    v-for="(todo, index) in todosToDisplay"
                    :key="index"
                    :todo="todo"
                    />
            </ul>

        </section>
        <!-- footer -->
        <footer class="footer clear">
            <span class="fll">{{remaining}} items left</span>
            <span>
                <span class="cursor filter-item-txt"
                    v-bind:class="{'active-filter-txt': item.isActive}"
                    v-for="(item, index) in vuexFilters"
                    v-bind:key="item.name"
                    @click="toggleActiveFilter(index)"
                  >
                  {{item.name}}
                </span>
            </span>
            <span  class="cursor flr"
              v-if="vuexTodos.length > remaining"
              @click="clearCompleted"
              >Clear completed</span>
        </footer>
    </section>
</template>

<script>
import Todo from "./Todo.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "VuexTodoMVC",
  components: { Todo },
  data() {
    return {};
  },
  computed: mapState({
    vuexTodos: state => state.vuexTodos,
    vuexFilters: state => state.vuexFilters,
    allChecked: state => state.vuexTodos.every(todo => todo.completed),
    remaining: state => state.vuexTodos.filter(todo => !todo.completed).length,
    todosToDisplay: state => {
      const vuexTodos = state.vuexTodos;
      const vuexFilters = state.vuexFilters;
      const activeFilter = vuexFilters.filter(
        filterItem => filterItem.isActive
      )[0];
      if (activeFilter.name === vuexFilters[0].name) {
        return vuexTodos;
      } else if (activeFilter.name === vuexFilters[1].name) {
        return vuexTodos.filter(todo => !todo.completed);
      } else if (activeFilter.name === vuexFilters[2].name) {
        return vuexTodos.filter(todo => todo.completed);
      }
    }
  }),
  methods: {
    ...mapActions(["addTodo", "toggleAll", "clearCompleted", "activeFilter"]),
    handleAddTodo(e) {
      var text = e.target.value;
      if (text.trim()) {
        this.addTodo(text);
      }
      e.target.value = "";
    },
    handleToggleAll(isCompleted) {
      this.toggleAll(isCompleted);
    },
    toggleActiveFilter(filterIndex) {
      this.activeFilter(filterIndex);
    }
  }
};
</script>

<style>
.todoapp {
  width: 600px;
  margin: 130px auto 40px;
  background: #fff;
  box-shadow: 1px 1px 3px #d1d1d1;
}
.hd-tit {
  font-size: 100px;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}
.toggle-all-icon:after {
  content: "\276F";
  font-size: 22px;
  color: #e6e6e6;
}
.hd-add-todo {
  padding: 16px 16px 16px 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  text-align: left;
  position: relative;
  overflow: hidden;
}
.toggle-all-icon {
  position: absolute;
  left: 31px;
  top: 12px;
}
.add-todo-input {
  width: 100%;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  font-size: 24px;
  margin-left: 46px;
}

.bd-todolist {
  text-align: left;
}

.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
#toggle-all {
  display: none;
}
.active-toggle-all-icon:after {
  color: #727372;
}
.filter-item-txt {
  margin-right: 8px;
}
.active-filter-txt {
  border: 1px solid rgba(175, 47, 47, 0.2);
  padding: 3px 7px;
  border-radius: 3px;
}
</style>
