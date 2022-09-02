<script>
import { useStore } from './store.js'

export default {
  setup() {
    const store = useStore()

    return {
      store,
    }
  },
}
</script>

<template>

<h2>example-vue component</h2>

<button @click="store.increment()">Increment</button>

</template>
