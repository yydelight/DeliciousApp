import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/search'

Vue.use(Router)

const Book = resolve => require(['@/components/Book'], resolve)
const readBook = resolve => require(['@/components/readBook'], resolve)  

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/search',
      name:'search',
      component: Search
    }, {
      path: '/book/:bookId',
      name: 'book',
      component: Book
    }, {
      path: '/readBook/:bookId',
      name: 'readBook',
      component: readBook
    }  	   
  ]
})
