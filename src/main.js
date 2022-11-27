import { createApp } from 'vue'
import App from './App.vue'
import store from './store/count'
import route from './router/router'

import './assets/main.css'

createApp(App).use(route).use(store).mount('#app')
