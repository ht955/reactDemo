import axios from 'axios'
const server = axios.create({
  timeout: 60 * 1000,
  baseURL: '',
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

server.interceptors.request.use(config => {
   const token = localstorage.getItem('', 'user_token')
  config.headers['x-auth-token'] = token
  return config
})

server.interceptors.response.use(response => {
  return response.data
},
  err => {
    if (err?.response?.data?.code === '000401') {
      window.location.href = '/login'
    }
    return Promise.reject(err)
}
)