import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import store from "./store"
import VueSkeletonLoader from 'skeleton-loader-vue';
import router from "./routers"
// import VeeValidate from 'vee-validate';
//boot strap vue starting
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//bootstrap vue ending

// Vue.use(VeeValidate);
// Register the component globally
Vue.component('vue-skeleton-loader', VueSkeletonLoader);
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
