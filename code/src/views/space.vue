<template>
  <div id="space">
    <Header />
    <div class="bg-cover">
      <img src="@/assets/img/bannerTop.png" alt="">
      <p>
        <span>历史记录</span>
        <span class="clearHistory" @click="clearHistory">全部清空</span>
      </p>
    </div>
    <div class="noContent" v-if="play_history.length==0" v-cloak>
      <img src="@/assets/img/noContent.png" alt="">
      <p>暂无历史记录</p>
    </div>
    <div class="list" v-else>
      <div v-for="(value,index) in data" :key="index">
        <p v-if="value.list.length>0">{{ value.order }}</p>
        <div class="list-item" v-for="(item,index) in value.list" :key="index" @click="play(item.aid)">
          <div class="cover">
            <img :src="item.pic" alt="">
          </div>
          <div class="wrapper">
            <div class="title">{{ item.title }}</div>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '@/components/header'
import { formatDate } from '@/utils'
export default {
  components: {
    Header
  },
  data () {
    return {
      data: []
    }
  },
  computed: {
    ...mapState(['play_history'])
  },
  created () {
    this.SET_PLAY_HISTORY(JSON.parse(localStorage.getItem('play_history')) || [])
  },
  activated () {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let date = new Date()
    let today = formatDate(date.getTime() / 1000)
    date.setDate(date.getDate() - 1)
    let yesterday = formatDate(date.getTime() / 1000)
    this.play_history.forEach(item => {
      if (formatDate(item.time / 1000) === today) {
        arr1.push({
          title: item.title,
          aid: item.aid,
          pic: item.pic + '@200w_125h.webp',
          date: '今天' + ' ' + new Date(item.time).toTimeString().slice(0, 5)
        })
      } else if (formatDate(item.time / 1000) === yesterday) {
        arr2.push({
          title: item.title,
          aid: item.aid,
          pic: item.pic + '@200w_125h.webp',
          date: '昨天' + ' ' + new Date(item.time).toTimeString().slice(0, 5)
        })
      } else {
        arr3.push({
          title: item.title,
          aid: item.aid,
          pic: item.pic + '@200w_125h.webp',
          date: formatDate(item.time / 1000) + ' ' + new Date(item.time).toTimeString().slice(0, 5)
        })
      }
    })
    this.data = [
      { order: '今天', list: arr1 },
      { order: '昨天', list: arr2 },
      { order: '更早', list: arr3 }
    ]
  },
  methods: {
    ...mapMutations(['SET_PLAY_HISTORY']),
    play (aid) {
      this.$router.push({ name: 'video', params: { aid } })
    },
    clearHistory () {
      localStorage.removeItem('play_history')
      this.SET_PLAY_HISTORY([])
    }
  }
}
</script>

<style lang="scss" scoped>
  #space{
    .bg-cover{
      width: 100%;
      margin-top: .8rem;
      img{
        width: 100%;
      }
      p{
        color: #fb7299;
        padding: .2rem .3rem;
        border-bottom: .02rem solid #eee;
        .clearHistory{
          float: right;
        }
      }
    }
    .noContent{
      img{
        width: 80%;
        display: block;
        margin: .5rem auto;
      }
      p{
        text-align: center;
        font-size: 1.2em;
        color: #999;
      }
    }
    .list{
      width: 100%;
      p{
        color: #aaa;
        margin: .3rem;
      }
      .list-item{
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
          padding-left: .2rem;
          color: #333;
          position: relative;
          .title{
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .date{
            color: #999;
            font-size: .8em;
            position: absolute;
            bottom: 0;
            left: .2rem;
          }
        }
      }
    }
  }
</style>
