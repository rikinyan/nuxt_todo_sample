<template>
  <NuxtLink to="/">
    <div class="list-group-item">
      <h2>{{title}}</h2>
      deadline: {{deadlineString}}
    </div>
  </NuxtLink>
</template>

<script>
import dateformat from 'dateformat'

export default {
  props: {
    id: Number,
    title: String,
    deadline: Date,
    detail: String
  },

  computed: {
    deadlineString () {
      return dateformat(this.deadline, 'yyyy/mm/dd')
    }
  }
}
</script>
