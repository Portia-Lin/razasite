<template>
  <div class="container" v-if="genre">
    <div class="about-genre row no-gutters">
      <div class="genre-description col-xl-12 col-lg-8 col-md-8 col-sm-12">
        <h3 class="book-genre">{{ genre.genre }}</h3>
        <Book :book="book" v-for="(book, index) of books" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '../firebase/db'

  export default {
    name: 'AboutGenrePage',
    data () {
      return {
        genre: null,
        id: null
      }
    },
    created () {
      this.id = parseInt(this.$route.params.id)
    },
    mounted () {
      db.ref('genres').orderByChild('id').equalTo(this.id).on('value', (snapshot) => {
        snapshot.forEach((data) => {
          this.genre = data.val()
        })
      })
    }
  }
</script>

<style scoped>
  .about-genre {
    margin-top: 30px;
  }
  .about-genre .genre-description .book-genre {
    text-align: center;
    color: #007bff;
    text-transform: uppercase;
  }
</style>
