<template>
  <view class="content">
    <view class="top_bar">
      <view class="top_bar_right" @tap="toRegister">注册></view>
    </view>
    <view class="logo">
      <image src="../../static/images/login/logo.png"></image>
    </view>
    <view class="mian">
      <view class="title">登录</view>
      <view class="msg">您好，欢迎来到 yike！</view>
      <view class="inputs">
        <input type="text" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:400;" v-model="info.user" @blur="tagBlur" />
        <input placeholder-style="color:#aaa;font-weight:400;" type="password" placeholder="密码" v-model="info.password" @blur="tagBlur"/>
        <view class="tips" v-if="isShowPass">输入用户名或密码错误!</view>
        <view class="tips" v-if="isShowUser">该用户名/邮箱尚未注册!</view>
      </view>
      <view class="submit" @tap="login">登录</view>
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
      },
      isShowPass: false,
      isShowUser: false
    }
  },
  methods: {
    async login(){
      if(this.info.user && this.info.password){
          console.log('提交')
          const {data:res} = await this.$http({ 
            url: '/userRouter/login',
            method: 'POST',
            data:this.info
          })
          if(res.meta.status == '200'){

          } else if(res.meta.status == '400'){
            this.isShowPass = true
          } else if(res.meta.status == '401'){
            this.isShowUser = true
          }
      }
    },
    toRegister(){
      uni.navigateTo({
        url: '/pages/register/index'
      })
    },
    tagBlur(){
      this.isShowPass = false
      this.isShowUser = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../commons/css/mycss.scss";
.top_bar {
  flex-direction: row-reverse;
  padding-right: 40rpx;
  .top_bar_right {
    font-size: 40rpx; 
    font-weight: 550;
    line-height: 88rpx;
    color: $uni-text-color;
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
  
    .tips{
      float: left;
      font-size: $uni-font-size-lg;
      font-weight: 500;
      color: $uni-color-warning;
      line-height: 56rpx;
    }
  
  .submit{
    box-shadow: 0 50rpx 32rpx -36rpx rgba(255,228,49,.4);
    background: $uni-color-primary;
    color: $uni-text-color;
  }
}
</style>