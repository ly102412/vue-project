<template>
  <h1>Counter component: {{ count }}</h1>
</template>

<script setup>
import { useStore } from '../store/vuex';
let store = useStore()
console.log(store)
</script> 