import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/search'

Vue.use(Router)

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
    },
    {
       path: '/mine',
       name: 'mine',
       component(resolve) {
       	  require.ensure(['./../components/slide.vue'], () => {
       	    resolve(require('./../components/slide.vue'));
       	  });
       },
       meta: { requiresAuth: true }

    }   	   
  ]
})
