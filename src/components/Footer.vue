<template>
    <div class="container navbar-fixed-bottom">
      <div class="footer row no-gutters align-items-center">
        <div class="f-el col-xl-3 col-lg-4 col-md-4">
          <p>© 2018 — <a href="/">BookMarket</a></p>
        </div>
        <div class="f-el col-xl-3 col-lg-4 col-md-4">
          <p><img src="/images/instagram.png" alt="" class="ico"> <a href="https://www.instagram.com/jonas.quinn/">Jonas.Quinn</a></p>
        </div>
        <div class="f-el col-xl-3 col-lg-4 col-md-4">
          <p><img src="/images/tel.png" alt="" class="ico"> +3809<span class="devil"><a href="/tdmmdi">6</a></span>4857938</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footer {
    padding: 20px 0;
    color: #000;
    background-color: #f8f9fa;
  }
  .ico {
    height: 35px;
    margin-right: 10px;
  }
  .f-el {
    text-align: center;
  }
  .footer a {
    color: #000;
  }
  .devil a:hover {
    text-decoration: none;
    cursor: default;
  }
</style>
