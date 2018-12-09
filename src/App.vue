<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
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
  .wrapper {
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
