import { recommendProblem } from '@/api'
import { Snackbar } from 'buefy/dist/components/snackbar'

const state = {
  list: [],
  listStatus: 'empty',
}

const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setStatus(state, status) {
    state.listStatus = status;
  }
};

const actions = {
  async getList({ commit, state }, userName) {
    const backupData = state.list;
    commit('setStatus', 'loading');
    try {
      commit('setList', await recommendProblem.getList(userName));
      commit('setStatus', 'loaded');
    } catch (e) {
      commit('setStatus', 'error');
      commit('setList', backupData);
      Snackbar.open({
        duration: 5000,
        message: '問題一覧の取得中にエラーが発生しました',
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
  mutations
}
