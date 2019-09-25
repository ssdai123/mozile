<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">修改密码</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">手机号</view>
				<input placeholder="请输入手机号码" name="pwd1"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="pwd2"></input>
				<button class='cu-btn bg-opacity round text-sm'>获取验证码</button>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">设置密码</view>
				<input placeholder="请设置不少于8位数字母加数字密码" name="pwd1"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">再次确认</view>
				<input placeholder="请确认密码" name="pwd2"></input>
			</view>
			
			<view class="padding margin">
				<button class="cu-btn block lg bg-green margin">
					设置
				</button>
			</view>		
		</form>
		<view class="cover" v-if="isShow" @tap="coverHide">
			<view class="cover-cont padding flex flex-direction justify-center">
				<view class="icon-cont bg-green margin-bottom">
					<image src="../../../static/img/icon/icon_feed.png" mode=""></image>
				</view>
				<view class="padding-sm"></view>
				<view class="padding margin text-center">
					谢谢您的反馈，我们将第一时间联系您～
				</view>
				<view class="text-center">
					<button class="cu-btn round lg bg-green magin">
						返回首页
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				imgList: [],
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: {
			coverShow(){
				this.isShow = true
			},
			coverHide(){
				this.isShow = false
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				this.imgList.splice(e.currentTarget.dataset.index, 1)
				// uni.showModal({
				// 	
				// 	title: '召唤师',
				// 	content: '确定要删除这段回忆吗？',
				// 	cancelText: '再看看',
				// 	confirmText: '再见',
				// 	success: res => {
				// 		if (res.confirm) {
				// 			this.imgList.splice(e.currentTarget.dataset.index, 1)
				// 		}
				// 	}
				// })
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style lang="scss">
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.cu-form-group+.cu-form-group{
		border: none;
	}
	.icon-cont{
		width: 160upx;
		height: 160upx;
		text-align: center;
		line-height: 160upx;
		position: absolute;
		top: -80upx;
		left: 50%;
		margin-left: -80upx;
		border-radius: 50%;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.cu-btn.bg-opacity{
		border: 1upx solid #2DDBC4;
		background-color: rgba(45,219,196,0.1) !important;
		color: #2DDBC4;
	}
</style>
