<template>
  <div class="alert-wrapper">
    <div class="alert-advice" v-show="showAdvice">
    </div>
    <div class="wrapper" v-show="showAdvice">
      <i class="iconfont close" @click="changeAdvice">&#xe60e;</i>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    showAdvice: {
      type: Boolean
    }
  },
  methods: {
    changeAdvice: function() {
      this.showAdvice = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
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


</style>

