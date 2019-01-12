import {user} from "@/api"

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

const getters = {
 filteredUserNameList: ({ list }) => (keyWord) => {
    const lowerKeyWord = keyWord.toLowerCase();
    return list.filter((userName) => {
      return userName.toLowerCase().indexOf(lowerKeyWord) >= 0;
    });
  }
}

const actions = {
  async getList({ commit }) {
    commit('setStatus', 'loading');
    try {
      commit('setList', await user.getList());
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
  mutations,
  getters
}
