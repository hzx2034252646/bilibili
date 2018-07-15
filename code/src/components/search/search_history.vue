<template>
  <div class="search-history" v-if="search.visible" v-show="search.history.length>0">
    <p>历史搜索</p>
    <div class="search-history-item" v-for="(item,index) in search.history" :key="index" @click="SEARCH(item)">
      <span class="clock-icon"></span>
      <span>{{ item }}</span>
    </div>
    <p class="clearHistory" @click="clearHistory">清除历史纪录</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['search'])
  },
  methods: {
    ...mapMutations(['SET_SEARCH_HISTORY']),
    ...mapActions(['SEARCH']),
    clearHistory () {
      localStorage.removeItem('search')
      this.SET_SEARCH_HISTORY([])
    }
  },
  mounted () {
    this.SET_SEARCH_HISTORY(JSON.parse(localStorage.getItem('search')) || [])
  }
}
</script>

<style lang="scss" scoped>
  .search-history{
    margin-top: .5rem;
    padding-left: .3rem;
    padding-right: .3rem;
    p{
      color: #aaa;
      margin-bottom: .4rem;
    }
    .search-history-item{
      margin-bottom: .2rem;
      padding-bottom: .2rem;
      border-bottom: 1px solid #eee;
      .clock-icon{
        width: .3rem;
        height: .3rem;
        display: inline-block;
        background: url('../../assets/img/history.png') no-repeat;
        background-size: contain;
        margin-right: .05rem;
      }
      span{
        vertical-align: middle;
        color: #505050;
      }
    }
    .clearHistory{
      padding: .1rem 0;
      text-align: center;
      color: #aaa;
    }
  }
</style>
