<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true" bgColor='nav-bg-gray'>
			<block slot="content">我的资料</block>
			<block slot="right">
				<text class="margin-right" @tap="handleSave">保存</text>
			</block>
		</cu-custom>
		<view class="photo-cont"  @tap="ChoosePhoto">
			<view class="photo">
				<image :src="baseurl+photo" mode="aspectFill"></image>
				<view class="btn">
					上传头像
				</view>
			</view>
		</view>
		<form>
			
			<view class="cu-form-group padding-top">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<8">
						<text class='cuIcon-add'></text>
					</view>
				</view>
			</view>
			
			<view class="cu-list menu has-bl">
				<view class="cu-item">
					基本资料
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">昵称</view>
				<input v-model="nickname" class="text-right" placeholder="请输入昵称" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">实名认证</view>
				<button v-if="idcard" class="cu-btn block line-blue sm">
					已认证
				</button>
				<button v-if="!idcard" class="cu-btn block line-blue sm">
					未认证
				</button>
			</view>
			<view class="cu-form-group" v-if="idcard">
				<view class="title">真实姓名</view>
				<input class="text-right" disabled="disabled" :value="realname"></input>
			</view>
			<view class="cu-form-group" v-if="idcard">
				<view class="title">身份证</view>
				<input class="text-right" disabled="disabled" :value="idcard" type="idcard"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">性别</view>
				<picker @change="handleEduType" :value="typeIndex" :range="typeArr">
					<view class="picker">
						{{typeIndex>-1?typeArr[typeIndex]:'请选择'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">年龄</view>
				<input v-model="age" class="text-right" placeholder="请输入年龄" name="input" type="number"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">籍贯地</view>
				<input v-model="loc" class="text-right" placeholder="请输入籍贯地" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">婚姻状况</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group no-must" >
				<view class="title">居住地</view>
				<picker>
					<view class="picker">
						{{areaText}}
					</view>
				</picker>
				<view class="show-citypicker" @tap="handleArea" v-if="cpShow"></view>
				<mpvue-city-picker 
				ref="mpvueCityPicker" 
				:pickerValueDefault="pickerValueDefault"
				@onConfirm = "onConfirm" 
				@onCancel = "onLocCancel"
				>
				</mpvue-city-picker>
			</view>		
			<view class="cu-form-group">
				<!-- <view class="title">详细地址</view> -->
				<input v-model="address" placeholder="请输入详细地址" name="input"></input>
			</view>
			
			
			<view class="cu-form-group margin-top">
				<view class="title">是否绑定支付宝</view>
				<!-- #ifdef MP-ALIPAY -->
				<!-- <switch  @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#25928B"></switch> -->
				<!-- #endif -->

				<!-- #ifndef MP-ALIPAY -->
				<switch class="cyan" @tap="SwitchB" disabled="true" :class="switchB?'checked':''" :checked="switchB?true:false"  color="#25928B"></switch>
				<!-- #endif -->
			</view>
			
			<view class="cu-list menu margin-top has-bl">
				<view class="cu-item">
					偏好设置
				</view>
			</view>
			<view class="prefer-list margin-bottom padding bg-white">
				<!-- <view>
					20岁~30岁
				</view> -->
				<view 
				v-for="(listItem,listIndex) in preferList" 
				:key="listIndex" 
				:class="listItem.isCheck?'active':''">
					{{listItem.btntext}}
				</view>
			</view>
			
		</form>
		<view class="cover" v-if="isShow" @tap="coverHide">
			<view class="cover-cont padding flex flex-direction justify-center">
				<view class="icon-cont bg-green margin-bottom">
					<text class="iconfont icon-fabu text-white text-xxl"></text>
				</view>
				<view class="padding-sm"></view>
				<view class="padding margin text-center">
					教育发布成功，审核中，可在我的教育中查看！
				</view>
				<view class="text-center">
					<button class="cu-btn round lg bg-green magin">
						知道了
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';
	import general from '../../common/utils/general.js'
	export default {
		data() {
			return {
				baseurl:'', //基础域名
				photo:'', //头像
				imgList: [], //照片墙
				preferList:[
					{'btntext':'20岁~30岁','isCheck':true},
					{'btntext':'175cm以上','isCheck':true},
					{'btntext':'未婚','isCheck':true},
					{'btntext':'上海','isCheck':true},
					{'btntext':'研究生','isCheck':true},
					{'btntext':'20~30万','isCheck':true},
					{'btntext':'A型血','isCheck':true},
				],
				nickname:'', //昵称
				age:'18', //年龄		
				address:'', //详细地址
				loc:'',  //籍贯地
				idcard:'', //身份证号
				realname:'', //真实姓名
				isShow:false, //遮罩控制
				index: -1,
				picker: ['未婚', '已婚', '丧偶'],
				typeIndex: -1,
				typeArr: ['男', '女'], 
				locDefault: [0, 0, 0], //籍贯地【必填】
				locShow:true, //解决三级联动的确定按钮无法关闭选择框的问题
				locText:'请选择', //选择后的籍贯地要求内容【必填】
				pickerValueDefault: [0, 0, 0], //居住地
				cpShow:true, //解决三级联动的确定按钮无法关闭选择框的问题
				areaText:'请选择', //选择后的居住地内容
				switchB: false,
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		components: {
			mpvueCityPicker
		},
		async onLoad(){
			this.baseurl = this.global.baseUrl;
			wx.showLoading()
			let userData = await general.generalGET( //加载个人基本信息
				this.global.baseUrl+'ByUserIdGetMember',
				{},
				{token:this.token}
			)
			wx.hideLoading()
			console.log(userData)
			if(userData.data.code =='OK'){
				userData = userData.data.jxMember;
				
				if(userData.touxiang!=null && userData.touxiang !=undefined && userData.touxiang!=""){
					this.photo = userData.touxiang;
					try {
					    uni.setStorageSync('infoPerCent', 10);
					} catch (e) {
					   console.log(e);
					}
				}
				
				if(userData.photowall!=null && userData.photowall !=undefined && userData.photowall!=""){
					this.imgList = userData.photowall?JSON.parse(userData.photowall):[];
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.nickname!=null && userData.nickname !=undefined && userData.nickname!=""){
					this.nickname = userData.nickname;
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.age!=null && userData.age !=undefined && userData.age!=""){
					this.age = userData.age;
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.jiguandi!=null && userData.jiguandi !=undefined && userData.jiguandi!=""){
					this.loc = userData.jiguandi;
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.juzhudi!=null && userData.juzhudi !=undefined && userData.juzhudi!=""){
					this.address = userData.juzhudi;
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.sex!=null && userData.sex !=undefined && userData.sex!=""){
					this.typeIndex = userData.sex-1;
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.hunyin!=null && userData.hunyin !=undefined && userData.hunyin!=""){
					this.index = userData.hunyin-1;
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.quyu !=null && userData.quyu !=undefined && userData.quyu !=""){
					this.areaText = userData.quyu||'请选择';
					try {
					    var value = uni.getStorageSync('infoPerCent');
					    if (value>0) {
					        value=value+10;
							uni.setStorageSync('infoPerCent', value);
					    }
					} catch (e) {
					    console.log(e);
					}
				}
				
				if(userData.sfznumber !=null && userData.sfznumber !=undefined && userData.sfznumber !=""){
					this.idcard = userData.sfznumber; //身份证号
				}
				
				if(userData.xingming !=null && userData.xingming !=undefined && userData.xingming !=""){
					this.realname = userData.xingming; //真实姓名
				}
				
				//console.log(userData.sfzNumber)
			}
			
			let prefer = await general.generalGET( //加载个人偏好
				this.global.baseUrl+'toPianHao',
				{},
				{token:this.token}
			)
			if(prefer.data.code == 'OK'){
				prefer = prefer.data.jxMemberPianhao;
				console.log(prefer)
				let plist = [];
				for(let attr in prefer){
					if(prefer[attr]==''||attr=='id'||attr=='userid'){
						continue;
					}
					let obj = {'btntext':prefer[attr],'isCheck':true}
					plist.push(obj)
				}
				this.preferList = plist
			}
		},
		methods: {
			coverShow(){
				this.isShow = true
			},
			coverHide(){
				this.isShow = false
			},
			async handleSave(){
				console.log(this.userinfo)
				if(this.token){
					console.log("数据核查-age:"+(this.age) );
					console.log("数据核查-hunyin:"+(this.index+1) );
					console.log("数据核查-sex:"+(this.typeIndex+1) );
					console.log("数据核查jiguandi:"+(this.loc) );
					
					wx.showLoading()
					let saveInfo = await general.generalGET(
						this.global.baseUrl+'updateMeans',
						{
							'touxiang':this.photo,
							'age':this.age,
							'hunyin':this.index+1,
							'sex':this.typeIndex+1,
							'nicheng':this.nickname,
							'jiguandi':this.loc,
							'quyu':this.areaText,
							'juzhudi':this.address,
							'photowall':JSON.stringify(this.imgList)
						},
						{token:this.token}
					)
					console.log(saveInfo)
					wx.hideLoading()
					if(saveInfo.data.code == 'OK'){
						uni.showToast({
							title:'录入成功'
						})
					}else{
						uni.showToast({
							title:'录入失败',
							icon:'none'
						})
					}
					
				}else{
					uni.showToast({
						title:'登录后录入资料',
						icon:'none'
					})
				}
			},
			handleEduType(e) { //教育类型
				this.typeIndex = e.detail.value
			},
			PickerChange(e) { //婚姻
				this.index = e.detail.value
			},
			
			handleLoc() { //籍贯地选择
			  this.$refs.locCityPicker.show();
			  this.locShow = false;
			},
			onLocConfirm(e) {   //籍贯地确认事件
			  console.log(e);
			  this.locShow = true;
			  this.locText = e.label.split('-').join(',');
			},
			onLocCancel(){
				this.locShow = true;
				this.cpShow = true;
			},
			
			handleArea() { //地域要求
			  console.log(555)
			  this.$refs.mpvueCityPicker.show();
			  this.cpShow = false;
			},
			onConfirm(e) {   //地域要求确认事件
			  console.log(e);
			  this.cpShow = true;
			  this.areaText = e.label.split('-').join(',');
			},
			SwitchB(e) {
				let that = this;
				uni.showModal({
					confirmColor:'#2DDBC4',
					content:'是否确定绑定支付宝?',
					cancelText:'取消',
					confirmText:'确定',
					cancelColor:'#888',
					success:function(s) {
						console.log(s)
						if(s.confirm){
							that.switchB = true
						}
						if(s.cancel){
							that.switchB = false
						}
						
					},
					fail:function(){
						console.log(2)
						that.switchB = false
					}
				})
				
			},
			ChooseImage() {
				let that = this;
				let imglist = this.imgList;
				if(imglist.length<6){
					uni.chooseImage({
						count: 6, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							var tempFilePaths = res.tempFilePaths
							console.log(tempFilePaths);
							uni.showLoading({
							  title: '正在上传~',
							})
							 var Len = tempFilePaths.length;
							 
							 console.log("Len："+Len );
							 
							for(var i=0; i<tempFilePaths.length; i++){
								uni.uploadFile({ //上传图片
								  url: that.global.baseUrl + 'static/doUploadFileMu',
								  filePath: tempFilePaths[i],
								  name: 'file',
								  success: (res)=>{
										console.log(res)
										var data = JSON.parse(res.data);
											var url = this.global.baseUrl+data[0].url.substring(6);
											console.log(url)
											imglist.push(url); //将服务器返回的路径存到数组
								  }
								})
							} 
							
							
							this.imgList = imglist
							wx.hideLoading();
						}
					});
				}else{
					uni.showToast({
						title:'最多只能上传6张图片',
						icon:'none'
					})
				}
			},
			ChoosePhoto() {
				let that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
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
								var url = data[0].url.substring(6)
								console.log(url)
								that.photo = url;
								wx.hideLoading();
							//do something
						  }
						})
					}
				});
			
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
			},
			onBackPress(){
				// uni.showModal({
				// 	title: '确定返回吗？',
				// 	content: '返回后您未保存的内容将丢失',
				// 	showCancel: true,
				// 	cancelText: '取消',
				// 	confirmText: '确定',
				// 	confirmColor:'#2DDBC4',
				// 	success: res => {
				// 		
				// 		console.log(res)
				// 		if(res.confirm){
				// 			console.log(123)
				// 			uni.redirectTo({
				// 				url:'my'
				// 			})
				// 			return false
				// 		}
				// 	}
				// });
				// return true;
			}
		}
	}
</script>

<style lang="scss">
	.cu-form-group{
		position: relative;
	}
	.mpvue-picker,
	.show-citypicker{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		// border: 1px solid red;
		z-index: 3
	}
	.show-citypicker{
		z-index: 4;
		// border-color: blue;
	}
	.photo-cont{
		background: #fff;
		height: 120upx;
		position: relative;
		margin-top: 135upx;
		.photo{
			height: 200upx;
			width: 200upx;
			border-radius: 50%;
			overflow: hidden;
			position: absolute;
			top: -100upx;
			left: 50%;
			margin-left: -100upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.btn{
			font-size: 20upx;
			line-height: 50upx;
			background: rgba(0,0,0,0.5);
			color: #FFF;
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}
	.has-bl{
		border-left: 8upx solid #2DDBC4;
	}
	
	.prefer-list{
		display: flex;
		flex-wrap: wrap;
		
		&>view{
			padding: 10upx 30upx;
			border-radius:30upx;
			background: #FFF;
			margin-right: 20upx;
			margin-bottom: 20upx;
			font-size: 24upx;
			&.active{
				background: #2DDBC4;
				color: #FFF;
			}
		}
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
		.iconfont{
			font-size: 70upx;
		}
	}
</style>
