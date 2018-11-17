<template>
  <div class="test col-xl-3 col-lg-2 col-md-4 col-sm-4">
    <router-link :to="{ name: 'about-genre-page', params: { id: this.genre.id } }">{{ genre.genre }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Genre',
    props: ['genre']
  }
</script>

<style scoped>

</style>
