<template>
	<view>
		<cu-custom 
		:hasBorder="false" 
		:isBack="true" 
		bgColor="bg-cradit" 
		backColor="#FFF"
		>
			<block slot="content">
				<text class="text-white">收益余额</text>
			</block>
			<block slot="right">
				<text class="text-white margin-right" @tap="handleCashDetail">
					提现明细
				</text>
			</block>
		</cu-custom>
		<view class="top-cont">
			<view class="earn-cont">
				<image src="../../static/img/user/bg_earn.png" mode=""></image>
				<view class="earn-inner flex justify-between align-center">
					<view class="flex flex-direction">
						<text class="padding-bottom-xs">收益余额(元)</text>
						<text class="text-xxl">789.0</text>
					</view>
					<view class="flex align-center" @tap="handleCash">
						<view class="wallet round margin-right-xs">
							<text class="iconfont icon-tixian color-green"></text>
						</view>
						提现
					</view>
				</view>
			</view>
		</view>
		<view class="padding color-888">
			账单明细
		</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<view>
						完成某某某活动
					</view>
					<text class="color-gray">2019/09/2 09:12</text>
				</view>
				<view class="action color-green">
					+50
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">
					<view>
						提现
					</view>
					<text class="color-gray">2019/09/2 09:12</text>
				</view>
				<view class="action color-deepred">
					-50
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">
					<view>
						完成某某某活动
					</view>
					<text class="color-gray">2019/09/2 09:12</text>
				</view>
				<view class="action color-green">
					+50
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default{
		methods: {
			handleCash(){ //提现
				uni.navigateTo({
					url:'mycash'
				})
			},
			handleCashDetail(){ //提现明细
				uni.navigateTo({
					url:'mycashdetail'
				})
			}
		},
	}
</script>

<style lang="scss">
	.top-cont{
		background: #1F2026;
		padding: 100upx 0;
		margin-top: -2upx;
		color: #FFF;
		position: relative;
		margin-bottom: 140upx;
		.earn-cont{
			position: absolute;
			top: 60upx;
			left: 5%;
			height: 260upx;
			width: 90%;
			&::before{
				content: '';
				height: 24upx;
				width: 90%;
				background: rgba(45,219,196,0.6);
				position: absolute;
				top: -24upx;
				left: 5%;
				border-radius: 20upx 20upx 0 0 ;
			}
			&>image{
				width: 100%;
				height: 100%;
			}
			.earn-inner{
				padding: 48upx;
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
			}
			.wallet{
				height: 56upx;
				width: 56upx;
				background: #FFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	
	.cu-list.menu>.cu-item{
		height: 140upx;
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
