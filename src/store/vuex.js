 import { inject } from 'vue'

 const __STORE_KEY__ = '__STORE_KEY__'

 class Store{
  constructor() {
  }
  install(app) {
    console.log(app)
    console.log(this)
    app.provide(__STORE_KEY__, this)
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