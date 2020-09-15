import Vue from 'vue'
import Router from 'vue-router'

const Article = () => import('@/components/Article')
const PostList = () => import('@/components/PostList')
const SibeBar = () => import('@/components/SibeBar')
const UserInfo = () => import('@/components/UserInfo')


Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'root',
    components: {
      main: PostList
    }
  },
  {
    path: '/topic/:id&auther=:name',
    name: 'post_content',
    components: {
      main: Article,
      sidebar: SibeBar
    }
  },
  {
    path: '/user/:name',
    name: 'user_info',
    components: {
      main: UserInfo
    }
  }
]

export default new Router({
  mode: 'history',
  routes
})
