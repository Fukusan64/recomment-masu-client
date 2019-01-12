import api from "@/api"

const state = {
  list: [],
  listStatus: 'empty',
};

const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setStatus(state, status) {
    state.listStatus = status;
  }
};

const actions = {
  async updateList({ commit }) {
    commit('setStatus', 'loading');
    try {
      commit('setList', await api.getUserList());
      commit('setStatus', 'loaded');
    } catch (e) {
      commit('setStatus', 'error');
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
