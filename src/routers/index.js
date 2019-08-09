import Vue from 'vue';
import VueRouter from 'vue-router';
import Payment from '../pages/Payment';
import SelectPayType from '../pages/SelectPayType';
import PayInfo from '../pages/PayInfo';
import PayByShop from '../components/PayByShop';
import PayCheck from '../pages/PayCheck';
import PayDone from '../pages/PayDone';

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
        {
          name: 'PayCheck',
          path: 'paycheck',
          component: PayCheck,
        },
        {
          name: 'PayDone',
          path: 'paydone',
          component: PayDone,
        },
      ],
    },
  ],
});
