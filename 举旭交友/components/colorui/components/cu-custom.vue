<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back" :style="[{'color':backColor}]"></text>
					<slot name="backText"></slot>
				</view>
				<view class="action" v-if="!isBack">
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// props:{
		// 	hasBorder:{
		// 		type:Boolean,
		// 		default:true
		// 	}
		// },
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var Border = this.hasBorder?'1px solid #E5E5E5;':'none;';
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;border-bottom:${Border}`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: 'bg-white'
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
			hasBorder:{
				type:Boolean,
				default:true
			},
			backColor:{
				type:String,
				default:'#333'
			}
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.bg-opacity{
	background: rgba(0,0,0,0) !important;
}
.bg-cradit{
	background: #1F2026;
}
.back-color{
	color: #FFF;
}
.nav-bg-gray{
	background: #F1F1F1;
}
</style>
