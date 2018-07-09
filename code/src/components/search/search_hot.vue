<template>
  <div class="search-hot" v-if="search.visible" v-cloak>
    <p>大家都在搜</p>
    <div class="search-hot-list">
      <span class="search-hot-item" v-for="(item,index) in data" :key="index" @click="SEARCH(item.keyword)">
        {{ item.keyword }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      data: []
    }
  },
  computed: {
    ...mapState(['search'])
  },
  created () {
    this.$http.get('/', {
      params: {
        get: 'search',
        type: 'hot',
        limit: 10
      }
    }).then(res => {
      this.data = res.data.data.list
    })
  },
  methods: {
    ...mapActions(['SEARCH'])
  }
}
</script>

<style lang="scss" scoped>
  .search-hot{
    margin-top: 1.2rem;
    p{
      color: #aaa;
      margin-bottom: .2rem;
      padding-left: .3rem;
    }
    .search-hot-list{
      .search-hot-item{
        display: inline-block;
        padding: .1rem .2rem;
        margin-left: .15rem;
        margin-bottom: .2rem;
        border: 1px solid #ccc;
        border-radius: 99px;
        color: #505050;
      }
    }
  }
</style>
