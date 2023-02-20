import request from './http' // 使用实例
export function contentDetail(params) {
    return uni.request({
        // 其中 api 是代理了 192.168.21.37:8080 这个
        url: '/api/hello',
        method: 'GET',
        success: res => {
            console.log(res);
            return res;
        },
        fail: () => {
            console.log('请求失败');
        },
        complete: () => {
            console.log('请求完成');
        }
    })
}
