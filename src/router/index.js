import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    }
  ]
})
