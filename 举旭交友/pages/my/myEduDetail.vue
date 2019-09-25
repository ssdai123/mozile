<template>
	<view>
		<view class="fixed">
			<cu-custom bgColor="bg-opacity text-white" :hasBorder="false">
				<block slot="backText">
					<view class="nav-icon-cont">
						<i class="iconfont icon-fenxiang"></i>
					</view>
				</block>
				<block slot="right">
					<view class="nav-icon-cont margin-right">
						<i class="iconfont icon-iconqita"></i>
					</view>
				</block>
			</cu-custom>
		</view>
		<view class="cover" v-if="nav2Show" @tap="navHideFn">
			<view class="nav-right-drop color-333">
				<view class="cu-list menu radius">
					<view class="cu-item">
						<view class="content color-333">
							<i class="iconfont icon-jinggao color-green margin-right-xs"></i>
							投诉
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<i class="iconfont icon-chahao color-green margin-right-xs"></i>
							不感兴趣
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="flow-slide">
			<swiper :indicator-dots="true">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/img/goods/timeflow.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/img/goods/timeflow.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/img/goods/timeflow.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="user-info">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="content">
						<view>214我们一起去流浪地球456</view>
						<view class="flex align-end">
							<text class="color-yellow text-lg margin-right-xs">￥48</text>
							<text class="color-gray text-xs margin-top-xs">元/位</text>
						</view>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow has-line flex">
							<image class="btn-line" src="../../static/img/icon/btn_line.png" mode=""></image>
							立即参与
						</button>
					</view>
				</view>
			</view>
		</view>

		<!-- 弹出层 -->
		<view class="cover" v-if="isShow" @tap="coverHide">
			<view class="cover-cont" @tap.stop="">
				<view class="flex flex-direction align-center padding">
					<text class="text-sm color-gray">需支付报名费</text>
					<text class="text-lg margin-top-sm">¥48</text>
				</view>
				<view class="cu-list menu">
					<view class="cu-item arrow">
						<view class="content">
							<text class="text-grey">支付方式</text>
						</view>
						<view class="action">
							<text class="iconfont icon-zhifubao1 margin-right-xs"></text>
							<text class="text-gray">支付宝</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">优惠券</text>
						</view>
						<view class="action">
							<text class="text-gray">暂无可用抵用券</text>
						</view>
					</view>
				</view>
				<view class="padding-left-xl padding-right-xl">
					<button class="cu-btn block bg-green margin round lg">
						立即支付
					</button>
				</view>
				<view class="agree text-center padding-bottom">
					<i class="iconfont icon-duihao color-green margin-right-xs"></i>
					<text class="color-gray">是否同意</text>
					<text class="color-green">《活动某某协议》</text>
				</view>
				<view class="line">
					<text class="iconfont icon-chahao" @tap="coverHide"></text>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group margin-top">
			<view class="title">活动是否开启</view>
			<!-- #ifdef MP-ALIPAY -->
			<!-- <switch  @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#25928B"></switch> -->
			<!-- #endif -->

			<!-- #ifndef MP-ALIPAY -->
			<switch class="cyan" @tap="SwitchB" disabled="true" :class="switchB?'checked':''" :checked="switchB?true:false"  color="#25928B"></switch>
			<!-- #endif -->
		</view>


		<view class="cu-list menu margin-top-sm">
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-riqi fs-32 margin-right-xs"></text>
					<text class="text-grey">2019-09-12 19:00</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-dizhi fs-32 margin-right-xs"></text>
					<text class="text-grey">上海市高新区某某某某详细地址</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-renwu fs-32 margin-right-xs"></text>
					<text class="text-grey">教育发起人：张三</text>
				</view>
			</view>
			<view class="cu-item  margin-top-sm">
				<view class="content">
					<text class="iconfont icon-hongqi fs-32 margin-right-xs"></text>
					<text class="text-grey">参与人(</text>
					<text class="color-green">30</text>
					<text class="text-grey">/60人)</text>
				</view>
				<view class="action flex color-gray" @tap="handleJoinList">
					更多
					<text class="iconfont icon-shuangjiantou-right fs-32"></text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-avatar-group">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				nav2Show:false, //控制左上角点击遮罩
				switchB:true
			};
		},
		methods: {
			coverShow() {
				this.isShow = true
			},
			coverHide() {
				this.isShow = false
			},
			navShowFn() {
				this.nav2Show = true
			},
			navHideFn() {
				this.nav2Show = false
			},
			handleJoinList(){
				uni.navigateTo({
					url:'../home/joinlist'
				})
			},
			SwitchB(e) {
				let that = this;
				uni.showModal({
					confirmColor:'#2DDBC4',
					content:'是否确定关闭该活动?',
					cancelText:'下次再说',
					confirmText:'立即申请',
					cancelColor:'#888',
					success:function(s) {
						console.log(s)
						if(s.confirm){
							that.switchB = false
						}
						if(s.cancel){
							that.switchB = true
						}
						
					},
					fail:function(){
						console.log(2)
						that.switchB = false
					}
				})
				
			}
		},
	}
</script>

<style lang="scss">
	.flow-slide {
		margin-top: -160upx;

		swiper,
		swiper-item {
			height: 500upx;

			// border: 1px solid red;
			image {
				width: 100%;
				height: 500upx;
			}
		}

	}

	.cu-btn.has-line {
		width: 170upx;
		right: 90upx;
		font-size: 24upx;
		position: relative;

		.btn-line {
			width: 40upx;
			height: 10upx;
			position: absolute;
			top: 8upx;
			left: 16upx;
		}
	}

	.user-info {
		background: #FFF;
		padding: 10upx 0;
		position: relative;
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
		margin-top: -30upx;
		overflow: hidden;

		.cu-avatar.lg {
			height: 120upx;
			width: 120upx;
		}

		.cu-list.menu-avatar>.cu-item:after {
			height: 0;
			border-bottom: none;
		}

		.cu-list.menu-avatar>.cu-item {
			height: 130upx;

		}

		.cu-list.menu-avatar>.cu-item .content {
			left: 30upx;
			top: 20upx;
		}

		.focus {
			color: #DB2D4E;
			border: 1upx solid #DB2D4E;
			width: 168upx;
			height: 48upx;
			border-radius: 30upx;
			text-align: center;

			.iconfont {
				margin-right: 10upx;
			}
		}

		.cradit {
			background: #2DDBC4;
			color: #FFF;
			width: 170upx;
			height: 48upx;
			font-size: 26upx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 6upx;
			position: absolute;
			top: 50upx;
			right: 30upx;

			image {
				width: 26upx;
				height: 26upx;
			}
		}
	}


	.cu-card {
		margin-top: 20upx;

		.justify-around {
			.iconfont {
				margin-right: 10rpx;
			}
		}
	}

	.cu-avatar-group {
		direction: ltr
	}
</style>
