<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">我的抵用券</block>
			<block slot="right">
				<text class="margin-right">获取抵用券</text>
			</block>
		</cu-custom>
		<view class="tab-cont flex justify-around bg-white">
			<text :class="tabIndex==0?'active':''" @tap="handleTab(0)">多次使用券</text>
			<text :class="tabIndex==1?'active':''" @tap="handleTab(1)">单次使用券</text>
			<text :class="tabIndex==2?'active':''" @tap="handleTab(2)">失效抵用券</text>
		</view>
		
		<view class="coupon-cont">
			<view class="coupon-item margin flex" v-if="tabIndex==0">
				<view class="money brown">
					<text class="text-xxl">50</text>
					<text class="text-sm">元</text>
				</view>
				<view class="intro padding">
					<view class="tit text-lg">
						抵用券名
					</view>
					<view class="info color-666 margin-top-xs">
						使用条件：满400元打折类可用，产品类不可使用
					</view>
					<text class="color-gray text-sm margin-top">2019/11/12至2019/11/23</text>
				</view>
			</view>
			
			<view class="coupon-item margin flex" v-if="tabIndex==1">
				<view class="money green">
					<text class="text-xxl">50</text>
					<text class="text-sm">元</text>
				</view>
				<view class="intro padding">
					<view class="tit text-lg">
						抵用券名
					</view>
					<view class="info color-666 margin-top-xs">
						使用条件：满400元打折类可用，产品类不可使用
					</view>
					<text class="color-gray text-sm margin-top">2019/11/12至2019/11/23</text>
				</view>
			</view>
			
			<view class="coupon-item margin flex" v-if="tabIndex==1">
				<view class="money green">
					<text class="text-xxl">50</text>
					<text class="text-sm">元</text>
				</view>
				<view class="intro padding">
					<view class="tit text-lg">
						抵用券名
					</view>
					<view class="info color-666 margin-top-xs">
						使用条件：满400元打折类可用，产品类不可使用
					</view>
					<text class="color-gray text-sm margin-top">2019/11/12至2019/11/23</text>
				</view>
			</view>
			
			<view class="coupon-item margin flex"  v-if="tabIndex==2">
				<view class="money">
					<text class="text-xxl">50</text>
					<text class="text-sm">元</text>
				</view>
				<view class="intro padding">
					<view class="tit text-lg">
						抵用券名
					</view>
					<view class="info color-666 margin-top-xs">
						使用条件：满400元打折类可用，产品类不可使用
					</view>
					<text class="color-gray text-sm margin-top">2019/11/12至2019/11/23</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import general from '../../../common/utils/general.js'
	export default {
		data() {
			return {
				tabIndex:0,
			};
		},
		async onLoad(){
			let coupon = await general.generalGET(
				this.global.baseUrl + 'selectByUserIdGetWeiYouHuiQuan',
				{},
				{token:this.token}
			)
			console.log(coupon)
		},
		methods: {
			handleTab(i){
				this.tabIndex = i
			},
		},
	}
</script>

<style lang="scss">
.coupon-item{
	height: 220upx;
	border-radius: 10upx;
	overflow: hidden;
	.money{
		height: 100%;
		width: 190upx;
		flex-basis: 190upx;
		background: #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFF;
		border-right: 4upx dashed #FFF;
		&.brown{
			background: #CAA686;
		}
		&.green{
			background: #2DDBC4;
		}
	}
	.intro{
		flex-grow: 1;
		background: #FFF;
		box-sizing: border-box;
		position: relative;
		
		&::before,
		&::after{
			content: '';
			height: 32upx;
			width: 32upx;
			background: #f1f1f1;
			border-radius: 50%;
			position: absolute;
			left: -16upx;
		}
		&::before{
			top: -16upx;
		}
		&::after{
			bottom: -16upx;
		}
	}
}
</style>
