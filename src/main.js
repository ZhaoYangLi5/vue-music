import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'

import fastclick from 'fastclick'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
// vue-lazyload 的注册
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('common/image/loading.gif'),
  attempt: 1
})

