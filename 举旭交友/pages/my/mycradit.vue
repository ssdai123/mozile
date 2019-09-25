<template>
	<view>
		<cu-custom 
		:hasBorder="false" 
		:isBack="true" 
		bgColor="bg-cradit" 
		backColor="#FFF"
		>
			<block slot="content">
				<text class="text-white">信用值</text>
			</block>
		</cu-custom>
		<view class="top-cont flex justify-center">
			<view class="circle">
				<image src="../../static/img/user/bg_circle.png" mode=""></image>
				<view class="flex flex-direction align-center justify-center">
					<text>789</text>
					<text>我的信用值</text>
				</view>
			</view>
		</view>
		
		<view class="info-cont">
			<view class="tit">
				完善相关信息可以使信用值更高哟 !
			</view>
			<view class="label">
				身份证
			</view>
			<input type="text" value="" placeholder="请输入身份证号"/>
			<view class="label">
				学历证
			</view>
			<input type="text" value="" placeholder="请选择最高学历"/>
			<view class="label">
				真实房产
			</view>
			<input type="text" value="" placeholder="请选择"/>
			<view class="label">
				真实职业
			</view>
			<input type="text" value="" placeholder="请输入您的职业"/>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		background: #FFF;
	}
	.top-cont{
		background: #1F2026;
		padding: 100upx 0;
		margin-top: -2upx;
		color: #FFF;
		position: relative;
		&::after{
			content: '';
			height: 30upx;
			width: 30upx;
			background: #FFF;
			position: absolute;
			bottom: -15upx;
			left: 30upx;
			transform:rotate(45deg);
		}
		.circle{
			width: 280upx;
			height: 280upx;
			position: relative;
			image{
				width: 100%;
				height: 100%;
			}
			view{
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0
			}
		}
	}
	
	.info-cont{
		margin:60upx 40upx;
		border: 1upx solid #2DDBC4;
		padding:60upx 40upx;
		position: relative;
		// font-size: 28upx;
		.label{
			padding: 15upx 30upx;
		}
		input{
			height: 80upx;
			padding:15upx 30upx;
			border: 1upx solid #E5E5E5;
			font-size: 24upx;
		}
		.tit{
			width: 90%;
			background: #FFF;
			position: absolute;
			top: -20upx;
			left: 5%;
			text-align: center;
			color: #2DDBC4;
			&::before,
			&::after{
				content: '';
				height: 14upx;
				width: 14upx;
				background: #2DDBC4;
				position: absolute;
				top: 50%;
				margin-top: -7upx;
				transform:rotate(45deg);
			}
			&::before{
				left: 20upx;
			}
			&::after{
				right: 20upx;
			}
		}
	}
</style>
