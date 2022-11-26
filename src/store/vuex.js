 import { inject, reactive } from 'vue'

 const __STORE_KEY__ = '__STORE_KEY__'

 class Store{
  constructor(options) {
    this._state = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
  }
  install(app) {
    console.log(app)
    console.log(this)
    app.provide(__STORE_KEY__, this)
  }
  get state() {
    return this._state.data
  }
  commit(type, payload) {
    const fn = this._mutations[type]
    fn && fn(this.state, payload)
  }
 }

 // 组件内部获取
 function useStore() {
  return inject(__STORE_KEY__)
 }
 
 function createStore(options) {
  return new Store(options)
 }

 export { useStore, createStore }