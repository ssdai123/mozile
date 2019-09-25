<template>
	<view>
		<cu-custom 
		:hasBorder="true" 
		:isBack="true" 
		>
			<block slot="content">
				申请成为发布人
			</block>
		</cu-custom>
		<view class="apply-top">
			<image src="../../static/img/bg_apply.png" mode=""></image>
			<view class="inner flex flex-direction justify-center align-center">
				<view class="tit text-xl margin-bottom-sm">
					申请成为发布人
				</view>
				<text>信用值满800后即可申请成为发起人</text>
			</view>
		</view>
		
		<view class="grown-cont padding bg-white">
			如何才能成为教育发布人？
			<view class="grown-list">
				<view class="list flex justify-between align-center">
					<view class="flex align-center">
						完善个人资料1元
						<text class="coin">+5信用值</text>
					</view>
					<button class="cu-btn bg-ccc text-white round sm">
						去完成
					</button>
				</view>
				
				<view class="list flex justify-between align-center">
					<view class="flex align-center">
						至少参加两次活动
						<text class="coin">+5信用值</text>
					</view>
					<button class="cu-btn bg-ccc text-white round sm">
						已完成
					</button>
				</view>
				
				<view class="list flex justify-between align-center">
					<view class="flex align-center">
						申请成为发起人
						<!-- <text class="coin">+5成长值</text> -->
					</view>
					<button class="cu-btn bg-brown text-white round sm" @tap="handleApply">
						立即申请
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
				
			};
		},
		methods: {
			handleApply() {
				uni.showModal({
					confirmColor:'#2DDBC4',
					content:'是否确定申请成为教育发布人～',
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
.icon-xiangji{
	margin-right: 30upx;
}
.cu-list.menu>.cu-item .content{
	line-height: 01em;
}
.apply-top{
	height: 340upx;
	position: relative;
	color: #FFF;
	&>image{
		height: 100%;
		width: 100%;
	}
	.inner{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.tit{
		padding: 20upx 60upx;
		border: 1upx solid #D8D8D8;
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
