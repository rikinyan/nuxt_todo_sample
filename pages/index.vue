<template>
  <div>
    <div>
      <h1>rikiishiのtodo</h1>
    </div>
    <form>
      <div>
        <label for="todo-title">title</label>
        <input id="todo-title" type="text" v-model="title">
        <label for="todo-deadline">deadline</label>
        <input id="todo-deadline" type="date" v-model="deadline">
      </div>
      <div>
        <label for="todo-detail">detail</label>
        <textarea
          id="todo-detail"
          placeholder="detail……"
          name=""
          cols="50"
          rows="5"
          v-model="detail" />
      </div>
      <button @click="register($event)">
        register
      </button>
    </form>
    <div class="list-group">
      <ToDoListItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
      />
    </div>
  </div>
</template>

<script>
import dateformat from 'dateformat'
import { mapActions } from 'vuex'

export default {

  mounted () {
    this.fetchTodos()
  },

  computed: {
    todos () {
      return this.$store.state.todos.todos
    },
    title: {
      get () {
        return this.$store.state.todos.newTodo.title
      },
      set (newValue) {
        this.$store.commit('todos/title', newValue)
      }
    },
    deadline: {
      get () {
        return dateformat(this.$store.state.todos.newTodo.deadline, 'yyyy-mm-dd')
      },
      set (newValue) {
        const date = new Date(newValue)
        this.$store.commit('todos/deadline', date)
      }
    },
    detail: {
      get () {
        return this.$store.state.todos.newTodo.detail
      },
      set (newValue) {
        this.$store.commit('todos/detail', newValue)
      }
    }
  },

  methods: {
    register (event) {
      if (event) {
        event.preventDefault()
      }
      this.registerTodo()
    },
    ...mapActions({
      fetchTodos: 'todos/fetchTodos',
      registerTodo: 'todos/registerTodo'
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
