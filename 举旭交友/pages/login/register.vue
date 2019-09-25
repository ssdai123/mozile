<template>
	<!-- <view>
        <view class="logo">
			<view class="img">
				<image mode="widthFix" src="../../static/HM-login/img/log.png"></image>
			</view>
		</view>
		<view class="form">
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="btn" @tap="doReg">立即注册</view>
			<view class="res">
				<view @tap="toLogin">已有账号立即登录</view>
			</view>
		</view>
		
	</view> -->
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">注册</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">手机号</view>
				<input v-model="phoneNumber" placeholder="请输入手机号码" name="pwd1"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input v-model="code" placeholder="请输入验证码" name="pwd2"></input>
				<button @tap.stop="getCode()" class='cu-btn bg-opacity round text-sm'>{{getCodeText}}</button>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">设置密码</view>
				<input v-model="passwd" type="password" placeholder="请设置不少于8位数字母加数字密码" name="pwd1"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">再次确认</view>
				<input v-model="passwd1" type="password" placeholder="请再次确认密码" name="pwd2"></input>
			</view>
			
			<view class="padding margin">
				<button class="cu-btn block lg bg-green margin" @tap="doReg">
					确定
				</button>
			</view>		
		</form>
	
	</view>

</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	import general from "@/common/utils/general.js"
	import Vue from 'vue'
	export default {
		data() {
			return {
				phoneNumber:"", //手机号
				code:'', //验证码
				passwd:"", //密码
				passwd1:"", //确认密码
				getCodeText:'获取验证码',
				getCodeBtnColor:"#ffffff",
				getCodeisWaiting:false
			}
		},
		onLoad() {

		},
		methods: {
			Timer(){},
			async checkCode (){
				console.log(123)
				let result = await general.checkPhoneCode(this.global.baseUrl,this.phoneNumber,this.code);
				console.log(result)
				if(!result){
					wx.showToast({
						title:'验证码错误',
						icon:'none'
					})
				}
			},
			getCode(){
				uni.hideKeyboard()
				if(this.getCodeisWaiting){
					return ;
				}
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(255,255,255,0.5)"
				
				uni.request({
					url:this.global.baseUrl+'mobile/getCode',
					method:'get',
					data:{
						phone:this.phoneNumber,
						type:'rege'
					},
					
					success: (res) => {
						console.log(res)
						// if(res.data=='OK'){
							this.setTimer()
						// }
					}
				})
			},
			setTimer(){
				let holdTime = 60;
				this.getCodeText = `60s后重新获取`
				this.Timer = setInterval(()=>{
					if(holdTime<=0){
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ffffff";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return ;
					}
					this.getCodeText = `${holdTime}s后重新获取`;
					holdTime--;
					
				},1000)
			},
			async doReg(){
				uni.hideKeyboard()
				//手机格式验证
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				//验证码
				if(this.code==''){ 
					uni.showToast({title: '请输入验证码',icon:"none"});
					return false; 
				}
				if(this.passwd==''){ 
					uni.showToast({title: '请输入密码',icon:"none"});
					return false; 
				}
				if(this.passwd1==''){ 
					uni.showToast({title: '请输入确认密码',icon:"none"});
					return false; 
				}
				if(this.passwd!==this.passwd1){ 
					uni.showToast({title: '两次密码不一致',icon:"none"});
					return false; 
				}
				// let result = await general.checkPhoneCode(this.global.baseUrl,this.phoneNumber,this.code);
				// console.log(result)
				// if(!result){
				// 	uni.showToast({title: '验证码错误',icon:"none"});
				// 	return false;
				// }
				uni.showLoading({
					title: '提交中...'
				})
				//发起注册请求。
				uni.request({
					url:this.global.baseUrl+'regeUser',
					method:'GET',
					data:{
						phone:this.phoneNumber,
						pwd:this.passwd,
						yanzcode:this.code,
						method:1
					},
					success: (res) => {
						console.log(res)
						var str=''
						if(res.data.code=='OK'){
							str='注册成功';
							setTimeout(()=>{
								this.toLogin()
							},200)
						}
						if(res.data.code=='phoneErr'){
							str='手机号错误或已被注册'
						}
						if(res.data.code=='yanzcodeErr'){
							str='验证码错误'
						}
						if(res.data.code=='yanzcodeSendErr'){
							str='验证码未发送成功'
						}
						
						wx.showToast({
							title:str,
							icon:'none'
						})
						
						wx.hideLoading()
					}
				})
			},
			toLogin(){ 
				uni.hideKeyboard()
				uni.redirectTo({url: 'login'});
				// uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	.cu-btn.bg-opacity{
		border: 1upx solid #2DDBC4;
		background-color: rgba(45,219,196,0.1) !important;
		color: #2DDBC4;
	}
</style>
