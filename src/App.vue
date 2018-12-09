<template>
  <div id="app">
    <Header/>
    <router-view/>
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
