import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import Default from './layouts/Default';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('default-layout', Default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
