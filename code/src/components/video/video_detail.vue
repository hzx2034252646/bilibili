<template>
  <div class="video_detail" v-show="video.aid">
    <div class="title">
      <p>{{ video.title }}</p>
      <div class="icon">
        <span :class="['arrow', { 'rotate': visible }]" @click="visible=!visible"></span>
      </div>
    </div>
    <div class="info">
      <span>{{ video.owner ? video.owner.name : '' }}</span>
      <span>{{ (video.stat ? video.stat.view : 0) | count_filter }}次观看</span>
      <span>{{ (video.stat ? video.stat.danmaku : 0) | count_filter }}弹幕</span>
      <span>{{ video.pubdate | date_filter }}</span>
    </div>
    <div class="desc" :style="{'max-height': visible ? '10rem':'0'}">
      <div class="tip">
        <span class="forbid-icon"></span>
        <span>未经作者授权禁止转载</span>
      </div>
      <p v-html="desc"></p>
      <div class="nav">
        <span class="nav-item">主页</span>
        <span class="nav-item">{{ video.tid | type_filter }}</span>
        <span class="nav-item">{{ video.tname }}</span>
        <span>av{{ video.aid }}</span>
      </div>
      <div class="tag-list">
        <span class="tag-item" v-for="(item,index) in video.tag" :key="index">
          {{ item.tag_name  }}
        </span>
      </div>
    </div>
    <div class="part-list-wrapper" v-if="video.videos>1" v-cloak>
      <div class="part-list" ref="part-list">
        <div :class="['part-list-item', {'part-active': item.page == part }]"
        v-for="(item,index) in video.pages" :key="index" @click="play(item.page)">
          <p>{{ item.part }}</p>
        </div>
      </div>
      <div class="icon" @click="popupVisible=true">
        <span class="arrow"></span>
      </div>
    </div>
    <div class="part-popup-wrapper" v-if="video.videos>1" v-show="popupVisible" @click.self="popupVisible=false" v-cloak>
      <div class="part-popup">
        <div class="top">
          <span>分集 ({{ video.videos }})</span>
          <span class="close-icon" @click="popupVisible=false"></span>
        </div>
        <div class="container">
          <div class="part-list">
            <div :class="['part-list-item', {'part-active': item.page == part }]"
            v-for="(item,index) in video.pages" :key="index" @click="play(item.page)">
              <p>{{ item.part }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { formatDate } from '@/utils'
import typeJSON from '@/api/getJSON'
export default {
  data () {
    return {
      visible: false,
      popupVisible: false
    }
  },
  computed: {
    ...mapState(['video', 'part']),
    desc () {
      return this.video.desc ? this.video.desc.replace(/\n/g, '<br>') : ''
    }
  },
  filters: {
    count_filter (value) {
      return value >= 10000 ? (value / 10000).toFixed(1) + '万' : value
    },
    date_filter (value) {
      return value ? formatDate(value) : ''
    },
    type_filter (value) {
      let json = typeJSON.find(item1 => item1.sub.findIndex(item2 => item2.tid === value) > -1) || {}
      return json.typename
    }
  },
  methods: {
    ...mapMutations(['SET_PART']),
    play (page) {
      this.SET_PART(page)
      if (this.popupVisible) {
        this.popupVisible = false
        let elem = this.$refs['part-list'].getElementsByClassName('part-list-item')
        this.$refs['part-list'].scrollLeft = elem[page - 1].offsetLeft - elem[0].offsetLeft
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .video_detail{
    width: 100%;
    margin-top: .3rem;
    .icon{
      width: .6rem;
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      padding: 0 .1rem;
      span{
        width: .35rem;
        height: .35rem;
        display: inline-block;
        transition: all .1s;
        &.arrow{
          background: url('../../assets/img/arrow_down.svg');
        }
        &.rotate{
          transform: rotate(180deg);
        }
      }
    }
    .title{
      display: flex;
      p{
        flex: 1;
        font-size: 1.2em;
        color: #333;
        margin-left: .2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .info{
      font-size: .9em;
      color: #aaa;
      span{
        margin-right: .1rem;
        vertical-align: middle;
        &:nth-child(1){
          color: #333;
          margin: 0 .2rem;
        }
      }
    }
    .desc{
      font-size: .9em;
      overflow: hidden;
      color: #aaa;
      transition: all .5s ease;
      transform: translate3d(0, 0, 0);
      .tip{
        margin-top: .2rem;
        padding: 0 .2rem;
        span{
          vertical-align: middle;
        }
        .forbid-icon{
          width: .3rem;
          height: .3rem;
          display: inline-block;
          background: url('../../assets/img/forbid.svg');
        }
      }
      .nav{
        padding: .1rem .2rem;
        .nav-item{
          color: #fb7299;
          &:after{
            content: '>';
            margin: 0 .1rem;
            color: #ccc;
          }
        }
      }
      p{
        padding: .1rem .2rem;
        line-height: 2em;
      }
      .tag-list{
        margin-top: .2rem;
        .tag-item{
          padding: .15rem .3rem;
          background: #f4f4f4;
          color: #505050;
          border-radius: 99px;
          display: inline-block;
          margin-left: .3rem;
          margin-bottom: .2rem;
        }
      }
    }
    .part-list-wrapper{
      display: flex;
      align-items: center;
      margin: .5rem 0;
    }
    .part-list{
      flex: 1;
      display: -webkit-box;
      overflow-x: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      .part-list-item{
        width: 2.3rem;
        height: 1rem;
        border: .02rem solid #ccc;
        font-size: .9em;
        color: #333;
        padding: 0 .2rem;
        margin-left: .2rem;
        border-radius: .1rem;
        display: flex;
        align-items: center;
        p{
          line-height: 1.5em;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        &.part-active{
          border: .02rem solid #fb7299;
          color: #fb7299;
        }
      }
    }
    .part-popup-wrapper{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
      position: absolute;
      top: 0;
      z-index: 100;
    }
    .part-popup{
      width: 100%;
      height: 50%;
      background: #fff;
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      .top{
        height: .9rem;
        line-height: .9rem;
        font-size: 1.2em;
        padding-left: .3rem;
        .close-icon{
          width: .45rem;
          height: .45rem;
          background: url('../../assets/img/ico_close.png') no-repeat;
          background-size: contain;
          float: right;
          margin-right: .3rem;
          margin-top: .25rem;
        }
      }
      .container{
        flex: 1;
        overflow: auto;
        .part-list{
          display: block;
          .part-list-item{
            float: left;
            width: 2.7rem;
            height: 1.2rem;
            margin-left: .4rem;
            margin-bottom: .4rem;
          }
        }
      }
    }
  }
</style>
