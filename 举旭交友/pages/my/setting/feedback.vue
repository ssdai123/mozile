<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">意见反馈</block>
			<block slot="right">
				<text class="color-green margin-right" @tap="coverShow">提交</text>
			</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="请留下您宝贵的意见~"></textarea>
			</view>
			
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-camera'></text>
					</view>
				</view>
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
</style>
