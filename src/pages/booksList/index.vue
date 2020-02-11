<template>
  <div>
    <div class="bookListContainer" v-for="(bookItem, index) in  booksList">
      <img :src="bookItem.image" alt="">
      <div class="bookInfo">
        <p class="bookName">{{bookItem.title}}</p>
        <p class="bookAuthor">作者: {{bookItem.author}}</p>
        <p class="bookPublisher">出版社: {{bookItem.publisher}}</p>
      </div>
      <div class="bookPrice">{{bookItem.price}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        booksList: []
      }
    },
    // Mpvue中即支持Vue的生命周期函数同时支持原生小程序的生命周期函数， 但是能不用就不使用原生的
    onLoad(options){
      //console.log('onLoad()');
      // console.log(options);
    },
    mounted(){
      //console.log('mounted()');
      //console.log(this); // this是当前Vue组件的实例
      this.booksList = JSON.parse(this.$mp.query.booksList)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bookListContainer
    display flex
    padding 10rpx
    border-bottom 1rpx solid #eee
    img
      width 140rpx
      height 140rpx
    .bookInfo
      margin-left 20rpx
      width 70%
      p
        font-size 30rpx
        line-height 50rpx
    .bookPrice
      font-size 36rpx
      font-weight bold
      color red
</style>
