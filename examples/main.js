import Vue from 'vue'
import App from './App.vue'
import TageTextarea from '../packages/index'
Vue.use(TageTextarea)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
