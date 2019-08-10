import * as types from './mutation_types';

const actions = {
  selectPayType: ({ commit }, payload) => {
    commit(types.SELECT_PAY_TYPE, payload);
  },
  selectShop: ({ commit }, payload) => {
    commit(types.SELECT_SHOP, payload);
  },
  // ------ switch page ------
  fillPayInfo: ({ commit }) => {
    commit(types.FILL_PAYINFO);
  },
  checkOrder: ({ commit }) => {
    commit(types.CHECK_ORDER);
  },
  pay: ({ commit }) => {
    commit(types.PAY);
  },
  reset: ({ commit }) => {
    commit(types.RESET);
  },
};

export default actions;
