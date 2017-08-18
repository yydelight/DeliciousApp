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

Vue.use(MintUi)
Vue.use(ElementUI)
Vue.use(Lazyload);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
