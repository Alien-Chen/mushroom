<template>
  <div class="c-carousel">
    <div 
      class="c-carousel__box c-carousel__box--bg1"
      v-for="(item, index) in list"
      :key="index"
    >
      <img :src="item['image']" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CCarousel',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
@include b(c-carousel) {
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
  @include e(box) {
    display: inline-block;
    width: 100%;
    // height: 100%;
    scroll-snap-align: center;
    scroll-snap-stop: always; // 设置每张子项必须停下来，不过拖拽的速度多快
    @include m(bg1) {
      background: skyblue;
    }
    @include m(bg2) {
      background: tan;
    }
    @include m(bg3) {
      background: greenyellow;
    }
    @include m(bg4) {
      background: palegoldenrod;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>