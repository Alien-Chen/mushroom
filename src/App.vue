<template>
  <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> -->
  <!-- </div> -->
  <router-view/>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(() => {
      window.document.documentElement.setAttribute(
        'data-theme',
        'cool'
      )
    })
  },
}
</script>

<style lang="scss">
</style>
