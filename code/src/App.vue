<template>
  <div id="app">
    <transition :name="transition">
      <keep-alive exclude="video_player">
        <router-view class="page" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transition: 'slide-left'
    }
  },
  methods: {
    switchSize () {
      var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      document.documentElement.style.fontSize = clientWidth / 7.5 + 'px'
    }
  },
  mounted () {
    this.switchSize()
    window.onresize = this.switchSize
    window.addEventListener('popstate', () => {
      this.$router.isBack = true
    })
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transition = 'slide-right'
      } else {
        this.transition = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style lang="scss" scoped>
  #app{
    height: 100%;
  }
  .page{
    overflow: auto;
    height: 100%;
  }
  .slide-right{
    &-enter{
      transform: translate3d(-20%, 0, 0);
    }
    &-enter-to{
      transform: translate3d(0, 0, 0);
    }
    &-leave-to{
      transform: translate3d(100%, 0, 0);
    }
    &-leave-active{
      width: 100%;
      position: absolute;
      top:0;
      z-index: 2;
      background: #fefefe;
    }
    &-enter-active, &-leave-active{
      transition: transform .5s;
    }
  }
  .slide-left{
    &-enter{
      transform: translate3d(100%, 0, 0);
    }
    &-leave-to{
      transform: translate3d(-20%, 0, 0);
    }
    &-enter-active{
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
      background: #fefefe;
    }
    &-enter-active, &-leave-active{
      transition: transform .5s;
    }
  }
</style>
