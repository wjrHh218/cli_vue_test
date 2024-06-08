import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'
import './router/permission'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
