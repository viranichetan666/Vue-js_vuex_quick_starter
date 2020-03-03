const initialState = {
  isLogin: false,
  token: null,
};

// getters
const getters = {
  isLogin: (state) => state.isLogin,
};

// actions
const actions = {
  loginSuccess({ commit }) {
    console.log('hellooo');
    commit('loginSuccess');
  },
  logout({ commit }) {
    commit('logout');
  },
};

// mutations
const mutations = {
  loginSuccess(state) {
    state.isLogin = true;
    state.token = 'Your login token';
  },
  logout(state) {
    state.isLogin = false;
    state.token = null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
