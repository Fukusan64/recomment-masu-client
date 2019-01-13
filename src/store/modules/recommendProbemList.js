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
  async getList({ commit }, userName) {
    commit('setStatus', 'loading');
    try {
      commit('setList', await recommendProblem.getList(userName));
      commit('setStatus', 'loaded');
    } catch (e) {
      commit('setStatus', 'error');
      commit('setList', []);
      Snackbar.open({
        duration: 5000,
        message: `問題一覧の取得中にエラーが発生しました(status: ${e.response.status})`,
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

const filters = {
  abc(list) {
    return list.filter(({problem}) => !/^abc[0-9]{3}_/.test(problem));
  },
}

const getters = {
  filteredProblemList:({ list }) => (ignoreList = {}) => {
    let tmpList = list;
    Object.keys(ignoreList).filter(key => ignoreList[key]).forEach(key => {
      tmpList = filters[key](tmpList);
    });
    return tmpList;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
