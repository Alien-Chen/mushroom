<template>
  <div class="animation">
    <div class="ground">
      <img class="ground__sky" src="../../assets/sky.png" />
      <img class="ground__grass" src="../../assets/grass.png" />
    </div>
    <div class="top">
      <img class="top__father" src="../../assets/father.png" />
      <p class="top__p1">父亲您辛苦了节日快乐</p>
      <p class="top__p2">父爱如山且伟大</p>
      <p class="top__p3">蘑菇街为父亲准备了好礼物</p>
      <img class="top__people" src="../../assets/people.png" />
    </div>
    <div class="snow snow--pos1" circle></div>
    <div class="snow snow--pos2" circle></div>
    <div class="snow snow--pos3" circle></div>
    <div class="snow snow--pos4" circle></div>
    <div class="snow snow--pos5" circle></div>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
@include b(animation) {
  height: 100vh;
  background: rgb(149 217 215);
}

@include b(ground) {
  @include position(absolute, top 0 left 0 right 0 bottom 0);
  overflow: hidden;
  @include e(sky) {
    @include position(absolute, top 0 left 0);
    animation: puffln 1.2s ease 0.3s 1 both;
  }
  @include e(grass) {
    @include position(absolute, bottom -180px left -50px);
    width: 475px;
    animation: fadeInUp 1.2s ease 0.3s 1 both;
  }
}

@include b(top) {
  @include position(absolute, top 0 left 0 right 0 bottom 0);
  display: flex;
  flex-direction: column;
  align-items: center;

  @include e(father) {
    width: 330px;
    margin-top: 80px;
    animation: rotate 1.2s ease 0.3s 1 both;
  }

  p {
    margin-top: 6px;
    color: #339999;
    font-size: 14px;
  }

  @include e(people) {
    width: 364px;
    margin-top: 26px;
    transform: rotateZ(0deg);
    animation: tempKeyframesForMotion0 8s linear 1.5s infinite both;
  }

  @include e(p1) {
    margin-top: 20px !important;
    font-weight: 700;
    animation: fadeInDown 1.2s ease 0.3s 1 both;
  }
  @include e(p2) {
    animation: fadeInUp 1.2s ease 0.3s 1 both;
  }

  @include e(p3) {
    animation: fadeInLeft 1.2s ease 0.3s 1 both;
  }
}

@include b(snow) {
  @include dimensions(10px);
  background: rgba(255, 255, 255, .4);
  border: 1px solid #eee;

  @include m(pos1) {
    @include position(absolute, top 0 left 10px);
    animation: snowflake 2.8s linear 1.5s infinite both;
  }

  @include m(pos2) {
    @include position(absolute, top -20px left 100px);
    animation: snowflake 3.2s linear 1.8s infinite both;
  }

  @include m(pos3) {
    @include position(absolute, top -20px left 190px);
    animation: snowflake 2.5s linear 2s infinite both;
  }

  @include m(pos4) {
    @include position(absolute, top -20px left 260px);
    animation: snowflake 3s linear 1.5s infinite both;
  }

  @include m(pos5) {
    @include position(absolute, top -20px left 320px);
    animation: snowflake 2.2s linear 1.8s infinite both;
  }
}

@keyframes puffln {
  0% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  20% {
    transform: perspective(400px) rotateY(-20deg);
    opacity: 0.5;
  }
  40% {
    transform: perspective(400px) rotateY(10deg);
    opacity: 1;
  }
  60% {
     transform: perspective(400px) rotateY(-5deg);
  }
  100% {
     transform: perspective(400px);
  }
}

@keyframes tempKeyframesForMotion0 {
  0% {
    transform: translateX(0px);
  }
  22% {
    transform: translateX(133px);
  }
  75% {
    transform: translateX(-158px);
  }
  100% {
    transform: translateX(1px);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes snowflake{
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(0, 100vh);
  }
}

</style>