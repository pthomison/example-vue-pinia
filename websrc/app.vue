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
	
<h1>example-vue-pinia application</h1>

<h4>Store Count: {{this.store.count}}</h4>

<component></component>

</template>
