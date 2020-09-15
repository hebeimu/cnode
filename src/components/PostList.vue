<template>
  <div id="postList">
     <div class="loading" v-if="loading">
       Loading...
     </div>

     <div class="posts" v-else>
       <ul>
         <li v-for="item in posts">
            <!-- 头像 -->
           <router-link :to="{name: 'user_info', params: {name: item.author.loginname}}" :title="item.author_id">
             <img :src="item.author.avatar_url" :title="item.author.loginname" alt="">
           </router-link>

            <!-- 收藏/点赞次数 -->
           <span class="store">{{item.reply_count}} / {{item.visit_count}}</span>

             <!-- 标题 -->
           <router-link class="title" :to="{name: 'post_content', params: {id: item.id, name: item.author.loginname}}" :title="item.title">
             {{item.title}}
           </router-link>

            <!-- 标题时间 -->
           <span class="last_reply">{{item.last_reply_at | formatDate}}</span>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
  import {getPostList} from '@/network'
  import {getDate} from '@/utils'
  export default {
    name: 'PostList',
    data () {
      return {
        posts: [],
        loading: false
      }
    },

    // 过滤器
    filters: {
      formatDate (msg) {
         return getDate(msg)
      }
    },

    created () {
      // 请求网络数据
      getPostList()
      .then (res => {
        if (res.data.success === true) {
          this.posts = res.data.data
          this.loading = false
          console.log(this.posts[0].title)
        }
      })
      .catch (err => {
        console.log(err)
      }) 
    }

  }
</script>

<style scoped>
  .posts {
    margin: 10px 50px;
    background-color: #fff;
  }
  ul {
    padding: 10px;
  }
  li {
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: flex-end;
    padding: 15px 0 5px;
  }
  img {
    width: 25px;
    vertical-align: middle;
  }
  .store {
    width: 70px;
    font-size: 13px;
    margin: 0 10px 0 30px;
    color: #999;
  }
  .title {
    color: #000;
    letter-spacing: 1px;
    flex: 1;
  }
  .last_reply {
    width: 60px;
    font-size: 12px;
    text-align: right;
    color: #aaa;
  }
</style>
