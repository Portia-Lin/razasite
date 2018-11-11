<template>
  <div class="home">
    <h1 class="center">Домашняя страница</h1>
    <Books :books="books"/>
  </div>
</template>

<script>
  // импортируем базу данных из файла firebase.js
  import { db } from '../firebase/db'
  import Books from '../components/Books'

  export default {
    name: 'home',
    data () {
      return {
        books: []
      }
    },
    firebase: {
      books: db.ref('books')
    },
    components: { Books }
  }
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
