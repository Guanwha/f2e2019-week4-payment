import { payTypes, orderStatus } from './constants';


export const mutations = {
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
      phone: {
        code: '886',
        number: '',
      },
      address: {
        code: '',
        detail: '',
      },
      email: '',
    },
    recepient: {
      name: '',
      phone: {
        code: '886',
        number: '',
      },
      address: {
        code: '',
        detail: '',
      },
      email: '',
    },
    shipFee: 0,
    totalPrice: 0,
    status: orderStatus.NONE,
  },
};
