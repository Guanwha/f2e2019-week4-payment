import Vue from 'vue';
import VueRouter from 'vue-router';
import Payment from '../pages/Payment';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'Payment',
      path: '',
      component: Payment,
    },
  ],
});
