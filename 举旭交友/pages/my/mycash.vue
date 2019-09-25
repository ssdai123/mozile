<template>
	<view>
		<cu-custom 
		:hasBorder="false" 
		:isBack="true" 
		>
			<block slot="content">
				提现
			</block>
		</cu-custom>
		<view class="cu-form-group">
			<view class="title">提现金额(¥)</view>
			<input class="text-right" placeholder="请输入提现金额" name="input"></input>
		</view>
		<view class="padding bg-white">
			<text class="text-gray">可提现999.00</text>
			<text class="color-green">全部提现</text>
		</view>
		
		<view class="padding margin-top bg-white">
			<view class="">
				提现账户
			</view>
			<view class="account">
				<text class="iconfont icon-zhifubao1 margin-right-xs"></text>
				支付宝
			</view>
			<view class="account">
				<input type="text" value="18712346666"/>
			</view>
		</view>
		
		<button class="cu-btn block lg bg-green margin-lg">
			立即提现
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
.account{
	border: 1upx solid #ececec;
	height: 80upx;
	display: flex;
	align-items: center;
	padding:0 30upx;
	margin-top: 30upx;
	
}
.cu-btn{
	margin-top: 70upx;
}
</style>
