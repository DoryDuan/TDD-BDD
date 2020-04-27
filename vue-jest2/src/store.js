import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    inputValue: "dory"
  },
  mutations: {
    changeInputValue(state, payload) {
      state.inputValue = payload;
    }
  }
});

export default store;
