import axios from 'axios';

const service = axios.create({
  baseURL: '/api'
})

service.interceptors.request.use( // 请求拦截
  config => {
    return config
  }
)

service.interceptors.response.use( // 响应拦截
  response => {
     const {data} = response
     return data
  }
)

export default service

