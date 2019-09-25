<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">绑定手机号</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">手机号</view>
				<input placeholder="请输入手机号码" name="pwd1"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="pwd2"></input>
				<button class='cu-btn bg-opacity round text-sm'>获取验证码</button>
			</view>
			
			<view class="padding margin">
				<button class="cu-btn block lg bg-green margin">
					确定
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
		},
	}
</script>

<style lang="scss">
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.cu-form-group+.cu-form-group{
		border: none;
	}
	.cu-btn.bg-opacity{
		border: 1upx solid #2DDBC4;
		background-color: rgba(45,219,196,0.1) !important;
		color: #2DDBC4;
	}
</style>
