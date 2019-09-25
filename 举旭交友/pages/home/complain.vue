<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">投诉</block>
			<!-- <block slot="right">
				<text class="color-green margin-right" @tap="coverShow">提交</text>
			</block> -->
		</cu-custom>
		<form>
			<view class="cu-bar bg-e5e5 solid-bottom">
				<view class="action color-888 fs-24">
					请选择投诉类型
				</view>
			</view>
			
			<view class="complain-type">
				<view 
				class="item" 
				v-for="(item,index) in complainText" 
				:key="index" 
				:class="[index==complainIndex?'active':'']" 
				@click="changeType(index,item.id)">
					{{item.name}}
				</view>
			</view>
			
			<view class="cu-bar bg-e5e5 solid-bottom">
				<view class="action color-888 fs-24">
					请填写投诉内容和上传相关图片证据
				</view>
			</view>
			
			
			<view class="cu-form-group">
				<textarea v-model="textareaValue"  placeholder="请留下您宝贵的意见~"></textarea>
			</view>
			
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="baseurl+imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-camera'></text>
					</view>
				</view>
			</view>
			
			<view class="padding">
				<button class="u-btn block lg bg-green margin" @tap="handleSub">
					提交
				</button>
			</view>			
		</form>
		<view class="cover" v-if="isShow" @tap="coverHide">
			<view class="cover-cont padding flex flex-direction justify-center">
				<view class="icon-cont bg-green margin-bottom">
					<image src="../../../static/img/icon/icon_feed.png" mode=""></image>
				</view>
				<view class="padding-sm"></view>
				<view class="padding margin text-center">
					谢谢您的反馈，我们将第一时间联系您～
				</view>
				<view class="text-center">
					<button class="cu-btn round lg bg-green magin" @tap.stop="backHome">
						返回首页
					</button>
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
				isShow:false,
				imgList: [],
				modalName: null,
				textareaValue: '测试投诉功能', //投诉留言文本
				complainIndex:-1, //投诉类型切换
				complainText:[],
				cid:'', //投诉类型id
				tid:'' //被投诉的活动id
			};
		},
		async onLoad(options) {
			this.baseurl = this.global.baseUrl;
			let tdata = await general.generalGET(
				this.global.baseUrl + 'getLableInfo'
			)
			if(tdata.data){
				this.complainText = tdata.data.lable
			}
			if(options.tid){ //获取前个页面传递的活动id
				this.tid = options.tid;
			}
		},
		methods: {
			changeType(idx,id){ //切换投诉类型
				this.complainIndex = idx;
				this.cid = id;
				console.log(id)
			},
			async handleSub(){ //提交投诉内容
				if(this.cid == ''){
					uni.showToast({
						title:'请选择投诉类型',
						icon:'none'
					})
					return;
				}
				if(this.textareaValue == ''){
					uni.showToast({
						title:'请输入投诉意见',
						icon:'none'
					})
					return;
				}
				if(this.imgList.length == 0){
					uni.showToast({
						title:'请上传至少一张证据图片',
						icon:'none'
					})
					return;
				}
				if(!this.token){
					uni.showToast({
						title:'请登录后再操作',
						icon:'none'
					})
					return;
				}
				let imgs = this.imgList;
				let pubObj={
					labelid:this.cid,  
					neirong:this.textareaValue, 
					tid:this.tid
				}
				for(let i=0;i<imgs.length;i++){ //看了后端图片录入接口，你就明白为啥写这个代码
					pubObj['pic'+(i+1)] = imgs[i]
				}
				uni.showLoading()
				let subData = await general.generalGET( //提交投诉请求
					this.global.baseUrl+'doTouSu',
					pubObj,
					{
						token:this.token
					}
				)
				console.log(subData)
				if(subData.data.code=='OK'){
					this.isShow = true
				}
				uni.hideLoading()
			},
			coverShow(){
				this.isShow = true
			},
			coverHide(){
				this.isShow = false
			},
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
			backHome(){
				uni.redirectTo({
					url:'home'
				})
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
	.complain-type{
		padding: 30upx;
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;
	}
	.complain-type .item{
		padding: 5upx 30upx;
		border: 1upx solid #1F2026;
		display: inline-block;
		border-radius: 30upx;
		margin: 10upx 30upx;
	}
	.complain-type .item.active{
		color: #FFF;
		border-color: #2DDBC4;
		background: #2DDBC4;
	}
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
		image{
			height: 100%;
			width: 100%;
		}
	}
</style>
