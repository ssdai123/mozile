<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">设置密码</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">设置密码</view>
				<input placeholder="请设置不少于8位数字母加数字密码" name="pwd1"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">再次确认</view>
				<input placeholder="请确认密码" name="pwd2"></input>
			</view>
			
			<view class="padding margin">
				<button class="cu-btn block lg bg-green margin">
					设置
				</button>
			</view>		
		</form>
		
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
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.cu-form-group+.cu-form-group{
		border: none;
	}
	.icon-cont{
		width: 160upx;
		height: 160upx;
		text-align: center;
		line-height: 160upx;
		position: absolute;
		top: -80upx;
		left: 50%;
		margin-left: -80upx;
		border-radius: 50%;
		image{
			height: 100%;
			width: 100%;
		}
	}
</style>
