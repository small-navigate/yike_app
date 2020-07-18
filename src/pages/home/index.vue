<template>
  <view class="content">
    <view class="top_bar">
      <view class="top_bar_left">
        <image src="../../static/images/img/1.jpg"></image>
      </view>
      <view class="top_bar_center">
        <image src="../../static/images/home/logo.png"></image>
      </view>
      <view class="top_bar_right">
        <view class="search">
          <image src="../../static/images/home/search.png"></image>
        </view>
         <view class="add">
          <image src="../../static/images/home/add.png"></image>
        </view>
      </view>
    </view>
    <view class="main">
      <view class="friends">
        <view class="friends_list">
          <view class="friends_list_left">
            <text class="tip">1</text>
            <image src="../../static/images/home/add_firend.png"></image>
          </view>
          <view class="friends_list_right">
            <view class="top">
              <view class="name">好友请求</view>
              <view class="time">13:42</view>
            </view>
            <view class="bottom_content">vue+node.js 0到1实现即时通讯聊天室-前端篇3</view>
          </view>
        </view>
      </view>
      <view class="friends">
        <view class="friends_list" v-for="item in friends" :key="item.id">
          <view class="friends_list_left">
            <text class="tip">{{item.tip}}</text>
            <image src="../../static/images/img/2.jpg"></image>
          </view>
          <view class="friends_list_right">
            <view class="top">
              <view class="name">{{item.name}}</view>
              <view class="time">{{dateTime(item.time)}}</view>
            </view>
            <view class="bottom_content">{{item.news}}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          imgurl: '1.jpg',
          tip: 2,
          name: '背景',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 2,
          imgurl: '2.jpg',
          tip: 3,
          name: '北京',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 3,
          imgurl: '3.jpg',
          tip: 14,
          name: '上海',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 4,
          imgurl: '1.jpg',
          tip: 16,
          name: '杭州',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
         {
          id: 5,
          imgurl: '1.jpg',
          tip: 2,
          name: '背景',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 6,
          imgurl: '2.jpg',
          tip: 3,
          name: '北京',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 7,
          imgurl: '3.jpg',
          tip: 14,
          name: '上海',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 8,
          imgurl: '1.jpg',
          tip: 16,
          name: '杭州',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
         {
          id: 9,
          imgurl: '1.jpg',
          tip: 2,
          name: '背景',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 29,
          imgurl: '2.jpg',
          tip: 3,
          name: '北京',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 39,
          imgurl: '3.jpg',
          tip: 14,
          name: '上海',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        },
        {
          id: 49,
          imgurl: '1.jpg',
          tip: 16,
          name: '杭州',
          time: new Date(),
          news: 'vue+node.js 0到1实现即时通讯聊天室-前端篇3'
        }
      ]
    }
  },
  onLoad() {},
  methods: {
    // 首页时间转换
    dateTime(date) {
      let old = new Date(date)
      let now = new Date()
      // 获取old具体时间
      let d = old.getTime()
      let h = old.getHours()
      let m = old.getMinutes()
      let Y = old.getFullYear()
      let M = old.getMonth() + 1
      let D = old.getDate() - 2
      // 获取now具体时间
      let nd = now.getTime()
      let nh = now.getHours()
      let nm = now.getMinutes()
      let nY = now.getFullYear()
      let nM = now.getMonth() + 1
      let nD = now.getDate()

      // 当天时间的情况
      if(D === nD && M === nM && Y === nY){
        if(h < 10){
          h = '0' + h
        }
        if(m < 10){
          m = '0' + m
        }
        return h + ':' + m
      }
      // 昨天的时间
      if(D + 1 === nD && M === nM && Y === nY){
        if(h < 10){
          h = '0' + h
        }
        if(m < 10){
          m = '0' + m
        }
        return '昨天' + h + ':' + m
      } else {
        return Y + '/' + M + '/' + D
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top_bar{
    height: calc(108rpx + var(--status-bar-height));
    width: 100%;
    background-color: $uni-bg-color;
    position: fixed;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.1);
    display: flex;
    box-sizing: border-box;
    padding: 20rpx 50rpx;
    padding-top: calc(20rpx + var(--status-bar-height));
    .top_bar_left{
      flex: 1;
      line-height: 88rpx;
      image{
        width: 68rpx;
        height: 68rpx;
        border-radius: 16rpx;
      }
    }
    .top_bar_center{
      flex: 1;
      text-align: center;
      line-height: 88rpx;
      image{
        width: 88rpx;
        height: 42rpx;
      }
    }
    .top_bar_right{
      flex: 1;
      display: flex;
      line-height: 88rpx;
      .search{
        width: calc(100% - 48rpx);
        height: 68rpx;
        text-align: center;
        image{
          width: 52rpx;
          height: 52rpx;
        }
      }
      .add{
        width: 48rpx;
        height: 48rpx;
        image{
          width: 48rpx;
          height: 48rpx;
        }
      }
    }
  }
  .main{
   padding-top: calc(108rpx + var(--status-bar-height));
    .friends{
      .friends_list{
        height: 96rpx;
        
        padding: 16rpx $uni-spacing-col-base;
        display: flex;
        &:active{
          background-color: $uni-bg-color-grey;
        }
        .friends_list_left{
          position: relative;
          image{
            width: 96rpx;
            height: 96rpx;
            border-radius: $uni-border-radius-base;
            background-color: $uni-color-primary;
          }
          .tip{
            position: absolute;
            top: -6rpx;
            left: 68rpx;
            z-index: 10;
            height: 36rpx;
            min-width: 36rpx;
            background: $uni-color-warning;
            border-radius: $uni-border-radius-circle;
            line-height: 36rpx;
            text-align: center;
            color: $uni-text-color-inverse;
            font-size: $uni-font-size-sm;
          }
        }
        .friends_list_right{
          padding:0 $uni-spacing-row-lg;
          .top{
            height: 50rpx;
            .name{
              float: left;
              font-size: $uni-font-size-lg;
              color: $uni-text-color;
              font-weight: 500;
              line-height: 50rpx;
            }
            .time{
              float: right;
              font-size: $uni-font-size-sm;
              color: $uni-text-color-disable;
              line-height: 50rpx;
            }
          }
          .bottom_content{
            clear: both;
            font-size: $uni-font-size-base;
            color: $uni-text-color-grey;
            line-height: 46rpx;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
