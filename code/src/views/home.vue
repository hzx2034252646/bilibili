<template>
  <div id="home">
    <Header></Header>
    <Nav></Nav>
    <List :data="data"></List>
  </div>
</template>

<script>
import Header from '@/components/header'
import Nav from '@/components/nav'
import List from '@/components/list'
import { mapMutations } from 'vuex'
export default {
  components: {
    Header,
    Nav,
    List
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.SET_TID(0)
    this.$http.get('/', {
      params: {
        get: 'recommend'
      }
    }).then(res => {
      this.data = res.data.list
    })
  },
  methods: {
    ...mapMutations(['SET_TID'])
  }
}
</script>
