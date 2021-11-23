import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import store from './store'

Vue.use(VueViewer)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')