<template>
  <div class="container">
    <div class="test">
      <p class="w">WELCOME</p>
      <p class="t">to</p>
      <p class="h">H E L L</p>
      <div class="row justify-content-center">
        <div class="devil col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
          <img src="/images/devil.png" alt="">
        </div>
      </div>
      <p class="m">&#183; the devil made me do it &#183;</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Devil'
  }
</script>

<style scoped>
  .test {
    text-align: center;
  }
  .test .w {
    font-size: 60px;
  }
  .test .t {
    font-size: 40px;
  }
  .test .h {
    font-size: 70px;
    color: #ca1c26;
    margin-bottom: 40px;
  }
  .test .m {
    color: gray;
  }
  .devil img {
    width: 100%;
    margin-bottom: 20px;
  }
</style>
