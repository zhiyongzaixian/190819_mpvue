
<script>
  import request from './utils/request'
  export default {
    mounted(){
      // 通过wx.login 获取用户的临时凭证
      wx.login({
        success: async (msg) => {
          // console.log('msg: ', msg);
          let code = msg.code

          // 发请求携带code
          let result = await request('/getOpenId', {code})
          console.log(result);
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    width 100%
    height 100%
</style>
