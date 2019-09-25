<template>
	<view>
		<cu-custom 
		:hasBorder="false" 
		:isBack="true" 
		bgColor="bg-brown" 
		backColor="#FFF"
		>
			<block slot="content">
				我的成长值
			</block>
		</cu-custom>
		<view class="flex flex-direction align-center bg-brown padding-top" style="margin-top: -2upx;">
			<view class="cu-avatar xl round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
			<view class="text-center margin-top-xs">
				当前等级 V1
			</view>
			<view class="text-white text-sm">
				距下一个等级还需要1450成长值
			</view>
		</view>
		<view class="padding bg-brown" style="margin-top: -2upx;">
			<view class="progress">
				<text>V1</text>
				<view class="inner">
					<view class="dot">
						<text>V12</text>
					</view>
				</view>
				<text>V32</text>
			</view>
		</view>
		
		<view class="grown-cont padding bg-white">
			如何获得成长值？(奖支率1%)
			<view class="grown-list">
				<view class="list flex justify-between align-center">
					<view class="flex align-center">
						消费1元
						<text class="coin">+5成长值</text>
					</view>
					<button class="cu-btn bg-brown text-white round sm">
						去完成
					</button>
				</view>
				
				<view class="list flex justify-between align-center">
					<view class="flex align-center">
						消费1元
						<text class="coin">+5成长值</text>
					</view>
					<button class="cu-btn text-white round sm">
						已完成
					</button>
				</view>
				
				<view class="list flex justify-between align-center">
					<view class="flex align-center">
						消费1元
						<text class="coin">+5成长值</text>
					</view>
					<button class="cu-btn bg-brown text-white round sm">
						去完成
					</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				
			};
		},
		async onLoad() {
			let level = await general.generalGET(
				this.global.baseUrl+'ByUserIdGetLevel',
				{},
				{token:this.token},
			)
			console.log(level)
			
		}
	}
</script>

<style lang="scss">
.icon-xiangji{
	margin-right: 30upx;
}
.cu-list.menu>.cu-item .content{
	line-height: 01em;
}
.progress{
	margin:20upx 30upx 50upx;
	height: 16upx;
	background: rgba(255,255,255,0.6);
	border-radius: 10upx;
	position: relative;
	&>text{
		position: absolute;
		top: 30upx;
	}
	&>text:first-of-type{
		left: 0;
	}
	&>text:last-of-type{
		right: 0;
	}
	.inner{
		width: 30%;
		height: 100%;
		background: #FFF;
		border-radius: 10upx;
		position: relative;
		.dot{
			width: 24upx;
			height: 24upx;
			background: #FFF;
			position: absolute;
			top: -4upx;
			right: -4upx;
			border-radius: 50%;
			text{
				position: absolute;
				top: 35upx;
				left: 0;
				display: inline-block;
				transform: translateX(-20%)
			}
		}
	}
}

.grown-list{
	margin-top: 10upx;
	.list{
		padding: 20upx 0 20upx 40upx;
		position: relative;
		&::before{
			content: '';
			width: 14upx;
			height: 14upx;
			background: #333;
			position: absolute;
			top: 50%;
			left: 0;
			transform: rotate(45deg);
			margin-top: -7upx;
		}
	}
	.coin{
		display: inline-block;
		width: 148upx;
		line-height: 44upx;
		background: rgba(254,154,33,0.2);
		color: #FE9A21;
		text-align: center;
		border-radius: 30upx;
		font-size: 24upx;
		margin-left: 20upx;
	}
}
</style>
