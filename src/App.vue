<template>
  <div id="app">
    <div class="product-lists">
      <ul class="product-wrapper clearfix">
        <li class="product-cell" v-for="item in firstPage">
          <div class="product-cell-main">
            <a class="product-img" :href="item.product_id" :title="item.mobile_name"><img :src="item.img_url" :alt="item.mobile_name"></a>
            <a class="product-name" :href="item.product_id" :title="item.mobile_name">{{item.mobile_name}}</a>
            <p class="price">￥{{item.price}}</p>
            <div class="buy-action">
              <a :href="item.mobile_name">{{item.buy_state}}</a>
              <span>{{item.comment_num}}人评价</span>
            </div>
            <div class="product-state" :class="productState[item.product_state.type]">{{item.product_state.text}}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <a href="javascript:;">首页</a>
      <a href="javascript:;" v-for="n in calcPageNum" @click="startIndex=(n-1)*10">{{ n }}</a>
      <a href="javascript:;">尾页</a>
    </div>
    <h-footer></h-footer>
    <h-fixed></h-fixed>
    
  </div>
</template>

<script>
  import footer from './components/footer/footer'
  import fixed from './components/fixed/fixed'
  const resultMessage = 'success'

  export default {
    name: 'app',
    data: function() {
      return {
       mobileLists: [],
       productState: ['shoufa', 'tehui', 'xinpin'],
       pageNum: 0,
       startIndex: 0
      }
    },
    computed: {
      firstPage: function() {
        return this.mobileLists.slice(this.startIndex, this.startIndex + 10)
      },
      calcPageNum: function() {
        return Math.ceil(this.mobileLists.length / 10)
      }
    },
    created() {
      this.$http.get('/api/mobile').then((response) => {
        response = response.body
        if (response.resultMessage === resultMessage) {
          this.mobileLists = response.data
        }
      })
    },
    methods: {
      
    },
    components: {
      'h-footer': footer,
      'h-fixed': fixed
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .product-lists
      margin: 10px auto
      width: 1200px
      .product-wrapper
        width: 1220px
        .product-cell
          float: left
          width: 20%
          .product-cell-main
            position: relative
            margin-right: 20px
            margin-bottom: 20px
            border: 1px solid #ddd
            .product-img
              display: block
              margin: 30px auto 10px
              width: 180px
              padding: 0 13px
              img
                display: block
                width: 180px
                height: 180px
            .product-name 
              display: inline-block
              line-height: 1.5
              padding: 0 13px
            .price
              margin-top: 8px
              margin-bottom: 8px
              text-align: center
              font-size: 20px
              padding: 0 13px
              color: red
            .buy-action
              height: 30px
              line-height: 30px
              border-top: 1px solid #ddd
              a
                display: inline-block
                width: 49%
                border-right: 1px solid #ddd
                text-align: center
              span
                display: inline-block
                width: 49%
                text-align: center
            .product-state
              position: absolute
              top: 0
              left: 50%
              width: 70px
              margin-left: -35px
              height: 15px
              line-height: 15px
              text-align: center
              &.shoufa
                background: #fc3884
              &.tehui
                background: #01abdf
              &.xinpin
                background: #24ca44
    .pagination
      margin: 10px auto
      width: 1200px
      font-size: 0
      a
        margin-right: 4px
        display: inline-block
        padding: 8px 11px
        border: 1px solid #ddd
        font-size: 14px

</style>

