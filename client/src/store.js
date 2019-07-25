import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mode: 'default',
    studentInfo: {
      id: '',
      lang: 'en',
    },
    log: {
      isError: false,
      errorMsg: '',
    },
  },
  mutations: {
    updateStudent(state, payload) {
      state.studentInfo.id = payload.id;
      state.studentInfo.lang = payload.lang;
    },

    setError(state, message) {
      state.log.isError = true;
      state.log.errorMsg = message;
    },

    clearError(state) {
      state.log.isError = false;
      state.log.errorMsg = '';
    },

    changeBackground(state, mode) {
      state.mode = mode;
    },
  },
  actions: {},
});
