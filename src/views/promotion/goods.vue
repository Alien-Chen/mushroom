<template>
  <c-box-skin 
    v-for="(item, index) in list" 
    :key="index"
    mh12 mb9
    radius6
  >
    <c-single-center class="good">
      <c-magazine class="good__image" :image="item['image']" />
      <div class="good__desc" pv12 ph9>
        <p class="good__title">{{ item['title'] }}</p>
        <c-single-center>
          <div class="good__process" mr5></div>
          <span>剩余{{ item['progress'] }}件</span>
        </c-single-center>
        <c-single-center>
          <div 
            class="good__price"
            pb4 pt10
            fz20>
            <span fz13>¥ {{ item['price'] }}</span>
          </div>
          <span style="color: #999">¥ {{ item['oldprice'] }}</span>
          <c-box-center class="good__buy">
            立即购买
          </c-box-center>
        </c-single-center>
        <div>{{ item['tips'] }}</div>
      </div>
    </c-single-center>
  </c-box-skin>
</template>
<script>
export default {
  name:'CGoods',
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
@include b(good) {
  align-items: stretch;
  @include e(image) {
    @include dimensions(123px);
  }

  @include e(desc) {
    flex: 1;
  }

  @include e(progress) {
    @include dimensions(140px, 14px);
    border-radius: (28px/2);
    background-color: #ffd9de;
  }

  @include e(buy) {
    @include dimensions(91px, 27px);
    border-radius: (54px/2);
    background-color: #e95160;
  }

  @include e(price) {
    width: 125px;
    color: #ed2c48;
    span {
      color: #999;
    }
  }
}
</style>