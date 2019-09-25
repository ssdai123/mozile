<template>
	<view>
		<view class="cu-bar tabbar bg-white">
			<view class="action" @tap="handleJump(0)" :class="activeIndex==1?'color-green':'text-gray'">
				<view class="cuIcon">
					<image class="icon" :src="nameArr[0]" mode=""></image>
				</view> 
				首页
			</view>
			<view class="action" @tap="handleJump(1)" :class="activeIndex==2?'color-green':'text-gray'">
				<view class="cuIcon">
					<image class="icon" :src="nameArr[1]" mode=""></image>
				</view> 
				好友
			</view>
			<view class="action text-gray add-action" @tap="handleJump(2)">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发布教育
			</view>
			<view class="action" @tap="handleJump(3)" :class="activeIndex==3?'color-green':'text-gray'">
				<view class="cuIcon">
					<image class="icon" :src="nameArr[2]" mode=""></image>
					<!-- <view class="cu-badge">99</view> -->
				</view>
				消息
			</view>
			<view class="action" @tap="handleJump(4)" :class="activeIndex==4?'color-green':'text-gray'">
				<view class="cuIcon">
					<image class="icon" :src="nameArr[3]" mode=""></image>
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'cu-tab',
		data() {
			return {
				tabUrl: [
					'/pages/home/home',
					'/pages/friend/friend',
					'/pages/pub/pub',
					'/pages/msg/msg',
					'/pages/my/my'
				]
			}
		},
		props: {
			activeIndex: {
				type: String,
				default: '0'
			},
		},
		computed: {
			nameArr() {
				let arr=[];
				for(let i=1;i<5;i++){
					if(i==this.activeIndex){
						arr.push(`../../static/img/icon/icon_tab${i}_active.png`)
					}else{
						arr.push(`../../static/img/icon/icon_tab${i}.png`)
					}
				}
				return arr;
			}
		},
		methods: {
			handleJump(i) {
				let targetUrl = this.tabUrl[i]
				if(i==2){
					
					uni.navigateTo({
						url:targetUrl
					})
				}else{
					uni.redirectTo({
						url:targetUrl
					})
				}
			}
		},
	}
</script>

<style>
</style>
