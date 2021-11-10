<template>
  <c-layout>
    <c-header fixed style="background: pink">
      header
    </c-header>
    <c-main style="background: green;">
      <div style="height: 1000px">
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
      </div>
    </c-main>
    <c-footer style="background: yellow">footer</c-footer>
  </c-layout>
</template>

<script>
import { getUsers } from '@/api'
import { onMounted, reactive } from '@vue/runtime-core'
export default {
  setup() {
    const data = reactive({
      list: []
    })
    onMounted(() => {
      getUsers().then(res => {
        console.log(res);
        data.list = res.data
      })
    })
  },
}
</script>