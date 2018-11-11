<template>
  <fragment>
    <div class="book-img col-xl-4 col-lg-4 col-md-4 col-sm-7">
      <img class="iimg" :src="book.image" :alt="book.title">
    </div>
    <div class="book-description col-xl-8 col-lg-8 col-md-8 col-sm-12">
      <h3 class="book-title">{{ book.title }}</h3>
      <h4 class="book-author">{{ book.author }}</h4>
      <p class="original-book-title"><span class="original-book-title-label">Оригінальна назва: </span>{{ book.original-title }}</p>
      <p class="original-book-language"><span class="original-book-language-label">Мова оригіналу: </span>{{ language }}</p>
      <p class="genre"><span class="genre-label">Жанр: {{ genre }}</p>
      <p class="book-series"><span class="book-series-label">Серія: {{ series }}</p>
      <p class="book-series-number"><span class="book-series-number-label">Номер книги в серії: </span>1</p>
      <p class="book-year"><span class="book-year-label">Рік: </span>1983</p>
      <p class="isbn"><span class="isbn-label">ISBN: </span>978-5-699-15629-0</p>
      <p class="book-language"><span class="book-language-label">Переклад: </span>Російська</p>
      <p class="book-annotation-label">Короткий опис:</p>
      <p class="book-annotation-text" id="book-annotation-last-text">Это Великий А’Туин, Вселенская Черепаха, которая бороздит безбрежный космос. Это четыре слона, которые держат на спинах Плоский мир. А это Ринсвинд, самый трусливый волшебник на Диске, и Двацветок, первый турист Плоского мира. Неисчислимые тролли, драконы, волки и Смерть (одна штука) поджидают их в скитаниях по дотоле неведомой нам сказочной вселенной.</p>
      <div class="taptodwn row no-gutters">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-7 col-9">
          <a class=" btn btn-outline-primary btn-block" href="/authors/terry_pratchett/books/the_colour_of_magic/files/the_colour_of_magic.fb2" download role="button">Завантажити</a>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
  export default {
    name: 'Book',
    props: ['book']
  }
</script>

<style scoped>

</style>
