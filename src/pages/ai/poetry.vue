<template>
  <view class="uni-common-mt">
    <view class="uni-form-item uni-column">
      <view class="title">请输入一个诗的标题：{{ inputValue }}</view>
      <input class="uni-input" v-model="inputValue" @input="input" placeholder="请输入一个诗的标题："
             confirm-type="getData" @confirm="getData"/>
    </view>

    <view>
      <h1>回车生成结果</h1>
      <h1>{{ returnData }}</h1>
    </view>
  </view>

</template>

<script>

import {contentDetail} from '@/api/interface' // 引入接口

export default {
  data() {
    return {
      returnData: "",
      //搜索框
      inputValue: '',
    };
  },
  onLoad() {

  },
  methods: {
    getData() {
      uni.request({
        // 其中 api 是代理了 192.168.21.37:8080 这个
        url: '/ai/poetry?text=' + this.inputValue,
        method: 'GET',
        success: res => {
          console.log(res);
          this.returnData = res.data.data.poem;
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
