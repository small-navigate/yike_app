<template>
  <view class="content">
    <view class="top_bar">
      <view class="top_bar_right">注册</view>
    </view>
    <view class="logo">
      <image src="../../static/images/login/logo.png"></image>
    </view>
    <view class="mian">
      <view class="title">登录</view>
      <view class="msg">您好，欢迎来到 yike！</view>
      <view class="inputs">
        <input type="text" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:400;" />
        <input placeholder-style="color:#aaa;font-weight:400;" type="password" placeholder="密码" />
        <view class="tips">输入用户名或密码错误!</view>
      </view>
      <view class="submit">登录</view>
    </view>
  </view>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.top_bar {
  display: flex;
  box-sizing: border-box;
  padding-top: var(--status-bar-height);
  padding-right: 32rpx;
  flex-direction: row-reverse;
  height: calc(88rpx + var(--status-bar-height));
  .top_bar_right {
    font-size: $uni-font-size-lg;
    font-weight: 550;
    line-height: 88rpx;
    color: $uni-text-color;
  }
}
.logo {
  padding-top: 150rpx;
  width: 194rpx;
  height: 92rpx;
  margin: 0 auto;
  image{
    width: 100%;
    height: 100%;
  }
}
.mian{
  box-sizing: border-box;
  padding: 54rpx 50rpx 0;
  .title{
    font-weight: 600;
    font-size: 56rpx;
    color: $uni-text-color;
    line-height: 80rpx;
  }
  .msg{
    font-size: 40rpx;
    color: $uni-text-color-grey;
    line-height: 56rpx;
  }
  .inputs{
    padding-top: 8rpx;
    padding-bottom: 120rpx;
    input{
      height: 88rpx;
      padding-top: 40rpx;
      font-size: $uni-font-size-lg;
      font-weight: 500;
      color: $uni-text-color;
      line-height: 88rpx;
      border-bottom: 1px solid $uni-border-color;
    }
    .tips{
      float: left;
      font-size: $uni-font-size-lg;
      font-weight: 500;
      color: $uni-color-warning;
      line-height: 56rpx;
    }
  }
  .submit{
    box-shadow: 0 50rpx 32rpx -36rpx rgba(255,228,49,.4);
    margin: 0 auto;
    width: 520rpx;
    height: 96rpx;
    line-height: 96rpx;
    border-radius: 48rpx;
    text-align: center;
    background: $uni-color-primary;
    font-size: $uni-font-size-lg;
    font-weight: 500;
    color: $uni-text-color;
  }
}
</style>