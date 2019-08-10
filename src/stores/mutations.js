import { payTypes, orderStatus } from './constants';
import * as types from './mutation_types';

export const mutations = {
  // payload is pay type
  [types.SELECT_PAY_TYPE](state, payload) {
    state.payBy = payload;
  },
  // payload is shop key
  [types.SELECT_SHOP](state, payload) {
    state.curShopID = payload;
  },
  // ------ switch page ------
  [types.FILL_PAYINFO](state) {
    state.order.status = orderStatus.UNPAID;
  },
  // payload is object (include orderer{}, recipient{})
  [types.CHECK_ORDER](state, payload) {
    if (payload) {
      state.order.orderer = Object.assign(payload.orderer);
      state.order.recipient = Object.assign(payload.recipient);
      state.order.status = orderStatus.CHECK;
    }
  },
  [types.PAY](state) {
    // [TODO] update the state.order
    state.order.status = orderStatus.PAID;
  },
  [types.RESET](state) {
    state.order.card.code = '';
    state.order.status = orderStatus.UNPAID;
  },
};

export const state = {
  carts: [{                                             // carts list
    prod: { id: '001', name: '長版無袖洋裝' },
    count: 1,
    color: '綠色',
    price: 599,
  }, {
    prod: { id: '002', name: '大球氣質銀飾耳環(針式)' },
    count: 1,
    color: '紅色',
    price: 281,
  }],
  payBy: payTypes.SHOP,                                 // payment types
  curShopID: '001',
  shops: {                                              // commone shop list
    '001': {
      store: '復興',
      address: '臺北市大安區復興路999段99號1巷',
    },
    '002': {
      store: '南山',
      address: '臺北市信義區松智路17號',
    },
    '003': {
      store: '台北車站',
      address: '臺北市中正區北平西路3號',
    },
    '004': {
      store: '京站',
      address: '臺北市大同區市民大道一段209號',
    },
  },
  order: {                                              // order informations
    no: 'JC293016',
    shop: {
      storeID: '001',
      payCode: '',
      payDeadLine: '',
    },
    card: {
      number: '',
      valid: '',
      code: '',
      fee: 0,
    },
    webatm: {
      bankCode: '',
      fee: 0,
    },
    linepay: {
      discount: 0,
      fee: 0,
    },
    orderer: {
      name: '',
      areaCode: '886',
      phone: '',
      postCode: '',
      address: '',
      email: '',
    },
    recipient: {
      name: '',
      areaCode: '886',
      phone: '',
      postCode: '',
      address: '',
      email: '',
    },
    shipFee: 60,
    totalPrice: 940,
    status: orderStatus.UNPAID,
  },
};
