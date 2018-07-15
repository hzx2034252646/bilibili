<template>
  <nav>
    <ul class="nav-list" @click="switchType($event)">
      <li :class="['nav-item',{'nav-active': item.tid == tid }]"
        v-for="(item,index) in type" :key="index">
        <span :data-tid="item.tid">{{ item.typename }}</span>
      </li>
      <li class="arrow-down" @click="visible=true">
        <span class="arrow-down-icon"></span>
      </li>
    </ul>
    <ul :class="['nav-list', visible ? 'slide-down': 'slide-up']" @click="switchType($event)">
      <li :class="['nav-item',{'nav-active': item.tid == tid }]"
        v-for="(item,index) in type_all" :key="index">
        <span :data-tid="item.tid">{{ item.typename }}</span>
      </li>
      <li class="arrow-up" @click="visible=false">
        <span class="arrow-up-icon"></span>
      </li>
    </ul>
    <ul class="nav-sub-list" v-show="type_active.sub.length > 0" @click="switchSubType($event)">
      <li :class="['nav-sub-item', { 'sub-active': item.tid == sub_tid }]"
        :data-tid="item.tid" v-for="(item,index) in type_active.sub" :key="index">
        {{ item.typename }}
      </li>
    </ul>
  </nav>
</template>

<script>
import typeAll from '@/api/getJSON'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      tid: 0,
      sub_tid: 0,
      visible: false,
      type: [],
      type_all: typeAll
    }
  },
  computed: {
    type_active () {
      return this.type_all.find(item => item.tid === this.tid)
    }
  },
  created () {
    this.type = this.type_all.slice(0, 5)
  },
  methods: {
    ...mapMutations(['SET_TID']),
    switchType (ev) {
      let elem = ev.target
      if (!elem.className) {
        this.tid = Number(elem.getAttribute('data-tid'))
        this.SET_TID(this.tid)
        this.sub_tid = this.tid
        this.visible && (this.visible = false)
        let index = this.type_all.findIndex(item => item.tid === this.tid)
        let len = this.type_all.length
        if (index < 5) {
          this.type = this.type_all.slice(0, 5)
        } else if (index > len - 3) {
          this.type = this.type_all.slice(len - 5)
        } else {
          this.type = this.type_all.slice(index - 2, index + 3)
        }
      }
    },
    switchSubType (ev) {
      let elem = ev.target
      this.sub_tid = Number(elem.getAttribute('data-tid'))
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    padding: .2rem 0;
    position: fixed;
    top: .8rem;
    background: #fff;
    .nav-list{
      display: flex;
      flex-wrap: wrap;
      .nav-item{
        width: 1.4rem;
        text-align: center;
        padding: .2rem 0;
        span{
          padding: .1rem;
          color: #757575;
        }
      }
      .arrow-down{
        width: .5rem;
        display: flex;
        align-items: center;
        .arrow-down-icon{
          width: .3rem;
          height: .3rem;
          display: inline-block;
          background: url('../assets/img/arrow_down.svg') no-repeat;
        }
      }
      .arrow-up{
        width: 100%;
        text-align: center;
        .arrow-up-icon{
          width: .3rem;
          height: .3rem;
          display: inline-block;
          background: url('../assets/img/arrow_up.svg') no-repeat;
        }
      }
      + .nav-list{
        background: #fff;
        position: absolute;
        top: 0;
        transition: transform 0.6s;
        transform: translate3d(0,-200%,0);
        .nav-item{
          width: 1.24rem;
          padding: .3rem 0;
        }
      }
    }
    .nav-sub-list{
      display: -webkit-box;
      overflow-x: auto;
      .nav-sub-item{
        padding: .2rem .4rem;
        text-align: center;
        color: #757575;
      }
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }
  .nav-active{
    span{
      border-bottom: 2px solid #fb7299;
      color: #fb7299 !important;
    }
  }
  .sub-active{
    color: #fb7299 !important;
  }
  .slide-down{
    transform: translate3d(0,0,0) !important;
  }
  .slide-up{
    transform: translate3d(0,-200%,0) !important;
  }
</style>
