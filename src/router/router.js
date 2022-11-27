import { createRouter, createWebHashHistory } from './vrouter'
import HelloWord from '../components/HelloWorld.vue'
import Counter from '../components/Counter.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: HelloWord
    },
    {
      path: '/about',
      component: Counter
    }
  ],
  history: createWebHashHistory()
})

export default router