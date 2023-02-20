<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
    </view>

    <view>
      <view class="punch-time">
        当前时间：{{ currentDate.dateTime|FormatTime }}
      </view>
      <view>
        (摸鱼办)提醒您:
      </view>
      <view>
        今天{{ currentDate.date_cn }} {{ currentDate.week }}
        <br/>
        早上好摸鱼人!
        <br/>
        工作再忙，一定不要忘记摸鱼哦!
        <br/>
        有事没事起身
        <br/>
        去茶水间
        <br/>
        去厕所
        <br/>
        去走廊走走
        <br/>
        去找同事聊聊八卦
        <br/>
        别老在工位上坐着，钱是老板的.但健康是自己的。
      </view>
    </view>

  </view>
</template>

<script>
import {
  yearTime,
  week
} from '@/static/js/dateUtil.js'

export default {
  data() {
    return {
      title: "摸鱼手册",
      currentDate: {
        year: '',
        mouth: '',
        day: '',
        date_cn: '',
        time: '',
        week: '',
        dateTime: yearTime('dateTime'),
      }
    }
  },
  onLoad() {
    this.getDate();
  },
  mounted() {
    let _this = this;
    setInterval(function () {
      _this.currentDate.dateTime = new Date();
    }, 1000);
  },
  filters: {
    FormatTime: function (val) {
      return yearTime("dateTime", val);
    },
  },
  methods: {
    getDate() {
      this.currentDate.year = yearTime('year');
      this.currentDate.mouth = yearTime('mouth');
      this.currentDate.day = yearTime('day');
      this.currentDate.time = yearTime('time');
      this.currentDate.date_cn = yearTime('date_cn');
      this.currentDate.week = week();
      console.log(this.currentDate);
    },
  }
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

.punch-time {
  height: 20px;
}

.title {
  font-size: 36 rpx;
  color: #8f8f94;
}
</style>
