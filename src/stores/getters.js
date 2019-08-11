import { payTypes } from './constants';

const getters = {
  curOrderTypes: state => state.order.status,
  orderNo: state => state.order.no,
  prodPrice: (state) => {
    let price = 0;
    let i;
    let prod;
    const keys = Object.keys(state.cart);
    for (i = 0; i < keys.length; i++) {
      prod = state.cart[keys[i]];
      price += prod.price * prod.count;
    }
    return price;
  },
  shipPrice: state => state.order.shipFee,
  totalPrice: state => state.order.totalPrice,
  curPayBy: state => state.payBy,
  shopList: state => state.shops,
  curShopID: state => state.curShopID,
  prodList: state => state.cart,
  destAddress: (state) => {
    if (state.payBy === payTypes.SHOP) {
      return state.shops[state.curShopID].address;
    }
    return state.order.recipient.address;
  },
  shopPayInfo: state => state.order.shop,
  cardPayInfo: state => state.order.card,
  webatmPayInfo: state => state.order.webatm,
  linePayInfo: state => state.order.linepay,
};

export default getters;
