<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
    </view>

    <image class="logo" src="/static/logo.png"></image>

    <view>
      <navigator url="/pages/apiTest/apiTest">Hello接口测试</navigator>
    </view>

    <view>
      <navigator url="/pages/feelFish/feelFish">feel fish</navigator>
    </view>

    <view>
      <navigator url="/pages/ai/poetry">POETRY AI</navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'HelloWorld'
    }
  },
  onLoad() {
  },
  methods: {}
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200 rpx;
  width: 200 rpx;
  margin: 200 rpx auto 50 rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36 rpx;
  color: #8f8f94;
}
</style>
