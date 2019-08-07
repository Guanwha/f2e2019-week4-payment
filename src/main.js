// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import Vue from 'vue';
import App from './App';
import store from './stores';
import './styles/_reset.css';
import './styles/_normalize.scss';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
