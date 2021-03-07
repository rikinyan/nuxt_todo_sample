<template>
  <NuxtLink :to="destinationUrl">
    <div class="list-group-item">
      <h2>{{ todo.title }}</h2>
      deadline: {{ deadlineString }}
    </div>
  </NuxtLink>
</template>

<script>
import dateformat from 'dateformat'

export default {
  props: ['todo'],

  computed: {
    deadlineString () {
      return dateformat(this.todo.deadline, 'yyyy/mm/dd')
    },
    destinationUrl () {
      return `/detail/${this.todo.id}`
    }
  }
}
</script>
