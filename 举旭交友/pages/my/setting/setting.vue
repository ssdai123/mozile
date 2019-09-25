<template>
	<view>
		<cu-custom :hasBorder="false" :isBack="true">
			<block slot="content">设置</block>
		</cu-custom>
		
		
		
		<view class="cu-list menu margin-top">
			<view class="cu-item arrow" @tap="handleSetting(0)">
				<view class="content">
					<text class="text-grey">意见反馈</text>
				</view>
			</view>
			<view class="cu-item arrow" @tap="handleSetting(1)">
				<view class="content">
					<text class="text-grey">设置/修改密码</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu margin-top" @tap="handleSetting(2)">
			<view class="cu-item arrow">
				<view class="content">
					<text class="text-grey">关于我们</text>
				</view>
			</view>
		</view>
		<view class="padding margin">
			<button class="u-btn lg block bg-green">
				退出登录
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				settingUrl:[
					'feedback',
					'setpassword',
					'aboutus'
				]
			};
		},
		methods: {
			 handleSetting(i) {
				let path = this.settingUrl[i]
				uni.navigateTo({
					url:path
				})
			}
		},
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 140upx;
	}
.icon-xiangji{
	margin-right: 30upx;
}
.cu-list.menu>.cu-item .content{
	line-height: 01em;
}
</style>
