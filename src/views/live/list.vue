<template>
  <c-layout>
    <c-header fixed>
       <c-launch></c-launch>
    </c-header>
    <c-main class="content">
      
      <c-box-skin class="live" v-for="(item, index) in liveList" :key="index" ph12>
        <c-magazine class="live__container" :image="item['background']">
          <c-single-center class="live__header" pv18>
            <img class="live__img" :src="item['avatar']" mr8 circle />
            <span>{{ item['name'] }}</span>
          </c-single-center>
          <div 
							class="live__status"
							pa4
							bga2 radius4 font-tertiary>直播中 | {{ item["watchNum"] }}</div>
            <span 
              class="live__title"
              font-tertiary fz16>{{ item["liveTitle"] }}</span>
          <c-single-center class="chat">
							<img
								class="chat__img"
								src="https://s5.mogucdn.com/mlcdn/c45406/201015_49kl85i184k4gg6cf247eeg0ijl33_400x400.jpg_100x100.jpg"
								mr8 circle/>
							<span font-tertiary>小仙子</span>
						</c-single-center>
          <c-single-center>
            <c-magazine
              class="product"
              v-for="(goodsItem, index) in item['goods']"
              :key="index"
              :image="goodsItem['image']"
              mr10>
              <div 
                class="product__des"
                font-tertiary>{{ goodsItem['price'] }}</div>
            </c-magazine>    
          </c-single-center>
        </c-magazine>
      </c-box-skin>

    </c-main>
    <c-footer>
      <c-foot-nav class="footer" :list="list" fz16 />
    </c-footer>
  </c-layout>
</template>
<script>
import { getLives } from '@/api/live'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'LiveList',
  setup() {
    const data = reactive({
      liveList: []
    })
    onMounted(() => {
      getLives().then((res) => {
        data.liveList = res.data
      })
    })
    const list = [
			{
				path: '/mall/home',
				text: '首页'
			},{
				path: '/mall/store',
				text: '商城'
			},{
				path: '/live/home',
				text: '直播',
				active: true
			},{
				path: '/me/me',
				text: '我'
			}
		];
    return {
      ...toRefs(data),
      list
    }
  },
}
</script>

<style lang="scss" scoped>
@include b(live) {
  padding-top: 42px;
  @include e(container) {
    position: relative;
    height: 200px;
    border-radius: 4Px 4Px 0 0/4Px 4Px 0 0;
  }

  @include e(header) {
    @include position(absolute, top -50px left 12px)
  }

  @include e(img) {
    @include dimensions(45px);
    border: 2px solid #fff;
  }
  @include e(status) {
		@include position(absolute, top 70px left 12px);
	}

	@include e(title) {
		@include position(absolute, top 100px left 12px);
	}
}
@include b(content) {
  padding-top: 47px;
	padding-bottom: 50px;
}
@include b(chat) {
	@include position(absolute, bottom 10px right 10px);
	@include dimensions(120px, 60px);
	@include e(img) {
    @include dimensions(14px);
	}
}
@include b(product) {
	@include position(absolute, top 130px left 12px);
	@include dimensions(60px);
	@include e(des) {
		padding-top: 42px;
	}
}
@include b(footer) {
   & :deep(.c-foot-nav__text) {
		height: 50px;
	}
}
</style>