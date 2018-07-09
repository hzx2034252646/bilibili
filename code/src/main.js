import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './utils/axios'
import VueLazyLoad from 'vue-lazyload'
import '@/assets/style/base.scss'

Vue.use(axios)
Vue.use(VueLazyLoad)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
