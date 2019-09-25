<template>
	<view>
		<cu-custom :hasBorder="false" :isBack="true">
			<!-- <block slot="backText">未认证</block>
			<block slot="right">
				<i class="iconfont icon-xiangji fs-40"></i>
			</block> -->
		</cu-custom>
       
		<!-- 账号密码输入框 -->
		<view class="form padding margin">
			<view class="tit">
				账号密码登录
			</view>
			<view class="cu-form-group margin-top">
				<input placeholder="请输入手机号" v-model="phoneNumber" />
			</view>
			<view class="cu-form-group">
				<input placeholder="请输入图形验证码" v-model="code"/>
				<view class="cu-capsule radius">
					<view @tap="changeCode" class="cu-tag color-green code">
						{{rCode}}
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<input placeholder="请输入密码" v-model="passwd" password=true/>
				<view class="cu-capsule radius">
					<view @tap="resetpasswd" class="cu-tag color-green bg-white" >
						忘记密码？
					</view>
				</view>
			</view>
			<view class="cu-btn lg bg-green block margin-top" @tap="doLogin">登 录</view>
			<view class="text-center margin">
				<text class="iconfont icon-duihao color-green"></text>
				<text class="text-grey">是否同意</text>
				<text class="color-green">《软件注册协议》</text>
			</view>
			<!-- <view class="res">
				<view @tap="toPage('register')">用户注册</view>
				<view @tap="toPage('resetpasswd')">忘记密码</view>
			</view> -->
		</view>
		<!-- 第三方登录 -->
		<view class="share-cont flex justify-around align-center margin padding">
			<view @tap="reg" class="flex flex-direction align-center">
				<image src="../../static/img/share/icon_phone.png" mode=""></image>
				<text>立即注册</text>
			</view>
			<view class="flex flex-direction align-center">
				<image src="../../static/img/share/share_wx.png" mode=""></image>
				<text>微信登录</text>
			</view>
		</view>
		<!-- <view class="oauth" v-if="isShowOauth">
			<view class="text">— 快速登录 —</view>
			<view class="list">
				<view @tap="oauthLogin('weixin')" v-if="showProvider.weixin" class="icon weixin"></view>
				<view @tap="oauthLogin('qq')" v-if="showProvider.qq" class="icon qq"></view>
				<view @tap="oauthLogin('sinaweibo')" v-if="showProvider.sinaweibo" class="icon sinaweibo"></view>
				<view @tap="oauthLogin('xiaomi')" v-if="showProvider.xiaomi" class="icon xiaomi"></view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	import general from "@/common/utils/general.js"
	import Vue from 'vue'
	export default {
		data() {
			return {
				phoneNumber: '13983171812', 
				passwd:'',
				code:'', //输入的图形验证码
				rCode:'', //生成的图形验证码
				isShowOauth:true,
				showProvider:{
					weixin:false,
					qq:false,
					sinaweibo:false,
					xiaomi:false
				}
			}
		},
		onShow() {
			
		},
		onLoad() {
			//APP显示第三方登录
			// #ifdef APP-PLUS
				this.isShowOauth=true;
			// #endif
			this.getProvider();
			// console.log()
			this.rCode = this.randomCode()
		}, 
		
		methods: {
			resetpasswd(){
				uni.navigateTo({
					url:'resetpasswd'
				})
			},
			randomCode(){ //生成图片验证码
				// 大写字母code码 65~90
				let n1 = Math.floor(Math.random()*25)+65;
				let n2 = Math.floor(Math.random()*25)+65;
				let n3 = Math.floor(Math.random()*25)+65;
				let n4 = Math.floor(Math.random()*25)+65;
				var codeStr= this.cToL(n1)+this.cToL(n2)+this.cToL(n3)+this.cToL(n4)
				console.log(n1,n2,n3,n4)
				return codeStr;
			},
			cToL(n){
				return String.fromCharCode(n)+''
			},
			changeCode(){ //点击切换图片验证码
				this.rCode = this.randomCode()
			},
			reg(){
				uni.navigateTo({
					url:'register'
				})
			},
			oauthLogin(provider){
				uni.showLoading();
				//第三方登录
				uni.login({
					provider: provider,
					success: (loginRes)=>{
						console.log("success: "+JSON.stringify(loginRes));
						//案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
						uni.getUserInfo({
							provider: provider,
							success: (infoRes)=>{
								console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
								uni.setStorage({
									key: 'UserInfo',
									data: {
										username:infoRes.userInfo.nickName,
										face:infoRes.userInfo.avatarUrl,
										signature:'个性签名',
										integral:0,
										balance:0,
										envelope:0
									},
									success: function () {
										uni.hideLoading()
										uni.showToast({title: '登录成功',icon:"success"});
										setTimeout(function(){
											uni.navigateBack();
										},300)
									}
								});
								
							}
						});
					},
					fail:(e)=>{
						console.log("fail: "+JSON.stringify(e));
					}
				});
			},
			getProvider(){
				//获取第三方登录服务
				uni.getProvider({
					service: 'oauth',
					success: (res)=>{
						let len = res.provider.length;
						for(let i=0;i<len;i++){
							//有服务才显示按钮图标
							this.showProvider[res.provider[i]] = true;
						}
						if(res.provider.length==0){
							this.isShowOauth=false;
						}
					}
				});
			},
			toPage(page){
				uni.hideKeyboard()
				uni.navigateTo({
					url: page
				});
			},
			async doLogin(){ //登录按钮逻辑
				uni.hideKeyboard();
				//验证手机号码
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				}
				if(this.code.toLowerCase()!=this.rCode.toLowerCase()){
					uni.showToast({title: '验证码错误',icon:"none"});
					return false; 
				}
				if(this.passwd==''){
					uni.showToast({title: '密码不能为空',icon:"none"});
					return false; 
				}
				uni.showLoading({
					title: '登录中...'
				})
				let loginData = await general.generalGET(
					this.global.baseUrl+'doLogin',
					{
						phone:this.phoneNumber,
						pwd:this.passwd
					}
				)
				 console.log(loginData)
				if(loginData.data.code=='OK'){
					loginData.data.userinfo.token = loginData.data.token;
					let userinfo = JSON.stringify(loginData.data.userinfo)
					console.log(userinfo)
					uni.setStorage({
						key:'userinfo',
						data:userinfo
					})
					Vue.prototype.userinfo = JSON.parse(userinfo);
					Vue.prototype.token = loginData.data.token;
					uni.redirectTo({
						url:'../home/home'
					})
				}
				if(loginData.data.code=='pwdErr'){
					uni.showToast({title: '密码错误',icon:"none"});
				}
				 uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #FFF;
	}
	.tit{
		padding-bottom:80upx;
		font-size: 40upx;
	}
	.cu-tag.bg-white{
		left: 25upx;
	}
	.cu-tag.code{
		letter-spacing: 5upx;
		font-style: italic;
	}
	.cu-form-group+.cu-form-group{
		border-top:none;
	}
	.cu-form-group{
		// border-bottom: 1upx solid rgba(31,32,38,0.7);
		border-bottom: 1upx solid #1F2026;
	}
	.cu-btn{
		margin-top: 100upx;
	}
	.share-cont{
		image{
			height: 62upx;
			width: 62upx;
			margin-bottom: 20upx
		}
	}
	.oauth{
		@media all and (max-height:150vw){
			display: none;
		}
		position: absolute;
		bottom: 50upx;
		width: 100%;
		.text{
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba($color: #ffffff, $alpha: 0.8);
			font-size: 28upx;
		}
		.list{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20upx 0;
			.icon{
				font-size:80upx;
				margin: 0 30upx;
			}
		}
	}
</style>
