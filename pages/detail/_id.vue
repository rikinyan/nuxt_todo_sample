<template>
  <div>
    <h1>todo detail</h1>
    <h2>title: {{todo.title}}</h2>
    <h2>deadline: {{deadlineString}}</h2>
    <h3>detail</h3>
    <h6>
      {{todo.detail}}
    </h6>
    <button @click="clickEnd">
      end task
    </button>
  </div>
</template>

<script>
import dateformat from 'dateformat'
import { mapActions } from 'vuex'

export default {
  async asyncData ({ params, store }) {
    await store.dispatch('detail/fetchTodo', params.id)
  },

  computed: {
    todo () {
      return this.$store.state.detail.todo
    },
    deadlineString () {
      return dateformat(this.todo.deadline, 'yyyy/mm/dd')
    }
  },

  methods: {
    ...mapActions({
      deleteTodo: 'detail/deleteTodo'
    }),

    clickEnd (event) {
      if (event) {
        event.preventDefault()
      }
      console.log(this.todo.id)
      this.deleteTodo(this.todo.id)
    }
  }
}
</script>
