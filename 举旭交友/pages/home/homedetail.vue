<template>
	<view>
		<view class="fixed">
			<cu-custom bgColor="bg-opacity text-white" :hasBorder="false" :isBack="true" >
				<block slot="right">
					<view class="flex">
						<view class="nav-icon-cont margin-right" @tap="handleShare">
							<i class="iconfont icon-fenxiang"></i>
						</view>
						<view class="nav-icon-cont margin-right" @tap="navShowFn">
							<i class="iconfont icon-iconqita"></i>
						</view>
					</view>
				</block>
			</cu-custom>
		</view>
		<view class="cover" v-if="nav2Show" @tap="navHideFn">
			<view class="nav-right-drop color-333">
				<view class="cu-list menu radius">
					<view class="cu-item" @tap="complainFn">
						<view class="content color-333 flex">
							<i class="iconfont icon-jinggao color-green margin-right-xs"></i>
							投诉
						</view>
					</view>
					<view class="cu-item">
						<view class="content flex">
							<i class="iconfont icon-chahao color-green margin-right-xs"></i>
							不感兴趣
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="flow-slide">
			<swiper :indicator-dots="true">
				<swiper-item v-for="(item,index) in detail.pic1" :key="index">
					<view class="swiper-item">
						<image :src="baseurl+item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="user-info">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="content">
						<view class="my-ellipsis">{{detail.name}}</view>
						<view class="flex align-end">
							<text class="color-yellow text-lg margin-right-xs">￥{{detail.baomingfei}}</text>
							<text class="color-gray text-xs margin-top-xs">元/位</text>
						</view>
					</view>
					<view class="action">
						<button @tap="getOrder(detail.id)" :disabled="isJoin" class="cu-btn round bg-green shadow has-line flex">
							<image class="btn-line" src="../../static/img/icon/btn_line.png" mode=""></image>
							{{isJoin?'已参与':'立即参与'}}
						</button>
					</view>
				</view>
			</view>
		</view>

		<!-- 弹出层 -->
		<view class="cover" v-if="isShow" @tap="coverHide">
			<view class="cover-cont" @tap.stop="">
				<view class="flex flex-direction align-center padding">
					<text class="text-sm color-gray">需支付报名费</text>
					<text class="text-lg margin-top-sm">¥48</text>
				</view>
				<view class="cu-list menu">
					<view class="cu-item arrow">
						<view class="content">
							<text class="text-grey">支付方式</text>
						</view>
						<view class="action">
							<text class="iconfont icon-zhifubao1 margin-right-xs"></text>
							<text class="text-gray">支付宝</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">优惠券</text>
						</view>
						<view class="action">
							<text class="text-gray">暂无可用抵用券</text>
						</view>
					</view>
				</view>
				<view class="padding-left-xl padding-right-xl">
					<button @tap="paynow" class="cu-btn block bg-green margin round lg">
						立即支付
					</button>
				</view>
				<view class="agree padding-bottom text-center">
					<i class="iconfont icon-duihao color-green margin-right-xs"></i>
					<text class="color-gray">是否同意</text>
					<text class="color-green">《活动某某协议》</text>
				</view>
				<view class="line">
					<text class="iconfont icon-chahao" @tap="coverHide"></text>
				</view>
				<!-- 选择支付方式 -->
				<view class="check-pay">
					<view class="cu-list menu ">
						<view class="cu-item" @tap="paystate=0">
							<view class="content flex align-center justify-start">
								<text class="iconfont icon-zhifubao1 fs-36 margin-left"></text>
								<text class="text-grey margin-left-sm">支付宝</text>
							</view>
							<view class="action">
								<text v-if="paystate==0" class="iconfont icon-duihao1 margin-right color-green"></text>
							</view>
						</view>
						<view class="cu-item" @tap="paystate=1">
							<view class="content flex align-center justify-start">
								<text class="iconfont icon-weixin fs-36"></text>
								<text class="text-grey margin-left-sm">微信</text>
							</view>
							<view class="action">
								<text v-if="paystate==1" class="iconfont icon-duihao1 margin-right color-green"></text>
							</view>
						</view>
						<view class="cu-item" @tap="paystate=2">
							<view class="content flex align-center justify-start">
								<text class="iconfont icon-jiezhang-diyongquan fs-36 margin-left"></text>
								<text class="text-grey margin-left-sm">多次抵用券</text>
							</view>
							<view class="action">
								<text v-if="paystate==2" class="iconfont icon-duihao1 margin-right color-green"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>


		<view class="cu-list menu margin-top-sm">
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-riqi fs-32 margin-right-xs"></text>
					<text class="text-grey">
						开始时间：{{detail.baomingstartime}}
					</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-riqi fs-32 margin-right-xs"></text>
					<text class="text-grey">
						结束时间：{{detail.baomingendtime}}
					</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-dizhi fs-32 margin-right-xs"></text>
					<text class="text-grey">{{detail.diyu}} {{detail.address}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="iconfont icon-renwu fs-32 margin-right-xs"></text>
					<text class="text-grey">教育发起人：{{jxuser.nickname}}</text>
				</view>
			</view>
			<view class="cu-item  margin-top-sm">
				<view class="content">
					<text class="iconfont icon-hongqi fs-32 margin-right-xs"></text>
					<text class="text-grey">参与人(</text>
					<text class="color-green">{{joinlist.length}}</text>
					<text class="text-grey">/{{detail.baomingminimum}}人)</text>
				</view>
				<view class="action">
					<view class="flex align-center color-gray" @tap="handleJoinList(detail.id)">
						更多
						<text class="iconfont icon-shuangjiantou-right fs-32"></text>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-avatar-group">
						<view 
						class="cu-avatar round" 
						v-for="(item,index) in joinlist" 
						:key="index" 
						:style="'background-image:url('+baseurl+item.jxmember.touxiang+');'"></view>
						
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	// #ifdef APP-PLUS
	// 如下为分享内容定义，可根据业务需求自行定义
	var strShareUrl = "http://www.daichen.club"
	var strShareTitle = "举旭交友，交友神器"
	var strShareSummary = "交友、活动、发布功能全覆盖"
	var strShareImageUrl = "http://www.daichen.club/upload/image/logo.jpg"
	
	//以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
	var screenWidth = plus.screen.resolutionWidth
	//以360px宽度屏幕为例，上下左右边距及2排按钮边距留25像素，图标宽度55像素，同行图标间的间距在360宽的屏幕是30px，但需要动态计算，以此原则计算4列图标分别的left位置
	//图标下的按钮文字距离图标5像素，文字大小12像素
	//底部取消按钮高度固定为44px
	//TODO 未处理横屏和pad，这些情况6个图标应该一排即可
	var margin = 25,
		iconWidth = 55,
		icontextSpace = 5,
		textHeight = 12
	var left1 = margin / 360 * screenWidth
	var iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
	if (iconSpace <= 5) { //屏幕过窄时，缩小边距和图标大小，再算一次
		margin = 15
		iconWidth = 40
		left1 = margin / 360 * screenWidth
		iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
	}
	var left2 = left1 + iconWidth + iconSpace
	var left3 = left1 + (iconWidth + iconSpace) * 2
	var left4 = left1 + (iconWidth + iconSpace) * 3
	var top1 = left1
	var top2 = top1 + iconWidth + icontextSpace + textHeight + left1
// 	console.log("screenWidth: " + screenWidth + " ;height: " + plus.screen.resolutionHeight);
// 	console.log("left1: " + left1);
// 	console.log("iconSpace: " + iconSpace);
	var nvMask = new plus.nativeObj.View("nvMask", { //先创建遮罩层
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.2)'
	});
	nvMask.addEventListener("click", function() { //处理遮罩层点击
		nvMask.hide();
		nvImageMenu.hide();
	})
	var nvImageMenu = new plus.nativeObj.View("nvImageMenu", { //创建底部图标菜单
		bottom: '0px',
		left: '0px',
		height: '264px',
		width: '100%',
		backgroundColor: 'rgb(255,255,255)'
	});
	//绘制底部图标菜单的内容
	nvImageMenu.draw([
		{
			tag: 'rect',//菜单顶部的分割灰线
			color: '#e7e7e7',
			position: {
				top: '0px',
				height: '1px'
			}
		},
		{
			tag: 'font',
			id: 'sharecancel',//底部取消按钮的文字
			text: '取消分享',
			textStyles: {
				size: '14px'
			},
			position: {
				bottom: '0px',
				height: '44px'
			}
		},
		{
			tag: 'rect',//底部取消按钮的顶部边线
			color: '#e7e7e7',
			position: {
				bottom: '45px',
				height: '1px'
			}
		},
		{
			tag: 'img',
			id: 'imgwechatfriend',
			src: '/static/sharemenu/wechatfriend.png',
			position: {
				top: top1,
				left: left1,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontwechatfriend',
			text: '微信好友',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left1,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgwechatmoments',
			src: '/static/sharemenu/wechatmoments.png',
			position: {
				top: top1,
				left: left2,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontwechatmoments',
			text: '微信朋友圈',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left2 - 2.5,
				width: iconWidth + 5,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgweibo',
			src: '/static/sharemenu/weibo.png',
			position: {
				top: top1,
				left: left3,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontweibo',
			text: '微博',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left3,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgqq',
			src: '/static/sharemenu/qq.png',
			position: {
				top: top1,
				left: left4,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontqq',
			text: 'QQ',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left4,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgcopyurl',
			src: '/static/sharemenu/copyurl.png',
			position: {
				top: top2,
				left: left1,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontcopyurl',
			text: '复制',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top2 + iconWidth + icontextSpace,
				left: left1,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgmore',
			src: '/static/sharemenu/more.png',
			position: {
				top: top2,
				left: left2,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontmore',
			text: '更多',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top2 + iconWidth + icontextSpace,
				left: left2,
				width: iconWidth,
				height: textHeight
			}
		},
		//如果想要增加更多按钮，请在这里继续添加，第二列还有2个空位
	])
	nvImageMenu.addEventListener("click", function(e) { //处理底部图标菜单的点击事件，根据点击位置触发不同的逻辑
		// console.log("click menu"+JSON.stringify(e));
		if (e.screenY > plus.screen.resolutionHeight - 44) { //点击了底部取消按钮
			nvMask.hide();
			nvImageMenu.hide();
		} else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
			//屏幕左右边缘5像素及菜单顶部5像素不处理点击
		} else { //点击了图标按钮
			var iClickIndex = -1 //点击的图标按钮序号，第一个图标按钮的index为0
			var iRow = e.clientY < (top2 - (left1 / 2)) ? 0 : 1
			var iCol = -1
			if (e.clientX < (left2 - (iconSpace / 2))) {
				iCol = 0
			} else if (e.clientX < (left3 - (iconSpace / 2))) {
				iCol = 1
			} else if (e.clientX < (left4 - (iconSpace / 2))) {
				iCol = 2
			} else {
				iCol = 3
			}
			if (iRow == 0) {
				iClickIndex = iCol
			} else {
				iClickIndex = iCol + 4
			}
			console.log("点击按钮的序号: " + iClickIndex);
			if (iClickIndex >= 0 && iClickIndex <= 5) { //处理具体的点击逻辑，此处也可以自行定义逻辑。如果增减了按钮，此处也需要跟着修改
				var strProvider="",strScene=""
				switch (iClickIndex) {
					case 0:
						strProvider = "weixin"
						strScene = "WXSceneSession"
						break;
					case 1:
						strProvider = "weixin"
						strScene = "WXSenceTimeline"
						break;
					case 2:
						strProvider = "sinaweibo"
						break;
					case 3:
						strProvider = "qq"
						break;
					case 4:
						uni.setClipboardData({
							data: strShareUrl,
							complete() {
								uni.showToast({
									title: "已复制到剪贴板"
								})
							}
						})
						break;
					case 5:
						plus.share.sendWithSystem({
							content: strShareUrl,
						})
						break;
				}
				if (strProvider!="") { //点击了0-3序号的这4个按钮
					uni.share({
						provider: strProvider,
						scene:strScene,
						type: 0,
						href: strShareUrl,
						title: strShareTitle,
						summary: strShareSummary,
						imageUrl: strShareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					})
				}
			}
		}
	})
	/* nvImageMenu.addEventListener("touchstart", function(e) {
		if (e.screenY > (plus.screen.resolutionHeight - 44)) {
			//TODO 这里可以处理按下背景变灰的效果
		}
	})
	nvImageMenu.addEventListener("touchmove", function(e) {
		//TODO 这里可以处理按下背景变灰的效果
		if (e.screenY > plus.screen.resolutionHeight - 44) {}
	})
	nvImageMenu.addEventListener("touchend", function(e) {
		//TODO 这里可以处理释放背景恢复的效果
	})
	*/
	// #endif
	export default {
		data() {
			return {
				baseurl:'',
				paystate:0, //区分支付方式，0支付宝，1微信，2抵用券
				isShow: false, //控制支付弹窗
				nav2Show:false, //控制左上角点击遮罩
				detail:{}, //详情数据
				jxuser:{}, //教育发起人信息
				isJoin:false,  //当前用户是否已经加入了该教育活动
				joinlist:[], //参与活动的人员列表
				orderInfo:null, //支付订单信息
				providerList: [],  //支付类型判断
				id:''  //活动id存储
			};
		},
		onBackPress() {
			//监听back键，关闭弹出菜单
			if (nvImageMenu.isVisible()) {
				nvImageMenu.hide()
				nvMask.hide()
				return true
			}
		},
		async onLoad(options) {
			this.getProvid() //获取支付通道
			console.log(options)
			this.baseurl = this.global.baseUrl;
			let id = options.id || 46;
			let detailData = await general.generalGET(
				this.global.baseUrl+'selectJxActDetail?jxactid='+id
			)
			console.log(detailData)
			let state = detailData.data.mystate; //用户是否已经参加该活动
			if(state=='exist'){
				this.isJoin = true;
			}
			
			let d = detailData.data.JxAct; //活动信息
			d.baomingstartime = this.GetTime(d.baomingstartime)
			d.baomingendtime = this.GetTime(d.baomingendtime)
			d.pic1 = JSON.parse(d.pic1)
			this.detail = d;
			
			let info = detailData.data.jxuser; //活动发布人信息
			this.jxuser = info;
			
			let joinlist = detailData.data.JxActParticipate; //参与人信息
			let myphone = this.userinfo!=null?this.userinfo.phone:'';
			let jLen = joinlist.length;
			if(jLen>0){
				this.joinlist = joinlist;
				
				for(let i=0;i<jLen;i++){
					if(!joinlist[i].jxmember){  //处理活动参与者列表用户信息确实的问题
						joinlist[i].jxmember = {}
					}
					if(!joinlist[i].jxmember.touxiang){
						joinlist[i].jxmember.touxiang = 'upload/touxiang.jpg'
					}
				}
			}
			
		},
		methods: {
			complainFn(){
				uni.navigateTo({
					url:'complain'
				})
			},
			handleShare(){
				// #ifdef APP-PLUS
				nvMask.show()
				nvImageMenu.show() //5+应支持从底部向上弹出的动画
				// #endif
			},
			getProvid(){
				console.log('获取支付通道1')
				// #ifdef APP-PLUS
				console.log('获取支付通道2')
				uni.getProvider({
				    service: "payment",
				    success: (e) => {
				        console.log("payment success:" + JSON.stringify(e));
				        let providerList = [];
				        e.provider.map((value) => {
				            switch (value) {
				                case 'alipay':
				                    providerList.push({
				                        name: '支付宝',
				                        id: value,
				                        loading: false
				                    });
				                    break;
				                case 'wxpay':
				                    providerList.push({
				                        name: '微信',
				                        id: value,
				                        loading: false
				                    });
				                    break;
				                default:
				                    break;
				            }
				        })
				        this.providerList = providerList;
				    },
				    fail: (e) => {
				        console.log("获取支付通道失败：", e);
				    }
				});
				// #endif
			},
			async getOrder(id){ //下单
				this.isShow = true;
				if(this.token){
					let orderData = await general.generalGET(
						this.global.baseUrl+'unifiedOrder',
						{
							id:id, //活动id
							beizhu:1, //用以区分支付类型
						},
						{
							token:this.token
						}
					)
					console.log(orderData);
					if(orderData.data.code=='OK'){
						this.orderInfo = orderData.data;
						console.log(this.orderInfo);
						this.id = id;
					}
				}else{
					this.jumpToLogin(); 
				}	
			},
			async paynow(){ //立即支付
				console.log(1111)
				this.providerList[0].loading = true;
				if(this.orderInfo){
					console.log({
							'out_trade_no':this.orderInfo.orderid,
							'total_amount':this.orderInfo.baomingfei,
							'subject':'Pay for JUXU'
						})
					let payInfo = await general.generalGET(
						this.global.baseUrl+'AppPay',
						{
							'out_trade_no':this.orderInfo.orderid,
							'total_amount':this.orderInfo.baomingfei,
							'subject':'Pay for DaiChen'
						},
						{token:this.token}
					)
					console.log('已经请求服务器，准备调起app支付')
					console.log(payInfo);
					if (payInfo.statusCode !== 200) {
					    console.log("获得订单信息失败", orderInfo);
					    uni.showModal({
					        content: "获得订单信息失败",
					        showCancel: false
					    })
					    return;
					}
					uni.requestPayment({
					    provider: 'alipay',
					    orderInfo: payInfo.data,
					    success: (e) => {
					        console.log("支付成功", e);
							// this.joinEdu(this.id)
					        uni.showToast({
					            title: "活动参与成功!"
					        })
							this.isJoin = true
					    },
					    fail: (e) => {
					        console.log("fail", e);
					        uni.showModal({
					            content: "支付失败",
					            showCancel: false
					        })
					    },
					    complete: () => {
					        this.providerList[0].loading = false;
					    }
					})
				}
			},
			getOrderInfo(e) {
			    let appid = "";
			    // #ifdef APP-PLUS
			    appid = plus.runtime.appid;
			    // #endif
			    let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=' + this.price;
			    return new Promise((res) => {
			        uni.request({
			            url: url,
			            success: (result) => {
							console.log('从服务器请求的')
			                res(result);
			            },
			            fail: (e) => {
			                res(e);
			            }
			        })
			    })
			},
			async joinEdu(id) {
				// this.isShow = true
				console.log(this.token)
				if(this.token){
					let joinData = await general.generalGET(
						this.global.baseUrl+'/canyujiaoyu',
						{id:id},
						{
							token:this.token
						}
					)
					console.log(joinData)
					if(joinData.data.code == 'OK'){
						this.isJoin = true
						uni.showToast({
							title:'参与成功'
						})
						console.log(this.userinfo)
						this.joinlist.push({
							jxmember:this.userinfo
						})
					}
				}else{
					uni.showToast({
						title:'请登录后再参与'
					})
				}
			},
			coverHide() {
				this.isShow = false
			},
			navShowFn() {
				this.nav2Show = true
			},
			navHideFn() {
				this.nav2Show = false
			},
			handleJoinList(id){
				uni.navigateTo({
					url:'joinlist?id='+id
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.check-pay{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #FFF;
		display: none;
	}
	.check-pay .icon-weixin{
		margin-left: 26upx;
	}
	.my-ellipsis {
		display: -webkit-box;
		overflow: hidden;
		white-space: nowrap!important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical
	}
	.my-ellipsis-2 {
		display: -webkit-box;
		overflow: hidden;
		white-space: normal!important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical
	}
	.nav-right-drop{
		top: 12%;
	}
	.flow-slide {
		margin-top: -160upx;

		swiper,
		swiper-item {
			height: 500upx;

			// border: 1px solid red;
			image {
				width: 100%;
				height: 500upx;
			}
		}

	}

	.cu-btn.has-line {
		width: 170upx;
		right: 90upx;
		font-size: 24upx;
		position: relative;

		.btn-line {
			width: 40upx;
			height: 10upx;
			position: absolute;
			top: 8upx;
			left: 16upx;
		}
	}

	.user-info {
		background: #FFF;
		padding: 10upx 0;
		position: relative;
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
		margin-top: -30upx;
		overflow: hidden;

		.cu-avatar.lg {
			height: 120upx;
			width: 120upx;
		}

		.cu-list.menu-avatar>.cu-item:after {
			height: 0;
			border-bottom: none;
		}

		.cu-list.menu-avatar>.cu-item {
			height: 130upx;

		}

		.cu-list.menu-avatar>.cu-item .content {
			left: 30upx;
			top: 20upx;
		}

		.focus {
			color: #DB2D4E;
			border: 1upx solid #DB2D4E;
			width: 168upx;
			height: 48upx;
			border-radius: 30upx;
			text-align: center;

			.iconfont {
				margin-right: 10upx;
			}
		}

		.cradit {
			background: #2DDBC4;
			color: #FFF;
			width: 170upx;
			height: 48upx;
			font-size: 26upx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 6upx;
			position: absolute;
			top: 50upx;
			right: 30upx;

			image {
				width: 26upx;
				height: 26upx;
			}
		}
	}


	.cu-card {
		margin-top: 20upx;

		.justify-around {
			.iconfont {
				margin-right: 10rpx;
			}
		}
	}

	.cu-avatar-group {
		direction: ltr
	}
</style>
