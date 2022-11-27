import { inject, ref } from 'vue'
import RouterView from './RouterView.vue'
import RouterLink from './RouterLink.vue'

const __ROUTER_KEY__ = '__ROUTER_KEY__'
class Router {
  constructor(options) {
    this.options = options
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)  // 响应式
    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice('1')
    })
  }
  install(app) {
    app.component('router-link', RouterLink)
    app.component('router-view', RouterView)
    app.provide(__ROUTER_KEY__, this)
  }
}
 
function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn)
  }
  return {
    bindEvents,
    url: window.location.hash.slice('1')
  }
}

function createRouter(options) {
  return new Router(options)
}

function useRouter() {
  return inject(__ROUTER_KEY__)
}


export { createRouter, createWebHashHistory, useRouter}