<script setup>
import { ref } from 'vue'
import Counter from './components/Counter.vue'
let count = ref(1)
function add() {
  count.value++
}
</script>

<template>
  <div>
    <!-- <h1 @click="add">{{ count }}</h1>
    <Counter /> -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
   <router-view></router-view>
</template>

<style scoped>

</style>
