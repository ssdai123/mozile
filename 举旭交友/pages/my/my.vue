<template>
	<view>
		<cu-custom :hasBorder="false" :isBack="false">
			<block slot="backText">
				<view @tap="handleCertify">
					未认证
				</view>
			</block>
			<block slot="right">
				<i class="iconfont icon-xiangji fs-40" @tap="handleMypub"></i>
			</block>
		</cu-custom>
		<view @tap="login" class="flex flex-direction align-center bg-white padding-top">
			<view class="cu-avatar xl round" :style="'background-image:url('+uinfo.touxiang+');'"></view>
			<view class="text-center margin-top-xs">
				{{uinfo.nickname==null?'未知':uinfo.nickname}}
				<i class="iconfont icon-erweima fs-32 color-green"></i>
			</view>
		</view>
		<view class="flex solid-bottom padding justify-around bg-white">
			<view @tap="handleCradit" class="padding-sm margin-xs flex flex-direction text-center">
				{{uinfo.xinyong==null?'0':uinfo.xinyong}}
				<text class="color-gray margin-top-xs">信用值(分)</text>
			</view>
			<view @tap="handleEarn" class="padding-sm margin-xs flex flex-direction text-center">
				{{uinfo.income==null?'0':uinfo.income}}
				<text class="color-gray margin-top-xs">收益(元)</text>
			</view>
		</view>
		
		<view class="cu-list menu margin-top">
			<view class="cu-item arrow" @tap="handleMyList(0)">
				<view class="content">
					<image src="../../static/img/icon/my_icon1.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">我的成长值</text>
				</view>
			</view>
			
			<view class="cu-item arrow" @tap="handleMyList(1)">
				<view class="content">
					<image src="../../static/img/icon/my_icon2.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">我的活动</text>
				</view>
			</view>
			
			<view class="cu-item arrow " @tap="handleMyList(2)">
				<view class="content">
					<image src="../../static/img/icon/my_icon3.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">我的资料</text>
				</view>
				<view class="color-green">
					{{infoPerCent}}
				</view>
			</view>
			
			<view class="cu-item arrow" @tap="handleMyList(3)">
				<view class="content">
					<image src="../../static/img/icon/my_icon4.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">偏好设置</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu" @tap="handleMyList(4)">
			<view class="cu-item arrow">
				<view class="content">
					<image src="../../static/img/icon/my_icon5.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">我的推广码</text>
				</view>
			</view>
			
			<view class="cu-item arrow" @tap="handleMyList(5)">
				<view class="content">
					<image src="../../static/img/icon/my_icon6.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">我的抵用券</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu" @tap="handleMyList(6)">
			<view class="cu-item arrow">
				<view class="content">
					<image src="../../static/img/icon/my_icon7.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">法律声明</text>
				</view>
			</view>
			
			<view class="cu-item arrow" @tap="handleMyList(7)">
				<view class="content">
					<image src="../../static/img/icon/my_icon8.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">设置</text>
				</view>
			</view>
		</view>
		<cu-tab activeIndex="4"></cu-tab>
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				infoPerCent:0,
				uinfo:{ //存储用户信息
					touxiang:'../../static/img/im/face/face_4.jpg',
					nickname:'尚未登录',
					xinyong:0,
					income:0,
				}, 
				myListUrl:[
					'/pages/my/mygrowth',
					'/pages/my/myedu',
					'/pages/my/myInfomation',
					'/pages/my/myprefer',
					'/pages/my/myshare',
					'/pages/my/coupon/mycoupon',
					'/pages/my/mydeclear',
					'/pages/my/setting/setting',
					
				]
			};
		},
		async onShow() {
			if(this.token){
				let uinfo = await general.generalGET(
					this.global.baseUrl+'ByUserIdGetMember',
					{},
					{token:this.token}
				)
				console.log(uinfo)
				if(uinfo.data.code == 'OK'){
					let u = uinfo.data.jxMember;
					u.touxiang = this.global.baseUrl + u.touxiang
					this.uinfo = u;
				}
				
				try {
				    const value = uni.getStorageSync('infoPerCent');
				    if (value>0) {
						console.log( value )
				        this.infoPerCent=value+"%";
				    }
				} catch (e) {
				    console.log(e);
				}
				
			}
			
		},
		methods: {
			login(){
				if(!this.userinfo){
					wx.navigateTo({
						url:'../login/login'
					})
				}
			},
			handleMyList(i) {
				let path = this.myListUrl[i];
				if(i<6 && !this.token){
					uni.showToast({
						title:'请您登录后再操作'
					})
					let t = setTimeout(()=>{
						uni.navigateTo({
							url:'../login/login'
						})
					},1000)
					return false;
				}
				uni.navigateTo({
					url:path
				})
			},
			handleCradit(){ //信用
				uni.navigateTo({
					url:'mycradit'
				})
			},
			handleEarn(){ //收益
				uni.navigateTo({
					url:'myearn'
				})
			},
			handleCertify(){ //认证
				uni.navigateTo({
					url:'../pub/certificate'
				})
			},
			handleMypub(){ //发布动态
				uni.navigateTo({
					url:'./mypub/mypub'
				})
			},
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
