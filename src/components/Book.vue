<template>
  <div>
    <img class="img" :src="book.image" :alt="book.title">
    <h1 class="title">{{ book.title }}</h1>
    <h2 class="author">{{ book.author }}</h2>
    <p class="genre">{{ book.genre }}</p>
    <p class="annotation">{{ book.annotation }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Book',
    props: ['book']
  }
</script>

<style scoped>
  .title {
    text-transform: uppercase;
  }
  .annotation {
    color: brown;
  }
</style>
