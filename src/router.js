import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import BooksPage from './views/BooksPage.vue'
import GenresPage from './views/GenresPage.vue'
import AuthorsPage from './views/AuthorsPage.vue'

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
      path: '/genres',
      name: 'genres-page',
      component: GenresPage
    },

    {
      path: '/authors',
      name: 'authors-page',
      component: AuthorsPage
    }
  ]
})
