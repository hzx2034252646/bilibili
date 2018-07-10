<template>
  <div id="video">
    <Header />
    <video-player />
    <video-detail />
    <search-list :data="video.relates" />
    <video-comment :data="comment"/>
  </div>
</template>

<script>
import Header from '@/components/header'
import VideoPlayer from '@/components/video/video_player'
import VideoDetail from '@/components/video/video_detail'
import searchList from '@/components/search/search_list'
import VideoComment from '@/components/video/video_comment'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'video_player',
  components: {
    Header,
    VideoPlayer,
    VideoDetail,
    searchList,
    VideoComment
  },
  computed: {
    ...mapState(['video', 'comment'])
  },
  mounted () {
    this.loadData()
  },
  methods: {
    ...mapMutations(['SET_VIDEO', 'SET_PART', 'SET_COMMENT']),
    loadData () {
      this.SET_VIDEO({})
      this.SET_COMMENT({})
      this.SET_PART(1)
      this.$http.get('/', {
        params: {
          get: 'playurl',
          aid: this.$route.params.aid
        }
      }).then(res => {
        this.SET_VIDEO(res.data.data)
        this.$http.get('/', {
          params: {
            get: 'comments',
            aid: this.$route.params.aid,
            sort: 2
          }
        }).then(res => {
          this.SET_COMMENT(res.data.data)
        })
      })
    }
  },
  watch: {
    '$route': 'loadData'
  }
}
</script>
