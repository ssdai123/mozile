<template>
	<view>
		<cu-custom  :isBack="false" :hasBorder="false">
			<block slot="backText" @tap="toShowCity">
				<view class="flex align-center" >
					上海
					<text class="iconfont icon-lower-triangle margin-top-xs"></text>
				</view>
			</block>
			<block slot="right">
				<text class=" margin-right" @tap="handlePrefer">偏好设置</text>				
			</block>
		</cu-custom>
		<view class="tab-cont">
			<text :class="[tabIndex==0?'active':'']" @tap="handleTab(0)">推荐</text>
			<text :class="[tabIndex==1?'active':'']" @tap="handleTab(1)">活动时间</text>
			<view class="search">
				<i class="iconfont icon-sousuo1"></i>
				<input type="text" confirm-type="search" v-model="searchText" @confirm="handleSearch" placeholder="搜索相内容"/>
			</view>
		</view>
		
		<view class="cart-list" v-for="(item,index) in elist" :key="index" @tap="handleHomeList(item.id)">
			<image :src="baseurl+item.pic1[0]" mode="aspectFill"></image>
			<view class="intro">
				<view class="tit fs-40 flex justify-between">
					{{item.name}} 
					<view class="color-green fs-28 pull-right text-right">32/67人</view>
				</view>
				<view class="price fs-28 color-gray">
					<text class="fs-36 color-yellow">￥{{item.baomingfei}} </text>
					元/人
				</view>
				<view class="loc-cont flex-normal color-gray fs-28">
					<view class="loc">
						<text class="iconfont icon-dingwei"></text>
						{{item.address}}
					</view>
					<view class="time">
						{{item.addtime[0]}}
					</view>
				</view>
			</view>
		</view>
	
		<cu-tab activeIndex="1"></cu-tab>
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				baseurl:'',
				tabIndex:0, //顶部菜单切换控制
				elist:[], //教育活动数据列表
				page:1, //分页数量
				searchText:'' //搜索关键字
			};
		},
		async onLoad() {
			this.baseurl = this.global.baseUrl;
			this.renderList('已经到底啦')
			
		},
		async onReachBottom(){
			uni.showLoading({
				title:'加载中...'
			})
			let elist = this.elist;
			this.page++;
			let newList = await general.generalGET(
				this.global.baseUrl+'selectAllJxAct',
				{
					pageNow:this.page,
					name:this.searchText
				}
			)
			console.log(newList)
			uni.hideLoading();
			let data = newList.data.JxAct;
			let Len = data.length;
			if(Len>0){
				for(let i=0;i<Len;i++){
					data[i].pic1 = JSON.parse(data[i].pic1)
				}
				this.elist = elist.concat(data);
			}else{
				uni.showToast({
					title:'已经到底啦',
					icon:'none'
				})
			}
		},
		
		methods: {
			handlePrefer() {
				if(this.userinfo){
					uni.navigateTo({
						url:'../my/myprefer'
					})
				}else{
					uni.showToast({
						title:'请登录后设置',
						icon:'none'
					})
				}
			},
			handleHomeList(id){
				// uni.showModal({
				// 	showCancel:false,
				// 	confirmText:'立即支付',
				// 	confirmColor:'#2DDBC4',
				// 	title:'￥48',
				// 	content:'为了给你带来更好的用户体验，支持一下吧～',
				// 	success:function(res){
				// 		if(res.confirm){
				// 			uni.navigateTo({
				// 				url:'../pub/certificate'
				// 			})
				// 		}
				// 	}
				// })
				uni.navigateTo({
					url:'homedetail?id='+id
				})
			},
		    async handleSearch(){ //搜索输入确认后出发
				this.renderList('没有类似活动')
			},
			handleTab(i){ //顶部菜单切换
				this.tabIndex = i;
				this.searchText = '';
				this.page = 1;
				this.renderList('已经到底了')
				
			},
			async renderList(info){ //渲染数据列表通用方法
				uni.showLoading({
					title:'加载中...'
				})
				console.log('加载中')
				let eduList = await general.generalGET(
					this.global.baseUrl+'selectAllJxAct',
					{
						pageNow:1,
						name:this.searchText
					}
				)
				console.log(eduList)
				uni.hideLoading();
				let data = eduList.data.JxAct;
				let Len = data.length;
				if(Len>0){
					for(let i=0;i<Len;i++){
						data[i].pic1 = JSON.parse(data[i].pic1)
						data[i].addtime = this.GetTime(data[i].addtime).split(' ')
					}
				}else{
					uni.showToast({
						title:info,
						icon:'none'
					})
				}
				this.elist = data;
			},
			toShowCity(){
				console.log(1)
				uni.navigateTo({
					url:'/pages/home/city/city'
				})
			}
		},
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 140upx;
		background: #FFF;
	}
	.tab-cont{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15upx 32upx;
		font-size: 35upx;
		&>text{
			position: relative;	
			padding: 10upx 0;
			&.active{
				color: #2DDBC4;
				border:none;
				&::after{
					content: '';
					height: 4upx;
					width: 80%;
					background: #2DDBC4;
					position: absolute;
					bottom: 0;
					left: 10%;
					border-radius: 2upx;
				}
			}
		}
		.search{
			height: 58upx;
			border-radius: 30upx;
			border:1px solid #979797;
			width: 356upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 0 32upx;
			.iconfont{
				font-size: 35upx;
				position: relative;
				// top: -3upx;
			}
			input{
				font-size: 24upx;
				flex-grow: 1;
				// border: 1px solid red;
				// padding-top: 6upx;
			}
		}
	}
	
	.tit{
		.color-green{
			min-width: 120upx;
			margin-top: 10upx;
		}
	}
	
	.cart-list{
		background: #FFF;
		margin: 32upx;
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0 10upx 20upx 1upx rgba(0,0,0,0.1);
		image{
			width: 686upx;
			height: 666upx;
		}
		.intro{
			padding: 24upx;
		}
		.price{
			margin: 20upx 0;
		}
	}
</style>
