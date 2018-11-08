// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store/'
Vue.config.productionTip = false

import 'babel-polyfill' // API垫片

import './assets/css/reset.css'
// import './assets/css/normalize.css'

// REM布局方案  OR vw布局
// import 'lib-flexible/flexible.js' or
// import 'amfe-flexible/index.js'


// vue插件 
import AlertPlugin from './plugins/alert/index.js'
Vue.use(AlertPlugin)

// 自动注入components
import './components/global.js'

window.axios = axios

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

window.mountApp = () => {
  app.$mount('#app')
}
if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp()
  }
} else {
  window.mountApp()
}
