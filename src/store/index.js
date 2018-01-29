import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      currentTabIdx:'home',
    },

    actions: {

    },

    mutations: {
      changeTabIdx(state, data) {
        state.currentTabIdx = data
      },
    }
})

export default store;
