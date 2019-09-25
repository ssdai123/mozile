<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">我的活动</block>
		</cu-custom>
		<view class="tab flex justify-around bg-white">
			<text :class="tabIndex==0?'active':''" @tap="handleTab(0)">已参加</text>
			<text :class="tabIndex==1?'active':''" @tap="handleTab(1)">发布的</text>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list margin-top">
			<view class="product-list">
				<view class="product" v-for="(item,index) in myedu" :key="index" @tap="handleEduDetail">
					<image mode="widthFix" :src="item.pic1[0]"></image>
					<view class="name">{{item.name}}</view>
					<view class="info">
						<view class="slogan">{{item.baomingfei}}元/人</view>
						<view class="price">
							<text class="iconfont icon-dingwei color-green"></text>
							{{item.diyu[0]}}
						</view>
					</view>
				</view>
			</view>
			<view class="loading-text" v-if="myedu.length==0">没有相应数据</view>
		</view>
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				tabIndex:0,
				myedu:[], //我参与的
				headerTop:"0px",
				headerPosition:"fixed"
			};
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.loadJoinEdu()
			// this.loadPubEdu()
			
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom(){
			
		},
		methods:{
			handleTab:function(i){
				this.tabIndex = i
				if(i==0){
					this.loadJoinEdu()
				}
				if(i==1){
					this.loadPubEdu()
				}
			},
			handleEduDetail(){
				uni.navigateTo({
					url:'myEduDetail'
				})
			},
			async loadJoinEdu(){ //加载参与的教育
				wx.showLoading()
				let joinedu = await general.generalGET(
					this.global.baseUrl+'selectByUserIdGetJxActParticipate',
					{},
					{token:this.token}
				)
				wx.hideLoading()
				console.log(joinedu)
				if(joinedu.data.code =='OK'){
					let d = joinedu.data.jxActParticipate;
					let Len = d.length;
					let newD = [];
					for(let i=0;i<Len;i++){
						d[i].jxact.pic1 = JSON.parse(d[i].jxact.pic1)
						d[i].jxact.diyu = d[i].jxact.diyu.split(',')
						newD.push(d[i].jxact)
					}
					this.myedu = newD
				}
			},
			async loadPubEdu(){ //加载自己发布的教育
				wx.showLoading()
				let pubedu = await general.generalGET(
					this.global.baseUrl+'selectByUserIdGetIPublishAct',
					{},
					{token:this.token}
				)
				wx.hideLoading()
				console.log(pubedu)
				if(pubedu.data.code =='OK'){
					let d = pubedu.data.JxAct;
					let Len = d.length;
					for(let i=0;i<Len;i++){
						d[i].pic1 = JSON.parse(d[i].pic1)
						d[i].diyu = d[i].diyu.split(',')
					}
					this.myedu = d
				}
			}
		}
		
	}
</script>

<style lang="scss">
	@font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAAB3gAAALAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCfgqCXII4ATYCJAMMCwgABCAFhG0HQxuDBsiemjxBRCmUAtQ2VRCBG4ig2u+zZ3c/ortTgBIoQOVPBYSJYkUggWRSPqyjY2yEQyPe5FzmkfXucrOArBAKSdt/TjNmNTZyfrOTKAwgNQXmqbkEBgj2eS6nNz3A+YFyXHs9P2raURxQgHtR7yiyEknMW4bXLsaDeEygbVEkxYXiyhqgV+BVgbgmCQzQ55xKS2doCvWag0W8o9FMz9M24G34/fgvPvQktQxvPL5axIPc38m/U/JI9VSLIKjm80M7RsYWoBAXa4PHVHFxi0rbKaotAfuaFfxOqSp+Jwvlbv/wCImow+1dsAaGdEcqZnRrKhAggQzqaOI24Bmw02JRZmZ88bS/fq2vH6Y1yywb576F7tn3l1/5e7zm6Ze2+cW37DBXjFEftC+6U7vil0/zOvXIl3lf7cx/3DkeysBDV/tDQ5N7tli9AzsiHDgcO55136FS8LLTzBygm4Q9u6bCp1zAy0lh7v/L+PnQ0P71YAZeG0pE3eWwRIIOANX5dz4JQCX8hQLB+5z/hXZb5ofeVMCvjc0fKFEp+rs1bzkU/H5Vz67iarArF1vJlH4oO8g0SGi7EVU4OnY43jzr3U5omqVIGhaQNS2Rhd1CTcc26ppOo21TyfGOCUIlSgsbJhHC0DqSvp/IhnbIwh6gZu4BdcNQoe1iuC7sWAnJWEAQQxEP2V4ocQE/ph5qjDqrkNDpZUhWE4rrEJGlDIyLji1WSpAfkTm2yF1CPKUYYhLwwWL0HPJ6AzBIAm7E0WiR0mB6TAyue1M0F/ABo/MIhEEhPIjVC5JwAvywGE8ZS5+vggg6eTFIC6ejWAchZNL0UJxosT3IEqO/F+dehMi6COJRFAZhRIAPVIz8iJcUA6Bg/Tw3hENFE0fkg9LFSP1wX2P0+mbf952ANvxUjhQ5is4tRurpjHJLjF9IRbKIHAAA') format('woff2');}
	.icon {
		font-family:"HMfont-home" !important;
		font-size:26upx;
		font-style:normal;
		&.sheng {
			&:before{content:"\e737";}
		}
		&.jiang {
			&:before{content:"\e736";}
		}
		
	}
	.tab{
		line-height: 88upx;
		position: fixed;
		top: 90upx;
		left:0;
		width:100%;
		z-index:10;
		.active{
			color: #2DDBC4;
			border-bottom: #2DDBC4 4upx solid;
		}
	}
	.goods-list{
		margin-top: 120upx;
	}
	.header{
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;
		.target{
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;
			&.on{
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}
			
			
		}
	}
.place{
		
		background-color: #ffffff;
		height: 100upx;

	}
.goods-list{
		.loading-text{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}
		.product-list{
			// width: 92%;
			padding: 0 4% 3vw 4%; 
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.product{
				width: 48%;
				border-radius: 10upx;
				background-color: #fff;
				margin: 0 0 30upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0,0,0,0.1);
				image{
					width: 100%;
					border-radius: 10upx 10upx 0 0;
				}
				.name{
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}
				.info{
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;
					
					.price{
						color: #8F90A3;
						font-size: 30upx;
					}
					.slogan{
						color: #807c87;
						font-size: 24upx;
					}
				}
			}
			
		}
	}
</style>
