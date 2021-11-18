<template>
  <div class="live">
    <video 
      class="live__video"
      type="video/mp4"
      autoplay="autoplay" 
      loop="loop"
      muted="muted"
      src="https://hwvod.mogucdn.com/vodcq1251964405/5285890800198363387/f0.mp4">
    </video>
    <c-box-center
      class="live__bg"
      pa10 bga2>
      <img 
        class="live__img" 
        src="https://s11.mogucdn.com/mlcdn/c45406/200316_1d19kb00gh7125k1h9gifhbfbceke_400x400.jpg_100x9999.v1c7E.70.webp"
        circle/>
      <span mh6>可乐姐</span>
      <div 
        class="live__follow"
        pa6 radius10>
        关注
      </div>
    </c-box-center>
    <div 
      class="goods"
      pa6 radius4 bga2>
      <c-magazine
        class="goods__bg" 
        image="https://s11.mogucdn.com/mlcdn/c45406/201105_5d30ll85hf39828lh2a62ak38e09d_640x960.jpg_100x100.jpg"
        radius6>
        <c-box-center 
          class="goods__ms"
          pa4>
          待秒杀
        </c-box-center>
        <c-box-center 
          class="goods__price"
          bga7 pa4>
          ￥83
        </c-box-center>
      </c-magazine>
    </div>
    <img
      class="live__package"
      src="https://s10.mogucdn.com/mlcdn/c45406/200901_2fib9eb2clidj808d84f5ffaj224e_90x90.gif" />
    
    <div
      class="live__icon"
      bga4 circle pa6>
      <thumbs-up
        theme="multi-color"
        size="24" 
        :fill="['#ffffff' ,'#ffffff' ,'#FFF' ,'#43CCF8']"/>
    </div>
  </div>
</template>
<script>
import { ThumbsUp } from '@icon-park/vue-next'
export default {
  components: {
    ThumbsUp
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
@include b(live) {
	@include e(video) {
		@include position(absolute, top 0 left 0 right 0 bottom 0);
		// @include dimensions(100%, 100vh);
	}
  @include e(bg) {
    @include position(absolute, top 10px left 8px);
    border-radius: 28px;
  }

  @include e(img) {
    @include dimensions(36px, 36px);
  }

  @include e(follow) {
    background: #ff5087;
  }

  @include e(package) {
    @include dimensions(45px, 45px);
    @include position(absolute, bottom 15px left 15px);
  }

  @include e(icon) {
    @include position(absolute, bottom 15px right 15px);
  }

}
@include b(goods) {
  @include position(absolute, top 72px left 8px);
  @include e(bg) {
    @include dimensions(65px, 60px);
  }
  @include e(ms) {
    @include position(absolute, top 0 left 0);
    background: #948afb;
    border-radius: 6Px 0/6Px 0;
  }

  @include e(price) {
    @include position(absolute, bottom 0 left 0);
    border-radius: 0 6Px/0 6Px;
  }
}
</style>