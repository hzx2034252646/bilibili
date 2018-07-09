<template>
  <div class="comment" v-if="data.replies" v-cloak>
    <div class="top">
      <span>评论（{{ data.page.count }}）</span>
    </div>
    <div class="comment-list">
      <div class="comment-list-item" v-for="(item,index) in data.replies" :key="index">
        <div class="avatar">
          <img v-lazy="item.member.avatar+'@60w_60h.webp'" alt="">
        </div>
        <div class="wrapper">
          <p class="user">{{ item.member.uname }}</p>
          <span class="date">{{ item.ctime | date_filter }}</span>
          <p class="content">
            {{ item.content.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utils'
export default {
  props: ['data'],
  filters: {
    date_filter (value) {
      return value ? formatDate(value) : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    width: 100%;
    margin-bottom: 1rem;
    .top{
      padding: .2rem;
    }
    .comment-list{
      padding: 0 .2rem;
      .comment-list-item{
        display: flex;
        margin-bottom: .2rem;
        padding-bottom: .2rem;
        border-bottom: .02rem solid #eee;
        .avatar{
          width: .9rem;
          height: .9rem;
          border-radius: 50%;
          overflow: hidden;
          margin: .2rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .wrapper{
          flex: 1;
          position: relative;
          color: #aaa;
          .user{
            margin-top: .2rem;
          }
          .date{
            position: absolute;
            top: .2rem;
            right: .2rem;
          }
          .content{
            color: #333;
            margin-top: .2rem;
            padding-right: .2rem;
          }
        }
      }
    }
  }
</style>
