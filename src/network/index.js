import axios from 'axios'

function request (config) {
  const instance = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
  })

  return instance(config)
}


// 1. 请求 PostList 页面数据
export function getPostList (name) {
  return request({
    url: '/topics',
    method: 'get',
    params: {
      page: 1,
      limit: 20
    }
   
  })
}