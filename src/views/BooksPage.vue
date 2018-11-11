<template>
    <div>
      <Book/>
    </div>
</template>

<script>
  export default {
    name: 'Books'
  }
</script>

<style scoped>
  .row-books > div:nth-child(n) {
    padding: 10px;
  }

  .book-img .iimg {
    width: 100%;
  }

  .about-itm {
    display: flex;
    flex-direction: column;
  }

  .about-itm .book-title {
    color: #007bff;
  }

  .about-itm .book-title a:hover {
    text-decoration: none;
  }

  .about-itm .book-author {
    color: #007bff;
    margin-bottom: 20px;
  }

  .about-itm .book-author a:hover {
    text-decoration: none;
  }

  .about-itm .genre {
    margin-bottom: 20px;
  }

  .about-itm .genre a {
    color: black;
    text-decoration: underline;
  }

  .about-itm .genre a:hover {
    color: #007bff;
  }

  .annotation {
    overflow: hidden;
    max-height: calc(1.5em * 8)

  }
</style>
