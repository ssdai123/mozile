<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<!-- <block slot="content">偏好设置</block> -->
			<block slot="right">
				<text class="color-green margin-right" @tap="handlePub">发表</text>
			</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<textarea v-model="pubtext" placeholder="记录这一刻,晒给懂你的人~"></textarea>
			</view>
			
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="baseurl+imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<6">
						<text class='cuIcon-camera'></text>
					</view>
				</view>
			</view>
			
						
		</form>
		
	</view>
</template>

<script>
	import general from '../../../common/utils/general.js'
	export default {
		data() {
			return {
				baseurl:'',
				imgList: [],
				pubtext:'人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。',
				modalName: null,
				
				
			};
		},
		onLoad(){
			this.baseurl = this.global.baseUrl
			
			
		},
		methods: {
			
			ChooseImage() {
				let that = this;
				let imglist = this.imgList;
				if(imglist.length<6){
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							// if (this.imgList.length != 0) {
							// 	this.imgList = this.imgList.concat(res.tempFilePaths)
							// } else {
							// 	this.imgList = res.tempFilePaths
							// }
							var tempFilePaths = res.tempFilePaths
							console.log(tempFilePaths);
							uni.showLoading({
							  title: '正在上传~',
							})
							// var Len = tempFilePaths.length;
							uni.uploadFile({ //上传图片
							  url: that.global.baseUrl + 'static/doUploadFileMu',
							  filePath: tempFilePaths[0],
							  name: 'file',
							  success: (res)=>{
									console.log(res)
									var data = JSON.parse(res.data);
									var url = data.url.substring(6)
									console.log(url)
									imglist.push(url);
									// upImg.push(url)  //将服务器返回的路径存到数组
									this.imgList = imglist
									uni.hideLoading();
								//do something
							  }
							})
						}
					});
				}else{
					uni.showToast({
						title:'最多只能上传6张图片',
						icon:'none'
					})
				}
			},
			async handlePub(){ //发表按钮
				let userinfo = uni.getStorageSync('userinfo');
				let token = JSON.parse(userinfo).token;
				let imgs = this.imgList;
				console.log(token)
				let pubObj={
					neirong:this.pubtext
				}
				for(let i=0;i<imgs.length;i++){ //看了后端图片录入接口，你就明白为啥写这个代码
					pubObj['newspic'+(i+1)] = imgs[i]
				}
				console.log(pubObj)
				let pubData = await general.generalGET(
					this.global.baseUrl+'DisseminationEducation',
					pubObj,
					{token}
				)
				console.log(pubData)
				if(pubData.data.code=='OK'){
					uni.showToast({
						title:'发布成功',
						icon:'none'
					})
					let backtime = setTimeout(()=>{
						uni.navigateBack({
							delta:1
						})
					},1000)
				}
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				this.imgList.splice(e.currentTarget.dataset.index, 1)
				// uni.showModal({
				// 	
				// 	title: '召唤师',
				// 	content: '确定要删除这段回忆吗？',
				// 	cancelText: '再看看',
				// 	confirmText: '再见',
				// 	success: res => {
				// 		if (res.confirm) {
				// 			this.imgList.splice(e.currentTarget.dataset.index, 1)
				// 		}
				// 	}
				// })
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style lang="scss">
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.cu-form-group+.cu-form-group{
		border: none;
	}
	.icon-cont{
		width: 160upx;
		height: 160upx;
		text-align: center;
		line-height: 160upx;
		position: absolute;
		top: -80upx;
		left: 50%;
		margin-left: -80upx;
		border-radius: 50%;
		.iconfont{
			font-size: 70upx;
		}
	}
</style>
