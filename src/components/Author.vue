<template>
  <div class="about-itm col-xl-3 col-lg-4 col-md-4 col-sm-6">
    <h3 class="author-name">{{ author.name }}</h3>
    <img class="iimg" :src="author.image" :alt="author.name">
    <div class="next row no-gutters flex-grow-1 align-items-end">
      <div class="col-xl-12 col-md-12 col-sm-12 col-lg-12 col-9">
        <router-link :to="{ name: 'about-author-page', params: { id: this.author.id } }" class="btn btn-outline-primary btn-block" role="button">Детальніше</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Author',
    props: ['author']
  }
</script>

<style scoped>
  .row-authors > div:nth-child(n) {
    padding: 10px;
  }
  .about-itm .author-name {
    color: #007bff;
    margin-bottom: 20px;
  }
  .about-itm {
    text-align: center;
  }
  .about-itm .iimg {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    .next {
      justify-content: center;
    }
  }
</style>
