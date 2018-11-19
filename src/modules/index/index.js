import Vue from 'vue'
import Index from './index.vue'
import '@/components/global.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
})
