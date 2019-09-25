<template>
	<view>
		<cu-custom :isBack="true">
			<block slot="content">
				参与人
			</block>
		</cu-custom>	
		<view class="flex justify-around bg-white padding">
			<view class="flex" @tap="checkSex">
				{{sexItem[sexNum]}}
				<text class="iconfont icon-lower-triangle"></text>
			</view>
			<view @tap="checkAge">
				年龄
				<text class="iconfont icon-lower-triangle"></text>
			</view>
			<view @tap="checkCradit">
				信用值
				<text class="iconfont icon-lower-triangle"></text>
			</view>
		</view>
		<view class="cu-card dynamic no-card">
			<view class="cu-list menu-avatar">
				<view v-for="(item,index) in jlist" :key="index" class="cu-item padding-top  padding-bottom">
					<view 
					class="cu-avatar round xl" 
					:style="'background-image:url('+item.jxmember.touxiang+');'">
						<view class="sex-cont boy margin-left-sm">
							<i class="iconfont icon-nanxingmale154"></i>
						</view>
					</view>
					<view class="content flex-sub margin-left">
						<view class="flex-normal">
							{{item.jxmember.nickname}}
							<button class="cu-btn btn-cradit bg-green sm margin-right">
								<image  src="../../static/img/icon/icon_cradit.png" mode=""></image>
								信用值{{item.jxmember.xinyong}}
							</button>
						</view>
						<view class="text-gray text-sm flex justify-between">
							{{item.jxmember.age}}岁 | 178cm | 20-30万 | 射手座
						</view>
						<view class="text-gray text-sm flex">
							<text class="iconfont icon-dingwei"></text>
							{{item.jxmember.jiguandi}}
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				sexItem:['性别','男','女'],
				sexNum:0,
				jlist:[] //参与教育人员信息
			};
		},
		async onLoad(options){
			let id = options.id;
			console.log(id)
			let joinList = await general.generalGET(
				this.global.baseUrl+'selectJxActDetail',
				{
					jxactid:id
				}
			)
			console.log(joinList)
			joinList = joinList.data.JxActParticipate;
			let jLen = joinList.length;
			if(jLen>0){
				for(let i=0;i<jLen;i++){
					joinList[i].jxmember.touxiang = this.global.baseUrl+joinList[i].jxmember.touxiang;
				}
				this.jlist = joinList
			}
		},
		methods: {
			checkSex() {
				let that = this;
				uni.showActionSheet({
					itemList:['男','女'],
					success(res) {
						console.log(res)
						let idx = res.tapIndex;
						that.$data.sexNum = idx+1;
					}
				})
			}
		},
	}
</script>

<style lang="scss">

.cu-card{
	margin-top:20upx; 
	.justify-around{
		.iconfont{
			margin-right: 10rpx;
		}
	}
}
.cu-item{
	height: 170upx !important;
}
</style>
