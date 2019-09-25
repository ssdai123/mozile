<template>
	<view>
		<cu-custom 
		:hasBorder="false" 
		:isBack="true" 
		bgColor="bg-opacity" 
		backColor="#FFF"
		>
			<block slot="content">
				<text class="text-white">实名认证</text>
			</block>
		</cu-custom>
		<view class="apply-top">
			<image src="../../static/img/real_bg.png" mode=""></image>
		</view>
		
		
		<view class="info-cont">
			<view class="input-cont">
				<input type="text" value="" placeholder="请输入姓名"/>
			</view>
			<view class="input-cont">
				<input type="text" value="" placeholder="请输入身份证号码"/>
			</view>
			<view class="input-cont">
				<input type="text" value="" placeholder="请选择性别"/>
			</view>
			<view class="face-place">
				<image class="margin-xs" src="../../static/img/icon/face_scan.png" mode=""></image>
				<view class="padding color-green">
					请完成下面人脸识别
				</view>
			</view>
			
			<view class="margin-sm">
				<button class="u-btn lg bg-green round block" @tap="certyFn">
					立即人脸识别
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		methods: {
			certyFn() {
				let that = this;
				uni.showModal({
					confirmColor:'#2DDBC4',
					content:'为了您更好的用户体验，需要实名认证哟~',
					cancelText:'取消',
					confirmText:'继续认证',
					cancelColor:'#888',
					success:function(s) {
						console.log(s)
					}
				})
				
			}
		},
	}
</script>

<style lang="scss">
	// page{
	// 	background: #FFF;
	// }
	.apply-top{
		height: 476upx;
		position: relative;
		color: #FFF;
		margin-top: -100px;
		&>image{
			height: 100%;
			width: 100%;
		}
	}	
	.info-cont{
		margin:60upx 40upx;
		padding:40upx 30upx;
		position: relative;
		background: #FFF;
		border-radius: 10upx;
		margin-top: -220upx;
		.input-cont{
			// border: 1px solid red;
			margin-bottom: 30upx;
			position: relative;
			&::before{
				content: '*';
				color: #DA5858;
				position: absolute;
				top: 50%;
				left: 20upx;
				margin-top: -8upx;
			}
		}
		input{
			height: 80upx;
			line-height: 80upx;
			padding:0 30upx 0 40upx;
			border: 1upx solid #E5E5E5;
			font-size: 24upx;
			border-radius: 5upx;
		}
		.face-place{
			text-align: center;
			image{
				height: 360upx;
				width: 300upx;
			}
		}
	}
</style>
