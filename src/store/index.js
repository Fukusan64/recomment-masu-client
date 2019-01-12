import Vue from 'vue'
import Vuex from 'vuex'

import userList from './modules/userList'
import recommendProblemList from './modules/recommendProbemList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userList,
    recommendProblemList,
  },
  strict: process.env.NODE_ENV !== 'production',
})
