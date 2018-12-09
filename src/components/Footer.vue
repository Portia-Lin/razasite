<template>
    <div class="container">
      <div class="footer row no-gutters align-items-center">
        <div class="f-el col-xl-3">
          <p>(c) 2018 — <a href="/">BookMarket</a></p>
        </div>
        <div class="f-el col-xl-3">
          <p><img src="/images/instagram.png" alt="" class="ico"> <a href="https://www.instagram.com/jonas.quinn/">Jonas.Quinn</a></p>
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
    display: block;
  }
  .f-el {
    display: inline;
  }
  .footer a {
    color: #000;
  }
</style>
