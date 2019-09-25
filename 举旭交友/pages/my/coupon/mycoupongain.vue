<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">如何获取抵用券</block>
		</cu-custom>
		<view class="padding">
			<view class="margin">
				1、注册完成认证并缴费后，获得单次抵用券；
			</view>
			<view class="margin">
				2、注册完成认推广用户注册完成并认证缴费后，推广者获得多次抵用券。
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
	background: #FFF;
}
</style>
