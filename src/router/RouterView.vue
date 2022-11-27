<template>
  <div>
     view：
    <component :is="comp"></component>
  </div>
</template>

<script setup>
import { useRouter } from './vrouter'
import { computed } from 'vue'

const router = useRouter()

const comp = computed(() => {
  const route = router.routes.find(r => r.path === router.current.value)
  return route ? route.component : null
})
</script>