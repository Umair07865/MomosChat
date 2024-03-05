import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your components
import HomePage from './components/HomePage.vue';

import SignupPage from "./components/SignupPage.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    component: HomePage
  },
  {
    path: '/',
    component: SignupPage
  }
];

const router = new VueRouter({
  routes,
  mode: 'history' // Optional: Removes the hash from the URL
});

export default router;
