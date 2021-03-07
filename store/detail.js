export const state = () => ({
  todo: {}
})

export const actions = {
  async fetchTodo (context, id) {
    const result = await this.$axios.$get(`http://localhost:3000/todos/${id}`)
    context.commit('todo', result)
  },
  async deleteTodo (context, id) {
    await this.$axios.$delete(`http://localhost:3000/todos/${id}`)
    this.$router.push({
      path: '/'
    })
  }
}

export const mutations = {
  todo (state, todo) {
    state.todo = todo
  }
}
