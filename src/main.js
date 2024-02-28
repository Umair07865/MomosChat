import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from "./store"
import VueSkeletonLoader from 'skeleton-loader-vue';
import router from "./routers"
// Register the component globally
Vue.component('vue-skeleton-loader', VueSkeletonLoader);
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
