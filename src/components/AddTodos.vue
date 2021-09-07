<template>
  <div>
    <h3>Add Todo</h3>
    <form class="form" @submit="onClickSubmit">
      <input
        class="content"
        type="text"
        v-model="title"
        placeholder="please input your todoList..."
      />
      <input class="submit" type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "AddTodos",
  data() {
      return {
          title: ""
      }
  },
  methods: {
      ...mapActions(['addTodo']),
      onClickSubmit(e) {
          e.preventDefault();
          this.addTodo(this.title)
      }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  margin-bottom: 10px;
}
.content {
  flex: 8;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
.submit {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
