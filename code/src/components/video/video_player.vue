<template>
  <div class="player">
    <div class="player-cover" v-if="visible">
      <img :src="video.pic | pic_filter" alt="">
      <div class="player-top" v-show="video.aid">
        av{{ video.aid }}
      </div>
      <div class="time">{{ video.duration | time_filter }}</div>
      <div class="play-icon" @click="play"></div>
    </div>
    <object :data="videoUrl" width="100%" height="100%" v-else >
      <embed :src="videoUrl" allowfullscreen="true" type="video/mp4"
      style="display:inline" width="100%" height="100%" />
    </object>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { formatTime } from '@/utils'
export default {
  data () {
    return {
      visible: true
    }
  },
  computed: {
    ...mapState(['video', 'part']),
    videoUrl () {
      return 'https://jx.99yyw.com/99/?url=https://www.bilibili.com/video/av' + this.video.aid + '?p=' + this.part
    }
  },
  filters: {
    pic_filter (value) {
      return value ? value + '@400w_300h.webp' : ''
    },
    time_filter (value) {
      return value ? formatTime(value) : '00:00:00'
    }
  },
  methods: {
    ...mapActions(['SET_PLAY_HISTORY']),
    play () {
      this.visible = false
      this.SET_PLAY_HISTORY(this.video)
    }
  },
  watch: {
    '$route' () {
      this.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .player{
    width: 100%;
    height: 4.68rem;
    margin-top: .8rem;
    .player-cover{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
        vertical-align: middle;
        filter: blur(.2rem);
      }
      .player-top{
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        background: linear-gradient(180deg,rgba(33,33,33,.5),rgba(33,33,33,0));
        color: #fff;
        text-align: center;
        position: absolute;
        top: 0;
      }
      .play-icon{
        width: .9rem;
        height: .9rem;
        background-image: url('../../assets/img/TV-Play.png');
        background-size: contain;
        position: absolute;
        bottom: .3rem;
        right: .3rem;
      }
      .time{
        color: #fff;
        line-height: .4rem;
        padding: 0 .15rem;
        border: .02rem solid rgba(255,255,255,.2);
        display: inline-block;
        border-radius: .05rem;
        background: rgba(255,255,255,.2);
        position: absolute;
        bottom: .4rem;
        left: .2rem;
        box-shadow: 0 0 .05rem #fff;
      }
    }
  }
</style>
