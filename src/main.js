// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import VueMaterial from '../node_modules/vue-material';
import '../node_modules/vue-material/dist/vue-material.css';
import '../node_modules/vue-material/dist/theme/default.css';
import axios from '../node_modules/axios';
import queryString from '../node_modules/querystring';

Vue.use(VueMaterial);
Vue.use(axios);
Vue.use(queryString);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
