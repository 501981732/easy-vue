// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import axios from "axios";
import api from "@/config/apis.js";
import store from "@/store/";
import FastClick from "fastclick";

import "babel-polyfill"; // API垫片

import "./assets/css/reset.css";
import "./assets/css/animation.css";
import "./assets/css/common.css";
// import './assets/css/normalize.css'

// REM布局方案  OR vw布局
// import 'lib-flexible/flexible.js' or
// import 'amfe-flexible/index.js'

// 自动注入components
import "./components/global.js";

Vue.prototype.$api = api;

Vue.config.productionTip = false;
// vue插件
import AlertPlugin from "./plugins/alert/index.js";
import ToastPlugin from "./plugins/toast/index.js";
import ConformPlugin from "./plugins/confirm/index.js";
import LoadingPlugin from "./plugins/loading/index.js";
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(ConformPlugin);
Vue.use(LoadingPlugin);

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});

// window.mountApp = () => {
//   app.$mount('#app')
// }
// if (process.env.NODE_ENV === 'production') {
//   if (window.STYLE_READY) {
//     window.mountApp()
//   }
// } else {
//   window.mountApp()
// }
