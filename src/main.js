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


import VueI18n from 'vue-i18n';
import messages from './locales/text';
Vue.use(VueI18n)
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('default-layout', Default);

library.add(fas);
library.add(fab);
Vue.component('icon', FontAwesomeIcon);

const i18n = new VueI18n({
  locale: 'kiny',
  messages
})
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
