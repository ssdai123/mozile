<template>
	<view>
		<cu-custom  :isBack="true" :hasBorder="false" bgColor="bg-opacity" backColor="#FFF">
			<!-- <block slot="content">
				详细资料				
			</block> -->
		</cu-custom>
		<view class="flow-slide">
			<swiper :indicator-dots="true">
				<swiper-item v-for="(item,index) in fdata.photowall" :key="index">
					<view class="swiper-item">
						<image :src="item" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="user-info">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" :style="'background-image:url('+baseurl+fdata.touxiang+');'"></view>
					<view class="content">
						<view class="text-grey">{{fdata.nickname}}</view>
						<view class="text-gray text-sm">
							<view class="text-cut flex">
								{{fdata.age}}岁 | 178cm | 20-30万 | 
								<view class="flex">
									<text class="iconfont icon-dingwei"></text>
									{{fdata.quyu[0]}}
								</view>
							</view> 
							<view class="focus flex justify-center align-center">
								<i class="iconfont icon-jiaguanzhu"></i>
								加关注
							</view>
						</view>
					</view>
					<!-- <view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-grey sm">5</view>
					</view> -->
				</view>
			</view>
			<view class="cradit">
				<image src="../../static/img/icon/icon_cradit.png" mode=""></image>
				信用值:{{fdata.xinyong}}
			</view>
		</view>
		
		<view class="cu-list menu margin-top has-bl">
			<view class="cu-item">
				基本资料
				<view class="active text-gray" @tap="handleFlowAll">
					查看全部
					<text class="iconfont icon-shuangjiantou-right"></text>
				</view>
			</view>
		</view>
		<view class="cu-card dynamic no-card" v-for="(item,index) in tdata" :key="index">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url('+baseurl+fdata.touxiang+');'"></view>
						<view class="content flex-sub">
							<view class="flex-normal">
								{{fdata.nickname}}
								<text class="text-gray text-sm">{{item.addtime}}</text>
							</view>
							<view class="text-gray text-sm flex justify-between">
								{{fdata.age}}岁 | 178cm | 20-30万 | 射手座
							</view>
						</view>
					</view>
				</view>
				<view class="text-content margin-top-sm">
					{{item.content}}
				</view>
				<view class="bg-white padding">
					<view class="grid col-3 grid-square">
						
						<view class="bg-img" v-for="(pic,idx) in item.pics" :key="idx">
							<image :src="baseurl+pic" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="padding flex justify-around">
					<view class="flex justify-center align-center">
						<i class="iconfont icon-praise-hollow fs-32"></i>
						点赞
					</view>
					<view class="flex justify-center align-center">
						<i class="iconfont icon-weibiaoti2zhuanhuan fs-32"></i>
						评论
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
				baseurl:'',
				fdata:{}, //用户信息
				tdata:[] //用户动态
			};
		},
		async onLoad(options) {
			this.baseurl = this.global.baseUrl;
			console.log(options)
			let v = options.search;
			uni.showLoading()
			let friendData = await general.generalGET( 
				this.global.baseUrl+'selectJxMenber',
				{val:v}
			)
			console.log(friendData)
			uni.hideLoading()
			if(friendData.data.code == 'OK'){
				let fData = friendData.data.jxmember //用户信息数据
				fData.photowall = JSON.parse(fData.photowall) 
				fData.quyu = fData.quyu.split(',');
				let tData = friendData.data.jxMemberDongTai; //用户发布的动态数据
				for(let i=0;i<tData.length;i++){
					tData[i].addtime = this.GetTime(tData[i].addtime);
					tData[i].pics = [];
					for(let attr in tData[i]){ //将数据库中的动态展示图片，整合为一个数组，方便使用
						let idx = attr.indexOf('newspic');
						if(idx!=-1 && tData[i][attr]!=''){
							tData[i].pics.push(tData[i][attr])
						}
					}
				}
				this.fdata = fData;
				this.tdata = tData;
				console.log(tData)
			}
		},
		methods: {
			handleFlowAll() {
				uni.navigateTo({
					url:'timeflowall'
				})
			}
		},
	}
</script>

<style lang="scss">
.flow-slide{
	margin-top: -160upx;
	swiper,
	swiper-item{
		height: 750upx;
		// border: 1px solid red;
		image{
			width: 100%;
			height: 750upx;
		}
	}
	
}

.user-info{
	background: #FFF;
	padding: 30upx 0;
	position: relative;
	border-top-left-radius: 30upx;
	border-top-right-radius: 30upx;
	margin-top: -30upx;
	.cu-avatar.lg{
		height: 120upx;
		width: 120upx;
	}
	.cu-list.menu-avatar>.cu-item:after{
		height: 0;
		border-bottom:0.5px dashed #ddd;
	}
	.cu-list.menu-avatar>.cu-item{
		height: 160upx;
		
	}
	.cu-list.menu-avatar>.cu-item .content{
		left: 170upx;
		top: 20upx;
	}
	.focus{
		color: #DB2D4E;
		border: 1upx solid #DB2D4E;
		width: 168upx;
		height: 48upx;
		border-radius: 30upx;
		text-align: center;
		.iconfont{
			margin-right: 10upx;
		}
	}
	.cradit{
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
		
		image{
			width: 26upx;
			height: 26upx;
		}
	}
}


.cu-card{
	margin-bottom:20upx; 
	.justify-around{
		.iconfont{
			margin-right: 10rpx;
		}
	}
}
</style>
