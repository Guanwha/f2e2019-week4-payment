import Vue from 'vue';
import VueRouter from 'vue-router';
import Payment from '../pages/Payment';
import SelectPayType from '../pages/SelectPayType';
import PayInfo from '../pages/PayInfo';
import PayByShop from '../components/PayByShop';

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
        {
          name: 'Payinfo',
          path: 'payinfo',
          component: PayInfo,
          children: [
            {
              name: 'PayByShop',
              path: 'shop',
              component: PayByShop,
            },
          ],
        },
      ],
    },
  ],
});
