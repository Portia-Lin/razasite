<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content {
    flex: 1 0 auto;
  }
</style>
<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>
