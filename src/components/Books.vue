<template>
  <div>
    <Book :book="book" :key="index" v-for="(book, index) of books"/>
  </div>
</template>

<script>
  import Book from './Book'
  export default {
    name: 'Books',
    components: { Book },
    props: ['books']
  }
</script>

<style scoped>

</style>
