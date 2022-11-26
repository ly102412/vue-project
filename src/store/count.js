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
    },
    addNum(state, num) {
      state.count+=num
    }
  }
})

export default counterStore