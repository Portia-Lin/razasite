import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import BooksPage from './views/BooksPage.vue'
import GenresPage from './views/GenresPage.vue'
import AuthorsPage from './views/AuthorsPage.vue'
import AboutBookPage from './views/AboutBookPage.vue'
import AboutGenrePage from './views/AboutGenrePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/books',
      name: 'books-page',
      component: BooksPage
    },
    {
      path: '/book/:id',
      name: 'about-book-page',
      component: AboutBookPage
    },
    {
      path: '/genres',
      name: 'genres-page',
      component: GenresPage
    },
    {
      path: '/authors',
      name: 'authors-page',
      component: AuthorsPage
    },
    {
      path: '/genres/:id',
      name: 'about-genre-page',
      component: AboutGenrePage
    }
  ]
})
