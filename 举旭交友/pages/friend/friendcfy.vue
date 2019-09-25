<template>
	<view @tap="navHideFn">
		<cu-custom  :isBack="true" :hasBorder="true">
			<block slot="content">
				{{friendType[n]}}				
			</block>
			<block slot="right">
				<view class="padding-right" v-if="n!=2" @tap.stop="navToggleFn">
					<text class="iconfont icon-iconqita text-xxl"></text>
				</view>				
			</block>
		</cu-custom>
		<view class="nav-right-drop text-white bg-green" v-if="nav2Show" @tap="navHideFn">
			<view class="cu-list menu radius bg-green">
				<view class="cu-item  bg-green">
					<view class="content" @tap="scan">
						扫一扫加关注
					</view>
				</view>
				<view class="cu-item  bg-green">
					<view class="content" @tap="qrshow">
						我的二维码
					</view>
				</view>
			</view>
		</view>
		<view class="cu-form-group" v-if="n!=2">
			<!-- <view class="title">输入框</view> -->
			<input v-model="searchText" @confirm="handleSearch" confirm-type="search"  placeholder="输入手机号/交友号" name="input"></input>
		</view>
		
		<view class="qr-text" @tap="qrshow" v-if="n!=2">
			我的交友号：{{uinfo.jiaoyounumber}}
			<i class="iconfont icon-erweima color-green" ></i>
		</view>
		
		<view class="cover" v-if="qrShow" @tap="qrhide">
			<view class="qr-cont" @tap.stop="">
				<image :src="qrImg" mode="aspectFill"></image>
				<view class="line">
					<text class="iconfont icon-chahao" @tap="qrhide"></text>
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-e5e5 solid-bottom" :class="[n!=2?'margin-top':'']">
			<view class="action color-888">
				{{friendType[n]}}
			</view>
		</view>
		<!-- <view v-else class="cu-bar bg-e5e5 solid-bottom">
			<view class="action color-888">
				已关注好友
			</view>
		</view> -->
		<view class="cu-list menu-avatar">
			<view class="no text-center color-gray margin-top" v-if="flist.length==0">
				暂无数据
			</view>
			<view class="cu-item" v-for="(item,index) in flist" :key="index" @tap="handleDetail(item.phone)">
				<view class="cu-avatar round lg" :style="'background-image:url('+baseurl+item.touxiang+');'"></view>
				<view class="content">
					<view>{{item.nickname}}</view>
					<view class="text-gray text-sm flex">
						徒儿，快来练功~
					</view>
				</view>
				<button 
				class="cu-btn shadow" 
				:class="[n==2?'bg-green':'']" 
				:disabled="n!=2"
				@tap.stop="handleFocus(item.userid)">
					{{n==0?'互相关注':''}}
					{{n==1?'已关注':''}}
					{{n==2?'加关注':''}}
				</button>
			</view>
			<!-- <view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view>张无忌</view>
					<view class="text-gray text-sm flex">
						这就来，这就来~
					</view>
				</view>
				<button class="cu-btn shadow" @tap="showModal" data-target="menuModal">
					互相关注
				</button>
			</view> -->
			
		</view>
	</view>
</template>

<script>
	import general from '../../common/utils/general.js';
	// #ifdef APP-PLUS
	import permision from "../../common/utils/permission.js"
	// #endif
	export default {
		data() {
			return {
				baseurl:'',
				nav2Show:false, //右上角下拉控制
				qrShow:false,
				n:0, //控制显示的关注类型
				friendType:['互相关注','我的关注','关注我的人'],
				searchText:'17623885317', //根据手机号或交友好查找用户
				flist:[],
				jxnum:'', //用户交友号
				phone:'', //用户手机
				qrImg:''  //交友二维码
				
			};
		},
		onLoad(options) {
			this.baseurl = this.global.baseUrl
			let t = options.t; //根据上个页面传递的不同参数，展示不同类型的好友数据
			this.n = t;
			
			this.uinfo = this.userinfo;
			console.log(this.userinfo)
			
			// 服务端下发的关注数量:count(我关注的) count1(关注我的)  count2(互相关注)
			if(t==0){ // 互相关注的
				this.loadFocusTog()
			}
			if(t==1){ // 我关注的
				this.loadFocusOthers()
			}
			if(t==2){ // 关注我的
				this.loadFocusMe()
			}
			
			this.getQrImg(); //加载交友二维码
			
		},
		methods: {
			async scan() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				if (status !== 1) {
					return;
				}
				// #endif
				uni.scanCode({
					 success:async res => {
						let scanUrl = res.result;
						uni.showLoading()
						let scanData = await general.generalGET(
							scanUrl
						)
						console.log(scanData)
						uni.hideLoading()
						if(scanData.data.code == 'OK'){
							let sData = scanData.data.jxmember
							this.flist = [sData];
						}
					},
					fail: err => {
						console.log(err);
					}
				});
			}
			// #ifdef APP-PLUS
			,
			async checkPermission(code) {
				let status = permision.isIOS ? await permision.requestIOS('camera') : await permision.requestAndroid(
					'android.permission.CAMERA');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: '需要相机权限',
						confirmText: '设置',
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					});
				}
				return status;
			}
			// #endif
			,
			async handleSearch(){ //搜索框回车事件函数
				let v = this.searchText.trim();
				if(v!=''){
					uni.showLoading()
					let friendData = await general.generalGET(
						this.global.baseUrl+'selectJxMenber',
						{val:v}
					)
					console.log(friendData)
					uni.hideLoading()
					if(friendData.data.code == 'OK'){
						let fData = friendData.data.jxmember
						this.flist = [fData];
					}
				}else{
					uni.showToast({
						title:'请输入交友信息',
						icon:'none'
					})
				}
			},
			async handleFocus(uid){ //关注好友事件函数
				if(this.token){
					let focus = await general.generalGET(
						this.global.baseUrl + 'AddGuanZhu',
						{fususerid:uid},
						{token:this.token}
					)
				}else{
					uni.showToast({
						title:'请先登录',
						icon:'none'
					})
					let t = setTimeout(()=>{
						uni.navigateTo({
							url:'../login/login'
						})
						clearTimeout(t)
					},1000)
				}
			},
			async getQrImg(){ //获取交友图片
				let qr = await general.generalGET(
					this.global.baseUrl + 'Byerweima',
					{number:this.uinfo.jiaoyounumber}
				)
				console.log(qr);
				let b = 'data:img/jpg;base64,';
				let qrSrc = '';
				if(qr.data.code == 'OK'){
					qrSrc = b + qr.data.binary
				}
				this.qrImg = qrSrc.replace(/[\r\n]/g, "");
			},
			async loadFocusOthers(){ //加载我关注的好友
				let focOther = await general.generalGET(
					this.global.baseUrl + 'getMyGuanZhu',
					{},
					{token:this.token}
				)
				// console.log(focOther);
				if(focOther.data.code == 'OK'){
					let fother = focOther.data.jxfollow;
					let fArr = [];
					for(let i=0;i<fother.length;i++){
						fArr.push(fother[i].jxmember1)
					}
					this.flist = fArr
				}
			},
			async loadFocusTog(){ //加载互相关注的好友
				let focTog = await general.generalGET(
					this.global.baseUrl + 'getMutualGuanZhu',
					{},
					{token:this.token}
				)
				// console.log(focTog);
				if(focTog.data.code == 'OK'){
					let ftog = focTog.data.jxfollow;
					let fArr = [];
					for(let i=0;i<ftog.length;i++){
						fArr.push(ftog[i].jxmember1)
					}
					this.flist = fArr
					
					this.fTogNum = ftog.count2;
					this.fOtherNum = ftog.count;
					this.fMeNum = ftog.count1;
				}
			},
			async loadFocusMe(){ //加载关注我的好友
				let focMe = await general.generalGET(
					this.global.baseUrl + 'getGuanZhuMy',
					{},
					{token:this.token}
				)
				// console.log(focMe);
				if(focMe.data.code == 'OK'){
					let fme = focMe.data.jxfollow;
					let fArr = [];
					for(let i=0;i<fme.length;i++){
						fArr.push(fme[i].jxmember1)
					}
					this.flist = fArr
				}
			},
			handleDetail(p){ //查看用户发布的动态
				uni.navigateTo({
					url:'../msg/timeflow?search='+p
				})	
			},
			qrshow() {
				this.qrShow = true
			},
			qrhide(){
				this.qrShow = false
			},
			navToggleFn() {
				this.nav2Show = !this.nav2Show
			},
			navHideFn() {
				this.nav2Show = false
			},
		}
		
	}
</script>

<style lang="scss">
.icon-iconqita{
	font-size: 40upx;
}
.nav-right-drop{
	z-index: 10000;
	position: fixed;
	top: 140upx;
	right: 10upx;
	width: 260upx;
	&::before{
		background: #2DDBC4;
	}
	.cu-list.menu>.cu-item{
		min-height: 100upx;
		border-color: #FFF;
	}
}
.cu-bar{
	min-height: 80upx;
}
.cu-form-group{
	margin: 20upx 0;
}
.qr-text{
	text-align: center;
	margin-bottom: 20upx;
	display: flex;
	justify-content: center;
	align-items: center;
	.iconfont{
		margin-left: 10upx;
		font-size: 36rpx;
	}
}
.cu-list{
	.cu-btn{
		background: #D6DCDB;
		color: #FFF;
		margin-right: 10upx;
		width: 180upx;
	}
}

.qr-cont{
	height: 600upx;
	width: 600upx;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -300upx 0 0 -300upx;
	background: #FFF;
	padding: 60upx;
	box-sizing: border-box;
	image{
		width: 100%;
		height: 100%
	}
	.line{
		position: absolute;
		bottom: -100upx;
		left: 50%;
		margin-left: -1upx;
		background: #FFF;
		width: 2upx;
		height: 100upx;
		.iconfont{
			font-size: 48upx;
			position: absolute;
			bottom: -48upx;
			left: -24upx;
			color: #FFF;
		}
	}
}
</style>
