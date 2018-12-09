<template>
    <div class="container">
      <div class="row">
        <div class=" content col-xl-12">
          <p class="logo">Ласкаво просимо до сайту <span class="b">BOOK</span>  <span class="m">MARKET</span> — електронну бібліотеку.</p>
          <p>Тут ви можете безкоштовно завантажувати електронні книги в форматі <span class="desc">*.fb2</span> та <span class="desc">*.epub</span>.</p>
          <p></p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .content {
    padding: 0 50px;
  }
  .logo .b {
    color: #0464F1;
  }
  .logo .m {
    color: #ADD9D3;
  }
  .desc {
    color: gray;
  }
</style>
