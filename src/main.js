// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Lazyload } from 'mint-ui';
import vueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(MintUi)
Vue.use(ElementUI)
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.use(vueResource)
// Vue.use(Vuex)

// const state = {
//   weekRankId: '',
//   monthRankId: '',
//   totalRankId: '',
//   headTitle: '', // 头部文字
//   previousPosition: '书架',
//   source: '', // 小说源
//   backPath: {},
//   bookInfo: {}
// }

// const Store = new Vuex.Store({
//   state,
//   mutations: {
//   	getId(state,id){
//   		state.headTitle = "你好"
//   	}
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // Store, //把 store 对象提供给 “store” 选项
  template: '<App/>',
  components: { App }
})
