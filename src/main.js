import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'// loads from src/router/index.js
import { createPinia, PiniaVuePlugin } from 'pinia'
import './assets/tailwind.css'

const pinia = createPinia()
Vue.use(PiniaVuePlugin)

// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes, // Array of route configurations
// });

new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount('#app')
