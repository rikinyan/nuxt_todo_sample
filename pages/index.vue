<template>
  <div>
    <div>
      <h1>rikiishiのtodo</h1>
    </div>
    <form>
      <div>
        <label for="todo-title">title</label>
        <input id="todo-title" type="text">
        <label for="todo-deadline">deadline</label>
        <input id="todo-deadline" type="date">
      </div>
      <div>
        <label for="todo-detail">detail</label>
        <textarea placeholder="detail……" name="" id="todo-detail" cols="50" rows="5">
        </textarea>
      </div>
    </form>
    <div class="list-group">
      <ToDoListItem
        v-for="todo in this.todoData"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :detail="todo.detail"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoData: [
        {
          id: 1,
          title: 'Appの新機能開発',
          deadline: Date(),
          detail: 'あぷりのかいはつをする。せんぱいにたのまれてたの忘れていたので、優先度たかし。'
        },
        {
          id: 2,
          title: 'nuxtの勉強',
          deadline: Date(),
          detail: 'こうはいたちにおしえなきゃならんのよ。'
        },
        {
          id: 3,
          title: 'clean architectureを読む',
          deadline: Date(),
          detail: 'わかめ'
        }
      ]
    }
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
