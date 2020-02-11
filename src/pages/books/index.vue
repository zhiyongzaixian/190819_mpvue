<template>
  <div id="booksContainer">
    <swiper indicator-dots indicator-color="green" indicator-active-color="pink">
      <!--<swiper-item v-for="(item, index) in booksList.splice(0, 4)" :key="index">-->
      <swiper-item v-for="(item, index) in newBooksList" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="listContainer">
      <div class="nav">
        <span>全部商品</span>
        <span @click="toBooksList" class="more"> > </span>
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
    },
    computed: {
      newBooksList(){
        console.log(...this.booksList);
        // return [...this.booksList].splice(0, 4)
        return JSON.parse(JSON.stringify(this.booksList)).splice(0, 4)
      }
    },
    methods: {
      toBooksList(){
        // 跳转至booksList
        wx.navigateTo({
          // url: '/pages/booksList/main?booksList=' + this.booksList
          url: `/pages/booksList/main?booksList=${JSON.stringify(this.booksList)}`
        })
      }
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
