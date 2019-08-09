import * as types from './mutation_types';

const actions = {
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
