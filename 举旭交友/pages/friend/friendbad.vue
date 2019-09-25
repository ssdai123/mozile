<template>
	<view>
		<cu-custom  :isBack="true" :hasBorder="true">
			<block slot="content">
				投诉			
			</block>	
		</cu-custom>
		<view class="cu-bar bg-eee solid-bottom">
			<view class="action color-888 font-size-xs">
				请选择投诉类型
			</view>
		</view>
		
		<view class="bad-cont">
			<view>骗钱</view>
			<view>资料不真实</view>
			<view>涉嫌色情交易</view>
			<view>酒托</view>
		</view>
		
		<view class="cu-bar bg-eee solid-bottom">
			<view class="action color-888 font-size-xs">
				请填写投诉内容和上传相关图片证据
			</view>
		</view>
		
		<view class="bad-info bg-white">
			<textarea class="padding" value="" placeholder="请输入投诉内容" />
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
		</view>
		
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-green lg">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[]
			};
		},
		methods: {
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
			},
		},
	}
</script>

<style lang="scss">
.cu-bar{
	min-height: 80upx;
}
.cu-form-group{
	margin: 20upx 0;
}

.cu-list{
	.cu-btn{
		background: #D6DCDB;
		color: #FFF;
		margin-right: 10upx;
		width: 180upx;
	}
}
.bad-cont{
	padding: 32upx 32upx 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	background: #FFF;
	view{
		padding: 0 50upx;
		line-height: 58upx;
		border-radius: 30upx;
		margin-bottom: 30upx;
		border: 1upx solid #1F2026;
	}
}
.bad-info{
	.upload-btn{
		border: 1px solid #ccc;
		position: relative;
		.iconfont{
			font-size: 80upx;
			color: #ccc;
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -40upx 0 0 -40upx;
		}
	}
}
</style>
