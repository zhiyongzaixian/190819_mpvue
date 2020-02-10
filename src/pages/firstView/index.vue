<template>
  <div id="firstViewContainer">
    <swiper @change="handleChange" :indicator-dots="index !== 3" indicator-color="green" indicator-active-color="pink">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toBooks" class="btn" v-show="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 0, // 默认的current
      }
    },
    methods: {
      handleChange(event){
        console.log(event); // event是Vue的事件对象
        // 更新swiper的current下标
        this.index = event.mp.detail.current
      },
      toBooks(){
        wx.switchTab({
          url: '/pages/books/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #firstViewContainer
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      width 300rpx
      height 80rpx
      text-align center
      line-height 80rpx
      position absolute
      bottom 20rpx
      left 50%
      margin-left -150rpx
      background rgba(255,255,255, .6)
</style>
