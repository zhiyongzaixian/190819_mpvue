<template>
  <div id="searchContainer">
    <div class="header">
      <input v-model="searchContent" placeholder-class="placeholder"	  type="text" placeholder="书中自有黄金屋">
      <span class="clear" @click="handleClear" v-show="searchContent">X</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        searchContent: ''
      }
    },
    methods: {
      handleClear(){
        console.log('clear');
        this.searchContent = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .header
      width 80%
      height 80rpx
      margin 10rpx auto
      border-bottom 1rpx solid #02a774
      position relative
      input
        height 100%
        width 100%
        .placeholder
          font-size 28rpx
          color #02a774
          text-align center
      .clear
        font-size 28rpx
        position absolute
        line-height 80rpx
        vertical-align middle
        right 10rpx
        top 0
        z-index 99
</style>
