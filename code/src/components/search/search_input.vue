<template>
  <header>
    <div class="search-input">
      <span class="search-icon"></span>
      <input ref="search-input" type="text" placeholder="搜索视频、番剧、UP主或AV号"
        v-model.trim="search.input" @keyup="keyup($event)">
      <span class="search-close" v-show="!!search.input" @click="clear"></span>
    </div>
    <span class="cancel-btn" @click="back">取消</span>
  </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['search'])
  },
  methods: {
    ...mapMutations(['SET_SEARCH_RESULT', 'SET_SEARCH_INPUT', 'SET_SEARCH_VISIBLE']),
    ...mapActions(['SEARCH', 'GET_SEARCH_DATA']),
    back () {
      this.$router.isBack = true
      this.$router.go(-1)
    },
    clear () {
      this.SET_SEARCH_INPUT('')
      this.SET_SEARCH_RESULT([])
      this.SET_SEARCH_VISIBLE(true)
    },
    keyup (ev) {
      !this.search.input && this.clear()
      if (this.search.input && ev.which === 13) {
        this.$refs['search-input'].blur()
        this.SEARCH(this.search.input)
      }
    }
  },
  mounted () {
    let _this = this
    document.getElementById('search').addEventListener('scroll', function () {
      if (this.scrollTop + this.offsetHeight >= this.scrollHeight) {
        _this.search.input && _this.GET_SEARCH_DATA({
          keyword: _this.search.keyword,
          page: ++_this.search.page
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: .7rem;
    display: flex;
    padding: .1rem 0;
    position: fixed;
    top: 0;
    z-index: 99;
    background: #fff;
    .search-input{
      flex: 1;
      height: 100%;
      margin-left: .3rem;
      background: #eee;
      border-radius: .1rem;
      display: flex;
      align-items: center;
      .search-icon{
        width: .4rem;
        height: .4rem;
        display: block;
        background: url('../../assets/img/search.svg');
        margin: 0 .2rem;
      }
      .search-close{
        width: .4rem;
        height: .4rem;
        display: block;
        background: url('../../assets/img/search_close.png');
        background-size: contain;
        margin: 0 .2rem;
      }
      input{
        flex: 1;
        font-size: .9em;
        color: #505050;
        background: none;
        outline: none;
        border: none;
        &::-webkit-input-placeholder{
          color: #aaa;
        }
      }
    }
    .cancel-btn{
      width: 1rem;
      height: 100%;
      line-height: .7rem;
      text-align: center;
      color: #fb7299;
    }
  }
</style>
