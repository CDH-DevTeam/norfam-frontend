import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalVisible: null,
    fulltext: false,
    results: { 1: [], 2: [] },
  },
  mutations: {
    showModal(state, name) {
      state.modalVisible = name;
    },
    hideModal(state) {
      state.modalVisible = null;
    },
    setFulltext(state, fulltext) {
      state.fulltext = fulltext;
    },
    setResults(state, { edition, results }) {
      state.results[edition] = results;
    },
  },
  actions: {},
});
