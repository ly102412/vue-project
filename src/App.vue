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
    <h1 @click="add">{{ count }}</h1>
    <Counter />
  </div>
</template>

<style scoped>

</style>
