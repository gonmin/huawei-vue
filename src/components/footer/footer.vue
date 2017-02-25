<template>
  <div class="footer">
    <div class="promise">
      <div class="promise-wrapper clearfix">
        <div class="promise-cell qiye"><i></i>500强企业 品质保证 
        </div>
        <div class="promise-cell tuihuan">
          <i></i>7天退货15天换货
        </div>
        <div class="promise-cell yunfei">
          <i></i>99元起免运费
        </div>
        <div class="promise-cell weixiu">
          <i></i>448家维修网点 全国联保
        </div>
      </div>  
    </div>
    <div class="footer-links clearfix">
      <dl>
        <dt>帮助中心</dt>
        <dd><a href="">购物指南</a></dd>
        <dd><a href="">配送方式</a></dd>
        <dd><a href="">支付方式</a></dd>
        <dd><a href="">常见问题</a></dd>
      </dl>
      <dl>
        <dt>售后服务</dt>
        <dd><a href="">保修政策</a></dd>
        <dd><a href="">退换货政策</a></dd>
        <dd><a href="">退换货流程</a></dd>
        <dd><a href="">保修状态查询</a></dd>
      </dl>
      <dl>
        <dt>技术支持</dt>
        <dd><a href="">手机寄修服务</a></dd>
        <dd><a href="">维修配件价格查询</a></dd>
        <dd><a href="">预约维修</a></dd>
        <dd><a href="">售后网点</a></dd>
        <dd><a href="">荣耀零售店铺</a></dd>
      </dl>
      <dl>
        <dt>帮助中心</dt>
        <dd><a href="">购物指南</a></dd>
      </dl>
      <dl>
        <dt>帮助中心</dt>
        <dd><a href="">购物指南</a></dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer
    width: 1200px
    margin: 20px auto
    .promise
      width: 1200px
      padding: 18px 0
      border: 1px solid #ddd
      border-width: 1px 0
      .promise-wrapper
        width: 1215px
        .promise-cell
          line-height: 44px
          float: left
          width: 25%
          height: 44px
          padding: 0 15px
          font-size: 14px
          i
            float: left
            margin-right: 5px
            display: inline-block
            width: 44px
            height: 44px
            background-image: url(icon14.png)
            background-repeat: no-repeat
          &.qiye > i
            background-position: 0 0
          &.tuihuan > i
            background-position: -270px 0
          &.yunfei > i
            background-position: -108px 0
          &.weixiu > i
            background-position: -162px 0
    .footer-links
      padding-top: 40px
      dl
        float: left
        width: 20%
        padding-left: 35px
        dt
          margin-bottom: 4px
          font-size: 14px
        dd
          margin-bottom: 6px
  
</style>
