<template>
  <div id="app" class="container">
    <AddTodos />
    <FilterTodos />
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import AddTodos from './components/AddTodos.vue'
import FilterTodos from './components/FilterTodos.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    AddTodos,
    FilterTodos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
