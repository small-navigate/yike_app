<template>
  <view class="content">
    <view class="top_bar">
      <view class="top_bar_left" @tap="toLogin">
        <image src="../../static/images/common/jiantou.png"></image>
      </view>
    </view>
    <view class="logo">
      <image src="../../static/images/login/logo.png"></image>
    </view>
    <view class="mian">
      <view class="title">注册</view>
      <view class="inputs">
        <view class="input_box">
          <input type="text" placeholder="请取个名字" placeholder-style="color:#aaa;font-weight:400;" v-model="info.username" />
          <view class="employ" v-show="employUser">该用户名已存在</view>
          <view class="img" v-show="isUsers">
            <image src="../../static/images/login/Group.png"></image>
          </view>
        </view>
        <view class="input_box">
          <input type="text" placeholder="请输入邮箱" placeholder-style="color:#aaa;font-weight:400;" @blur="isEmail" v-model="info.email" />
          <view class="employ" v-show="employEmail">该邮箱已注册</view>
          <view class="invalid" v-show="invalid">邮箱无效</view>
          <view class="img" v-show="isEmails">
            <image src="../../static/images/login/Group.png"></image>
          </view>
        </view>
        <view class="input_box">
          <input type="type" placeholder="输入您的密码" placeholder-style="color:#aaa;font-weight:400;" v-model="info.password" />
          <view class="employ" v-show="employPass">该邮箱已注册</view>
          <view class="img" @tap="changeChanka">
            <image src="../../static/images/login/chakan.png"></image>
          </view>
        </view>
        
      </view>
      <view :class="[{'active':isok} , 'submit']">注册</view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
      return {
        type: 'password',
        isUsers:false,
        isEmails:false,
        // employ用来控制每个input输入框验证
        employUser: false,
        employEmail: false,
        employPass: false,
        invalid:false,
        isok: false,
        info: {
          username: '',
          email: '',
          password: ''
        }
      }
  },
  methods: {
    changeChanka(){
      if(this.type == 'text'){
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    },
    isEmail(e){
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if(e.detail.value.length > 0) {
        if(reg.test(e.detail.value)){
          this.isEmails = !this.isEmails
        } else {
          this.invalid = !this.invalid
        }
      }
      
    },
    toLogin(){
       uni.navigateTo({
        url: '/pages/login/index'
      })
    }
  },
  watch: {
    isok(){
      if(this.isUsers && this.isEmails && this.employPass){
        this.isok = true
      }else{
        this.isok = false
      }

    }
  },
}
</script>
<style lang="scss" scoped>
.top_bar {
  display: flex;
  box-sizing: border-box;
  padding-top: var(--status-bar-height);
  padding-right: 32rpx;
  height: calc(88rpx + var(--status-bar-height));
  .top_bar_left {
    height: 88rpx;
    width: 88rpx;
    box-sizing: border-box;
    padding: 20rpx;
    image{
      height: 48rpx;
      width: 48rpx;
    }
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
    .input_box{
      position: relative;
    }
    .img{
      position: absolute;
      right: 0;
      bottom: 10rpx;
      width: 38rpx;
      height: 38rpx;
      margin: 25rpx 0 15rpx 15rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .employ{
      color: $uni-color-warning;
      font-size: $uni-font-size-base;
      position: absolute;
      line-height:88rpx ;
      bottom: 0;
      right: 40rpx;
    }
    .invalid{
      color: $uni-color-warning;
      font-size: $uni-font-size-base;
      position: absolute;
      line-height:88rpx ;
      bottom: 0;
      right: 40rpx;
    }
  }
  .submit{  
    margin: 0 auto;
    width: 520rpx;
    height: 96rpx;
    line-height: 96rpx;
    border-radius: 48rpx;
    text-align: center;
    background: #d4d4d6;
    font-size: $uni-font-size-lg;
    font-weight: 500;
    color: #fff;
  }
  .active{
    background: $uni-color-primary;
    color: $uni-text-color;
    box-shadow: 0 50rpx 32rpx -36rpx rgba(255,228,49,.4);
  }
}
</style>