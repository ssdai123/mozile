<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">我的推广码</block>
		</cu-custom>
		<image class="share-bg" src="../../static/img/share/share_qr_bg.png" mode=""></image>
		<view class="cont">
			<view class="inner-cont bg-white">
				<view class="square"></view>
				<view class="square"></view>
				<view class="square"></view>
				<view class="square"></view>
				<view class="inner">
					<view class="tit">
						推广码
					</view>
					<view class="sub-tit">
						立即邀请好友加入
						<image src="../../static/img/share/qr_tit_line.png" mode=""></image>
						<image src="../../static/img/share/qr_tit_line.png" mode=""></image>
					</view>
					<view class="qr-cont">
						<image src="static/img/share/my_qr_wx.png" mode=""></image>
					</view>
					<view class="d-btn flex align-center justify-center">
						<text class="iconfont icon-xiazai text-xxl"></text>
						保存二维码
					</view>
				</view>
			</view>
			
			<view class="share-cont flex justify-around align-center margin padding">
				<view class="flex flex-direction align-center">
					<image src="../../static/img/share/share_wx.png" mode=""></image>
					<text>分享给微信好友</text>
				</view>
				<view class="flex flex-direction align-center">
					<image src="../../static/img/share/share_pyq.png" mode=""></image>
					<text>分享到朋友圈</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
			};
		},
		methods: {
			handleTab(i){
				this.tabIndex = i
			},
		},
	}
</script>

<style lang="scss">
page{
	overflow: hidden;
}
.share-bg,
.cont{
	height: 100%;
	width: 100%;
	position: absolute;
	top: 44px;
	left: 0;
	overflow: hidden;
}

.inner-cont{
	width: 90%;
	margin-top: 25%;
	margin-left: 5%;
	padding: 20upx;
	.inner{
		padding:10upx; 
		border: 1upx solid #CAA686;
		position: relative;
		text-align: center;
		.square{
			height: 28upx;
			height: 31upx;
			background: #CAA686;
			position: absolute;	
		}
		.square:nth-child(1){
			left: 0;
			top:0;
		}
		.square:nth-child(2){
			right: 0;
			top: 0;
		}
		.square:nth-child(3){
			left: 0;
			bottom:0;
		}
		.square:nth-child(4){
			right: 0;
			bottom: 0;
		}
	}
	
	.tit{
		height: 80upx;
		width: 274upx;
		text-align: center;
		background: #CAA686;
		position: absolute;
		left: 50%;
		top: -40upx;
		transform: translateX(-50%);
		color: #FFF;
		line-height: 80upx;
		font-size: 44upx;
		font-style: italic;
		letter-spacing: 10upx;
		padding-left: 10upx;
		&::before,
		&::after{
			content: '';
			height:0;
			width: 0;
			border-style: solid;
			border-width: 10upx;
			border-color: transparent #AA8C71 #AA8C71 transparent;
			position: absolute;
			top: 0;
		}
		&::before{
			left: -19upx;
		}
		&::after{
			right: -19upx;
			transform: rotate(90deg)
		}
	}
	
	.sub-tit{
		color: #CAA686;
		font-size: 40upx;
		display: inline-block;
		margin-top: 70upx;
		position: relative;
		image{
			width: 70upx;
			height: 10upx;
			position: absolute;
			top: 20upx;
		}
		image:first-child{
			left: -80upx;
		}
		image:last-child{
			right: -80upx;
		}
	}
	.qr-cont{
		width: 316upx;
		height: 316upx;
		border: 4upx solid #CAA686;
		padding: 20upx;
		margin:50upx auto;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.d-btn{
		background-color: none;
		border: 1upx solid #1F2026;
		width: 345upx;
		height: 75upx;
		border-radius: 40upx;
		margin:40upx auto;
		.iconfont{
			font-size: 40upx;
		}
	}
}

.share-cont{
	image{
		height: 62upx;
		width: 62upx;
		margin-bottom: 20upx
	}
}
</style>
