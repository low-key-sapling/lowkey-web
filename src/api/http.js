import axios from 'axios'
// 创建axios实例
const service = axios.create({
    // baseURL: baseUrl, // api 的 base_url
    baseURL: 'http://39.107.65.19:8800', // api 的 base_url
    timeout: 300000 // 请求超时时间
})
// request 拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)
// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
export default service
