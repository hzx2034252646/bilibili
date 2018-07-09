<template>
  <header>
    <div class="logo"></div>
    <div class="search" @click="search"></div>
    <div class="avatar" @click="space"></div>
  </header>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  methods: {
    search () {
      this.$router.push({ path: '/search' })
    },
    space () {
      this.$router.push({ path: '/space' })
    }
  }
}
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: .8rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 99;
    background: #fff;
    .logo{
      width: 1.3rem;
      height: .6rem;
      background: url('../assets/img/logo.svg') no-repeat;
      margin-left: .35rem;
    }
    .search{
      width: .5rem;
      height: .5rem;
      background: url('../assets/img/search.svg') no-repeat;
      margin-left: 4rem;
      margin-right: .5rem;
    }
    .avatar{
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      background: url('../assets/img/avatar.svg') no-repeat;
    }
  }
</style>
