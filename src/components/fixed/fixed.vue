<template>
  <div class="fixed-service">
    <div class="fixed-service-content">
      <a href="javascript:;" class="iconfont feedback" title="意见反馈" @click="showAdvice=true">&#xe69e;</a>
      <a href="" class="iconfont servicer" title="在线客服">&#xe63e;</a>
    </div>
    <div class="alert-wrapper">
      <div class="alert-advice" v-show="showAdvice">
      </div>
      <div class="wrapper" v-show="showAdvice">
        <i class="iconfont close" @click="showAdvice=false">&#xe60e;</i>
        <form method="post" @submit.prevent="alertHello">
          <select class="form-select" v-model="selectedQuestion">
            <option>请选择疑问类型</option>
            <option>商品质量（手机、平板等软、硬件质量）</option>
            <option>商品缺货</option>
            <option>物流发货（发货快慢、发错货、送件人态度等）</option>
            <option>售后服务（服务网点、维修、退换货、客服）</option>
            <option>网站问题（商城功能失效、不好用等）</option>    
            <option>其他问题</option>   
          </select>
          <label class="your-advice">你的问题和建议</label>
          <textarea rows="5" v-model="yourAdvice"></textarea>
          <label class="contact">你的联系方式</label>
          <input type="text" class="input-contact">
          <input type="submit" class="submit" value="提交">
        </form>
      </div>
      
    </div>
  </div>

</template>

<script>

  export default {
    data: function() {
      return {
        showAdvice: false,
        yourAdvice: '',
        selectedQuestion: '请选择疑问类型'
      }
    },
    methods: {
      alertHello: function(event) {
        if (this.selectedQuestion === '请选择疑问类型') {
          alert('你还没选择类型呢')
          return
        }
        if (this.yourAdvice === '') {
          alert('你的建议是不能为空的')
          return
        }
        window.location.href = 'http://cn.vuejs.org/v2/guide/forms.html'
      }      
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .fixed-service
    position: fixed
    bottom: 30px
    left: 50%
    z-index: 99
    margin-left: 620px
    width: 48px
    height: 113px
    background-color: #4c4c4c
    border-radius: 28px
    .fixed-service-content
      margin: 15px auto
      line-height: 1
      width: 28px
      .feedback
        display: block
        padding-bottom: 10px
        border-bottom: 1px solid #999
        font-size: 30px
        color: #999
      .servicer
        display: block
        margin-top: 10px
        font-size: 30px
        color: #999
    .alert-wrapper
      .alert-advice
        position: fixed
        top: 0
        left:0
        z-index: 100
        width: 100%
        height: 100%
        background: rgb(0,0,0)
        opacity: 0.4
      .wrapper
        position: fixed
        left: 50%
        top: 50%
        margin-left: -300px
        margin-top: -180px
        z-index: 300
        width: 600px
        height: 365px
        background: #fff
        border: 1px solid #ddd
        .close
          position: absolute
          top: 10px
          right: 10px
          cursor: pointer
        form
          display: block
          width: 560px
          margin: 10px auto
          .form-select
            display: block
            margin-bottom: 10px
          .your-advice
            display: block
            margin-bottom: 10px
          textarea
            width: 100%
          .contact
            display: block
            margin:10px 0
          .input-contact
            display: block
            width: 100%
            border: 1px solid #ddd
            padding: 5px
            margin-bottom: 10px
          .submit
            font-size: 16px
</style>

