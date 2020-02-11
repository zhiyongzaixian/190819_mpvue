<template>
  <div id="personalContainer">
    <div class="header">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button @getuserinfo="handleGetUserInfo" open-type="getUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        userInfo: {}
      }
    },
    mounted(){
      // 获取用户信息
      wx.getUserInfo({
        success: (msg) => {
          console.log(msg);
          this.userInfo = msg.userInfo
        },
        fail: () => {
          console.log('获取失败');
        }
      })
    },
    methods: {
      handleGetUserInfo(msg){
        console.log(msg);
        if(msg.mp.detail.userInfo){
          this.userInfo = msg.mp.detail.userInfo
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      background #02a774
      padding 40rpx 0
      img
        width 100rpx
        height 100rpx
        border-radius 50rpx
        vertical-align middle
        margin 0 20rpx 0 40rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        vertical-align middle
        text-align center
        background rgba(0, 0, 0, .4)
        font-size 26rpx
        color white
        max-width 300rpx
</style>
