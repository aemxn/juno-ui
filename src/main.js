import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import Utils from './utils';

Vue.prototype.$utils = Utils;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');