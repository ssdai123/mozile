<template>
	<view>
		<cu-custom  :isBack="false" :hasBorder="true">
			<block slot="content">
				好友列表				
			</block>
		</cu-custom>
		<view class="flex solid-bottom padding justify-around bg-white">
			<view @tap="handleFocus(0)" class="padding-sm margin-xs flex flex-direction text-center">
				{{fTogNum}}
				<text class="color-gray margin-top-xs">互相关注</text>
			</view>
			<view @tap="handleFocus(1)" class="padding-sm margin-xs flex flex-direction text-center">
				{{fOtherNum}}
				<text class="color-gray margin-top-xs">我的关注</text>
			</view>
			<view @tap="handleFocus(2)" class="padding-sm margin-xs flex flex-direction text-center">
				{{fMeNum}}
				<text class="color-gray margin-top-xs">关注我的人</text>
			</view>
		</view>
		
		<view class="no text-center color-gray margin-top" v-if="flist.length==0">
			暂无互相关注好友
		</view>
		<view class="cu-list menu-avatar margin-top">
			<view class="cu-item" v-for="(item,index) in flist" :key="index" @tap="handleDetail(item.phone)">
				<view class="cu-avatar round lg" :style="'background-image:url('+baseurl+item.touxiang+');'"></view>
				<view class="content">
					<view>{{item.nickname}}</view>
					<!-- <view class="text-gray text-sm flex">
						徒儿，快来练功~
					</view> -->
				</view>
			</view>
		</view>
		
		<cu-tab activeIndex="2"></cu-tab>
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				flist:[],
				fTogNum:0, //互相关注数量
				fOtherNum:0, //我关注的数量
				fMeNum:0 //关注我的数量
			};
		},
		onShow(){
			this.loadFocusTog()
		},
		methods: {
			async loadFocusTog(){ //加载互相关注的好友
				let focTog = await general.generalGET(
					this.global.baseUrl + 'getMutualGuanZhu',
					{},
					{token:this.token}
				)
				console.log(focTog);
				if(focTog.data.code == 'OK'){
					let ftog = focTog.data.jxfollow;
					let fArr = [];
					for(let i=0;i<ftog.length;i++){
						fArr.push(ftog[i].jxmember1)
					}
					this.flist = fArr
					
					this.fTogNum = focTog.data.count2;
					this.fOtherNum = focTog.data.count;
					this.fMeNum = focTog.data.count1;
				}
			},
			handleFocus(i) {
				uni.navigateTo({
					url:'friendcfy?t='+i
				})
			},
			handleBad(){
				uni.navigateTo({
					url:'friendbad'
				})
			},
			handleFriendList(){
				uni.navigateTo({
					url:'../msg/timeflow'
				})
			}
		},
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 140upx;
	}
</style>
