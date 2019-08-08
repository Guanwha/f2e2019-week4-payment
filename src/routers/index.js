import Vue from 'vue';
import VueRouter from 'vue-router';
import Payment from '../pages/Payment';
import SelectPayType from '../pages/SelectPayType';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'Payment',
      path: '',
      component: Payment,
      children: [
        {
          name: 'SelectPayType',
          path: '',
          component: SelectPayType,
        },
      ],
    },
  ],
});
