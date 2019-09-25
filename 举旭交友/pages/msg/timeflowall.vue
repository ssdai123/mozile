<template>
	<view>
		<cu-custom  :isBack="true" :hasBorder="true">
			<block slot="content">
				全部动态				
			</block>
		</cu-custom>
	
		<view class="cu-card dynamic no-card margin-bottom">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="flex-normal">
								栀子花开
								<text class="text-gray text-sm">19-01-11</text>
							</view>
							<view class="text-gray text-sm flex justify-between">
								23岁 | 178cm | 20-30万 | 射手座
							</view>
						</view>
					</view>
				</view>
				<view class="text-content margin-top-sm">
					AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。
				</view>
				<view class="bg-white padding">
					<view class="grid col-3 grid-square">
						
						<view class="bg-img">
							<image src="../../static/img/im/face/face_4.jpg" mode=""></image>
						</view>
						<view class="bg-img">
							<image src="../../static/img/im/face/face_4.jpg" mode=""></image>
						</view>
						<view class="bg-img">
							<image src="../../static/img/im/face/face_4.jpg" mode=""></image>
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
		
		<view class="cu-card dynamic no-card margin-bottom">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="flex-normal">
								栀子花开
								<text class="text-gray text-sm">19-01-11</text>
							</view>
							<view class="text-gray text-sm flex justify-between">
								23岁 | 178cm | 20-30万 | 射手座
							</view>
						</view>
					</view>
				</view>
				<view class="text-content  margin-top-sm">
					AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。
				</view>
				<view class="bg-white padding">
					<view class="grid col-3 grid-square">
						<view class="bg-img">
							<image src="../../static/img/im/face/face_4.jpg" mode=""></image>
						</view>
						<view class="bg-img">
							<image src="../../static/img/im/face/face_4.jpg" mode=""></image>
						</view>
						<view class="bg-img">
							<image src="../../static/img/im/face/face_4.jpg" mode=""></image>
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
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.flow-slide{
	// margin-top: -160upx;
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

.cu-card{
	.justify-around{
		.iconfont{
			margin-right: 10rpx;
		}
	}
}
</style>
