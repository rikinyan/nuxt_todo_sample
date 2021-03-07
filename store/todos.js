export const state = () => ({
  todos: [],
  newTodo: {
    title: '',
    deadline: null,
    detail: ''
  }
})

export const actions = {
  async fetchTodos (context) {
    const result = await this.$axios.$get('http://localhost:3000/todos')
    context.commit('todos', result.todos)
  },

  async registerTodo (context) {
    if (context.state.newTodo.title != null &&
      context.state.newTodo.deadline != null &&
      context.state.newTodo.detail != null) {
      await this.$axios.$post('http://localhost:3000/todos', context.state.newTodo)
      await this.dispatch('todos/fetchTodos')
    } else {
      alert('全パラメタ入力しろ。')
    }
  }
}

export const mutations = {
  todos (state, todoArray) {
    state.todos = todoArray
  },

  title (state, newTitle) {
    state.newTodo.title = newTitle
  },

  deadline (state, newDeadline) {
    state.newTodo.deadline = newDeadline
  },

  detail (state, newDetail) {
    state.newTodo.detail = newDetail
  }
}
