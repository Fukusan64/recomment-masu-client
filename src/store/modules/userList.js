import { user } from "@/api"
import { Snackbar } from 'buefy/dist/components/snackbar'

const state = {
  list: [],
  listStatus: 'empty',
};

const mutations = {
  setList(state, list) {
    state.list = list.sort((a, b) => a.length - b.length);
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
  async getList({ commit, state }) {
    const backupData = state.list;
    commit('setStatus', 'loading');
    try {
      commit('setList', await user.getList());
      commit('setStatus', 'loaded');
    } catch (e) {
      commit('setStatus', 'error');
      commit('setList', backupData);
      Snackbar.open({
        duration: 5000,
        message: '表示可能なユーザー一覧の取得中にエラーが発生しました',
        type: 'is-danger',
        position: 'is-bottom-left',
        actionText: '閉じる',
        queue: false
      });
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
