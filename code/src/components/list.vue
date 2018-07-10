<template>
  <div class="list-wrapper" :style="{'margin-top': tid == 0 ? '1.8rem':'2.4rem'}">
    <div class="list-item" v-for="(item,index) in data" :key="index"
      @click="play(item.aid)">
      <div class="list-cover">
        <img v-lazy="item.pic + '@320w_200h.webp'" alt="">
      </div>
      <div class="list-text">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['data'],
  computed: {
    ...mapState(['tid'])
  },
  methods: {
    play (aid) {
      this.$router.push({ name: 'video', params: { aid } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-wrapper{
    width: 100%;
    overflow: hidden;
    .list-item{
      width: 3.2rem;
      margin-top: .3rem;
      margin-left: .36rem;
      float: left;
      .list-cover{
        height: 2rem;
        border-radius: .1rem;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .list-text{
        margin-top: .1rem;
        line-height: 1.4em;
        height: 2.7em;
        overflow : hidden;
      }
    }
  }
</style>
