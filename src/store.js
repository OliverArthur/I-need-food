
import Vue from 'vue'
import Vuex from 'vuex'

import Services from '@/services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coordinates: {}
  },
  mutations: {
    SET_LOCATION: (state, { coordinates }) => {
      state.coordinates = coordinates
    }
  },
  actions: {
    FETCH_LOCATION: ({ commit }, location) => {
      Services.getUserGeolocation(location)
        .then(coordinates => {
          commit('SET_LOCATION', { coordinates })
        })
        .catch(err => {
          throw new Error(err)
        })
    }
  },
  getters: {
    coordinates (state) {
      return state.coordinates
    }
  }
})
