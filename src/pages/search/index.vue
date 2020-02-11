<template>
  <div id="searchContainer">
    <div class="header">
      <input @confirm="handleConfirm" v-model="searchContent" placeholder-class="placeholder"	  type="text" placeholder="书中自有黄金屋">
      <span class="clear" @click="handleClear" v-show="searchContent">X</span>
    </div>
    <div v-if="booksList.length">
      <BooksList :booksList="booksList"/>
    </div>
  </div>
</template>

<script>
  import request from '../../utils/request'
  import BooksList from '../booksList/index'
  export default {
    components: {
      BooksList
    },
    data(){
      return {
        searchContent: '',
        booksList: []
      }
    },
    methods: {
      handleClear(){
        console.log('clear');
        this.searchContent = ''
      },
      async handleConfirm(){
        // console.log('用户点击了确认按钮');
        // 1. 收集表单相用户输入数据
        // this.searchContent
        let data = {
          req: this.searchContent
        }
        // 2. 发送请求获取对应的数据: wx.request
        let result = await request('/searchBooks', data)
        console.log('result: ', result);
        this.booksList = result.data
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
