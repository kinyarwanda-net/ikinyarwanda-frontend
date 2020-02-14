export default {
  state: {
    search_word: {
      word: '',
      loading: false,
      success: false
    }
  },
  getters: {
    search_word(state) {
      return state.search_word;
    }
  },

  mutations: {
    SEARCH_WORD_SUCCESS(state) {
      state.search_word.word = 'ijambo';
      state.search_word.loading = false;
      state.search_word.success = true;
    }
  },
  actions: {
    searchWord: context => {
      context.commit('SEARCH_WORD_SUCCESS');
    }
  }
};
