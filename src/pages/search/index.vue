<template>
  <view class="content">
    <view class="top_bar">
      <view class="search">
        <input type="text" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:400;" />
        <image src="../../static/images/common/search.png"></image>
      </view>
      <view class="text">取消</view>
    </view>
    <view class="main">
      <view class="search-user result">
        <view class="title">用户</view>
        <view class="list user">
          <image src="../../static/images/img/2.jpg"></image>
          <view class="names">
            <view class="name">大力出奇迹</view>
            <view class="email">123@qq.com</view>
          </view>
          <view class="btn">发消息</view>
        </view>
        <view class="list user">
          <image src="../../static/images/img/2.jpg"></image>
          <view class="names">
            <view class="name">大力出奇迹</view>
            <view class="email">123@qq.com</view>
          </view>
          <view class="btn">发消息</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      info: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    searchUser(e){
      if(String.search(e) != -1 || String.search(e) != -1){}
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../commons/css/mycss.scss';
.top_bar {
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 30rpx 20rpx 20rpx 20rpx;
  .search{
    width: 600rpx;
    height: 60rpx;
    position: relative;
    input{
      height: 60rpx;
      line-height: 60rpx;
      background-color: #f3f4f6;
      border-radius: $uni-border-radius-sm;
      box-sizing: border-box;
      padding: 0 60rpx 0 20rpx;
    }
    image{
      width: 40rpx;
      height: 40rpx;
      position: absolute;
      top: 10rpx;
      right: 10rpx;
      
    }
  }
  .text{
    width: 110rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    font-size: $uni-font-size-base;
  }
}
.main{
  .result{
    .title{
      font-size: 44rpx;
    }
    .user{
      display: flex;
      height: 100rpx;
      box-sizing: border-box;
      padding: 10rpx 0;
      image{
        width: 80rpx;
        height: 80rpx;
        border-radius: $uni-border-radius-base;
      }
      .names{
        box-sizing: border-box;
        padding: 0 20rpx;
        width: 500rpx;
        font-size: $uni-font-size-lg;
        .name{
          line-height: 40rpx;
        }
        .email{
          line-height: 40rpx;
          font-size: $uni-font-size-sm;
          color: $uni-text-color-grey;
        }
      }
      .btn{
        margin-top: 15rpx;
        height: 50rpx;
        width: 120rpx;
        line-height: 50rpx;
        background: $uni-color-primary;
        border-radius: 24rpx;
        text-align: center;
        font-size: 12rpx;
      }
    }
  }
}
</style>