<template>
  <c-layout>
    <c-header>
      <c-launch />
      <c-box-skin type="bottom">
        <c-single-center>
          <hamburger-button
            theme="multi-color"
            size="28"
            :fill="['#a3a399','#cf981a' ,'#FFF' ,'#43CCF8']"
            :strokeWidth="2"
          />
          <c-single-center
            class="search"
            mt8 mb8 mr10
            bor-base radius
          >
            <search theme="multi-color" 
							size="20" 
							:fill="['#a3a399' ,'#ffffff' ,'#a3a399' ,'#43CCF8']"
              :strokeWidth="2"
							ml10 mr5/>
            <span>睡衣</span>
          </c-single-center>
          <more-two 
						theme="multi-color" 
						size="24" 
						:fill="['#a3a399' ,'#ffffff' ,'#a3a399' ,'#43CCF8']" 
						:strokeWidth="2"/>
        </c-single-center>
      </c-box-skin>
    </c-header>

    <c-main>
      <c-box-skin>
        <c-row gutter="10" ph6 pv9>
          <c-col
            v-for="(item, index) in promotionList"
            :key="index"
            span="6"
          >
            <c-magazine class="promotion" :image="item['image']" radius4 font-tertiary>
              <div class="promotion__span" fz14>
                {{ item['title'] }}
              </div>
            </c-magazine>
          </c-col>
        </c-row>
        <c-row class="nav" pb6>
          <c-col
            class="nav__col"
            v-for="(item, index) in categoryList"
            :key="index"
            pv5
          >
            <c-single-center class="nav__item">
               <img class="nav__img" :src="item['image']" pb5 />
               <span>{{ item['title'] }}</span>
            </c-single-center>
          </c-col>  
        </c-row>  
      </c-box-skin>
      <!-- 商品列表 -->
      <c-row class="good" gutter="6" pa6>
        <c-col span="12">
          <c-box-skin
            class="good__item"
            v-for="(item, index) in brandList[0]['list']"
            :key="index"
            mb6 radius4
          >
            <img class="good__img" :src="item['image']" />
            <div class="good__box" pv12 ph6>
              <p class="good__des" mb5 ellipsis2>{{ item['des'] }}</p>
            </div>
            <c-single-center>
              <img class="good__avatar" :src="item['avatarImage']" mr5 circle />
              <span ellipsis1>{{ item['avatarDes'] }}</span>
            </c-single-center>
          </c-box-skin>
        </c-col>
        <c-col span="12">
          <c-box-skin
            class="good__item"
            v-for="(item, index) in brandList[1]['list']"
            :key="index"
            mb6 radius4
          >
            <img class="good__img" :src="item['image']" />
            <div class="good__box" pv12 ph6>
              <p class="good__des" mb5 ellipsis2>{{ item['des'] }}</p>
            </div>
            <c-single-center>
              <img class="good__avatar" :src="item['avatarImage']" mr5 circle />
              <span ellipsis1>{{ item['avatarDes'] }}</span>
            </c-single-center>
          </c-box-skin>
        </c-col>
      </c-row>
      <!-- menu -->
			<!-- <c-box-center 
				class="menu"
				bga7 circle>
				快捷<br/>导航
			</c-box-center> -->
    </c-main>

    <c-footer>
      <c-foot-nav class="footer" :list="list" fz16 />
    </c-footer>
  </c-layout>
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
import {getRecommendatoryCategorys, getBanners, getBrandVideos, getPromotions} from '@/api/mall';
import {HamburgerButton, MoreTwo, Search} from '@icon-park/vue-next';

export default {
  name: 'MallShop',
  components: {
    HamburgerButton,
    MoreTwo,
    Search
  },
  setup() {
    const data = reactive({
      categoryList: [],
      brandList: [
        {
          list: []
        },
        {
          list: []
        }
      ],
      promotionList:[]
    })

    onMounted(() => {
      getRecommendatoryCategorys().then((res)=>{
				data.categoryList = res.data;
			})
			getBrandVideos().then((res)=>{
				data.brandList = res.data;
			}),
       getPromotions().then((res) => {
        data.promotionList = res.data
      })
    })
    
    const list = [
			{
				path: '/',
				text: '首页'
			},{
				path: '/',
				text: '商城',
        active: true
			},{
				path: '/',
				text: '直播'
			},{
				path: '/',
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
@include b(search) {
  @include dimensions(265px, 30px);
  box-shadow: 0 0 2px #ff5777;
}

@include b(nav) {
  @include e(col) {
    width: 20%;
  }
  @include e(item) {
    flex-direction: column;
  }
  @include e(img) {
    @include dimensions(50px)
  }
}

@include b(good) {
	@include e(avatar) {
		@include dimensions(25px);
	}
}

// 如果要改变组件内部的样式要使用 & ::v-deep .xxxx 来改变
@include b(footer) {
	// & ::v-deep .c-foot-nav__text {
	// 	height: 50px;
	// }
  & :deep(.c-foot-nav__text ) {
    height: 50px;
  }
}

@include b(promotion) {
  @include dimensions(82px);
  text-align: center;
  @include e(span) {
    padding-top: 50px;
  }
}
</style>