import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css' //Vuesax styles


Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
