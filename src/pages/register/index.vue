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
          <input v-if="types" placeholder="输入您的密码" placeholder-style="color:#aaa;font-weight:400;" v-model="info.password" type="password"/>
          <input v-else placeholder="输入您的密码" placeholder-style="color:#aaa;font-weight:400;" v-model="info.password" type="text"/>
          <view class="employ" v-show="employPass">该邮箱已注册</view>
          <view class="img" @tap="changeChanka">
            <image src="../../static/images/login/chakan.png"></image>
          </view>
        </view>
        
      </view>
      <view :class="[{'active':isok} , 'submit']" @tap="register">注册</view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
      return {
        types: true,
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
      this.types = !this.types
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
    },
    async register(){
      const res = await this.$http({
        url: '/userRouter/register',
        method: 'post',
        data: this.info
      })
      console.log(res)
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
@import "../../commons/css/mycss.scss";
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
    background: #d4d4d6;
    color: #fff;
  }
  .active{
    background: $uni-color-primary;
    color: $uni-text-color;
    box-shadow: 0 50rpx 32rpx -36rpx rgba(255,228,49,.4);
  }
}
</style>