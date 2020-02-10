<template>
  <div id="booksContainer">
    <swiper indicator-dots indicator-color="green" indicator-active-color="pink">
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
    <div class="listContainer">
      <div class="nav">
        <span>全部商品</span>
        <span class="more"> > </span>
      </div>
      <ul class="list">
        <li class="listItem" v-for="(bookItem, index) in booksList" :key="index">
          <img :src="bookItem.image" alt="">
          <p>《{{bookItem.title}}》</p>
          <p>{{bookItem.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import booksList from './datas/data.json'
  export default {
    data(){
      return {
        booksList: []
      }
    },
    mounted(){
      this.booksList = booksList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .listContainer
      .nav
        padding 10rpx
        .more
          float right
      .list
        display flex
        flex-wrap wrap
        .listItem
          width 50%
          display flex
          align-items center
          flex-direction column
          border-bottom 1rpx solid #eee
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
            box-sizing border-box
          img
            width 200rpx
            height 200rpx
            margin-top 20rpx
          p
            line-height 60rpx
            font-size 26rpx
</style>
