## vuex 实现
- vuex 实际上就是一个 class 类，内部有一个 install 方法
- 我们在创建 Vue 时掉用 use 方法，实际上就是执行了这个 install 方法
- 在 install 中，Vue 会将实例注入其中，我们就可以使用 Vue 中的一些方法了
- 在我们创建 Store 的时候，会将对应的方法及 state 数据传递给 Vuex 的 class 类
- 在 install 中，我们使用 Vue 的 provide 方法，将 class 的数据传递到全局
- 当我们使用 Vuex 的时候，又会掉用 inject 方法获取 provide 传递的值
