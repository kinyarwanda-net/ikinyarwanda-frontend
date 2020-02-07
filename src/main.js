import Vue from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import Default from './layouts/Default';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('default-layout', Default);

library.add(fas);
library.add(fab);
Vue.component('icon', FontAwesomeIcon);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
