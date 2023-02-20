<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ retrundata }}</h1>
  </div>
</template>

<script>

import {contentDetail} from '@/api/interface' // 引入接口

export default {
  data() {
    return {
      retrundata: "",
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      uni.request({
        // 其中 api 是代理了 192.168.21.37:8080 这个
        url: '/hello',
        method: 'GET',
        success: res => {
          console.log(res);
          this.retrundata = res.data;
        },
        fail: () => {
          console.log('请求失败');
        },
        complete: () => {
          console.log('请求完成');
        }
      })
    },
  }
}
</script>
