import { createStore } from './vuex'

const counterStore = createStore({
  state() {
    return {
      count: 22
    }
  },
  mutations: {
    add(state) {
      state.count++
    }
  }
})

export default counterStore