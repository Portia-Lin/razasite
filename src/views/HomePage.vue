<template>
    <div class="container wrapper">
      <div class="row">
        <div class="content col-xl-12">
          <p class="logo">Ми раді бачити вас на сайті <span class="b">BOOK </span><span class="m">MARKET</span> — електронній бібліотеці.</p>
          <p>Тут ви можете безкоштовно завантажувати електронні книги в форматі <span class="desc">*.fb2</span> та <span class="desc">*.epub</span>.</p>
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
  .wrapper {
    flex: 1 0 auto;
  }
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
