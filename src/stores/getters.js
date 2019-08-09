
const getters = {
  curOrderTypes: state => state.order.status,
  orderNo: state => state.order.no,
  prodPrice: (state) => {
    let price = 0;
    let i;
    for (i = 0; i < state.carts.length; i++) {
      price += state.carts[i].price * state.carts[i].count;
    }
    return price;
  },
  shipPrice: state => state.order.shipFee,
  totalPrice: state => state.order.totalPrice,
  curPayBy: state => state.payBy,
  shopList: state => state.shops,
};

export default getters;
