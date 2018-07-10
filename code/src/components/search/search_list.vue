<template>
  <div class="search-list"  v-show="data && data.length>0">
    <div class="search-list-item" v-for="(item,index) in data" :key="index" @click="play(item.param)">
      <div class="cover">
        <img v-lazy="item.cover || item.pic + '@200w_125h.webp'" alt="">
      </div>
      <div class="wrapper">
        <div class="title">{{ item.title }}</div>
        <div class="user">
          <span class="icon"></span>
          <span class="text">{{ item.author || item.owner.name }}</span>
        </div>
        <div class="count">
          <div class="play">
            <span class="icon"></span>
            <span class="text">{{ (item.play || item.stat.view) | count_filter }}</span>
          </div>
          <div class="comment">
            <span class="icon"></span>
            <span class="text">{{ (item.danmaku || item.stat && item.stat.danmaku || 0) | count_filter }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      scrollTop: 0
    }
  },
  filters: {
    count_filter (value) {
      return value >= 10000 ? (value / 10000).toFixed(1) + '万' : value
    }
  },
  methods: {
    play (aid) {
      this.$router.push({ name: 'video', params: { aid } })
    }
  },
  activated () {
    let elem = document.getElementById('search')
    elem && (elem.scrollTop = this.scrollTop)
  },
  mounted () {
    let _this = this
    let elem = document.getElementById('search')
    elem && elem.addEventListener('scroll', function () {
      _this.scrollTop = this.scrollTop
    })
  }
}
</script>

<style lang="scss" scoped>
  .search-list{
    width: 100%;
    margin-top: 1.2rem;
    .search-list-item{
      padding: 0 .3rem;
      margin-bottom: .3rem;
      display: flex;
      .cover{
        width: 2.4rem;
        height: 1.5rem;
        overflow: hidden;
        position: relative;
        border-radius: .1rem;
        img{
          width: 100%;
        }
      }
      .wrapper{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: .2rem;
        color: #333;
        .title{
          line-height: 1.5em;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .text{
          font-size: .8em;
          color: #aaa;
          vertical-align: middle;
        }
        .icon{
          width: .3rem;
          height: .25rem;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: contain;
          vertical-align: middle;
        }
        .user{
          .icon{
            background-image: url('../../assets/img/ico_up.png');
          }
        }
        .count{
          display: flex;
          .play{
            .icon{
              background-image: url('../../assets/img/ico_play.png');
            }
          }
          .comment{
            margin-left: 1rem;
            .icon{
              background-image: url('../../assets/img/ico_comment.png');
            }
          }
        }
      }
    }
  }
</style>
