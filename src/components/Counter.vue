<template>
  <h1 @click="add" >Counter component: {{ count }}</h1>
</template>

<script setup>
import { useStore } from '../store/vuex';
import { computed } from 'vue'
let store = useStore()
let count = computed(() => store.state.count * 2)

function add() {
  store.commit('add')
}
</script> 