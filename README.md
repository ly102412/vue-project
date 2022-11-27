## vuex 实现
- vuex 实际上就是一个 class 类，内部有一个 install 方法
- 我们在创建 Vue 时调用 use 方法，实际上就是执行了这个 install 方法
- 在 install 中，Vue 会将实例注入其中，我们就可以使用 Vue 中的一些方法了
- 在我们创建 Store 的时候，会将对应的方法及 state 数据传递给 Vuex 的 class 类
- 在 install 中，我们使用 Vue 的 provide 方法，将 class 的数据传递到全局
- 当我们使用 Vuex 的时候，又会掉用 inject 方法获取 provide 传递的值

## vue-router
- vue-router 是一个 class 类，内部有一个 install 方法
- 我们在创建 Vue 时调用 use 方法，实际上就是执行了这个 install 方法
- 在 install 中，Vue 会将实例注入其中，我们就可以使用 Vue 中的一些方法了
- 在 install 中，我们还注册了 router-view 和 router-link 组件
- 在我们创建 router 的时候，会将对应的数据传给 vue-router 的 class 类
- 在这个 class 类中还监听了 hashchange 等方法，在选择 hash 模式时，router-link 每次改变 hash 值就会触发页面重新渲染
- vue-router 也是使用 Vue 的 provide inject 进行值得传递