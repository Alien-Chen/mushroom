<template>
  <div class="c-box-center" font-tertiary>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CBoxCenter',
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
@include b(c-box-center) {
  @include box-center
}
</style>