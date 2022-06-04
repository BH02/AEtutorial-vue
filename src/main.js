import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import store from './store'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VueViewer)
Vue.config.productionTip = false
Vue.prototype.$axios=axios

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')