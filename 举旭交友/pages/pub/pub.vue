<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<!-- <block slot="content">偏好设置</block> -->
			<block slot="right">
				<text class="color-green margin-right">保存</text>
			</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top no-border no-must">
				<textarea maxlength="20" v-model="iptData.titText" placeholder="请输入教育标题（20字以内）"></textarea>
			</view>
			
			<!-- <view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view> -->
			
			<view class="cu-form-group no-must">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="baseurl+imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-add'></text>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group">
				<view class="title">教育开始日期</view>
				<picker mode="date" :start="beginDay1"  @change="Date1Change">
					<view class="picker">
						{{date1}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">教育开始时间</view>
				<picker mode="time"  @change="time1Change">
					<view class="picker">
						{{time1}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">教育截止日期</view>
				<picker mode="date" :start="beginDay2" @change="Date2Change">
					<view class="picker">
						{{date2}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">教育截止时间时间</view>
				<picker mode="time"  @change="time2Change">
					<view class="picker">
						{{time2}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">教育类型</view>
				<picker @change="handleEduType" :value="typeIndex" :range="typeArr">
					<view class="picker">
						{{typeIndex>-1?typeArr[typeIndex]:'请选择'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">人数</view>
				<input class="text-right" placeholder="请输入人数" v-model="iptData.pnum"></input>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title">教育地址</view>
				<picker mode="region" @change="RegionChange" :value="region">
					<view class="picker">
						{{region[0]}}，{{region[1]}}，{{region[2]}}
					</view>
				</picker>
			</view> -->
			<view class="cu-form-group" >
				<view class="title">教育地址</view>
				<picker>
					<view class="picker">
						{{locText}}
					</view>
				</picker>
				<view class="show-citypicker" @tap="handleLoc" v-if="locShow"></view>
				<mpvue-city-picker 
				ref="locCityPicker" 
				:pickerValueDefault="locDefault"
				@onConfirm = "onLocConfirm" 
				>
				</mpvue-city-picker>
			</view>
			
			<view class="cu-form-group">
				<!-- <view class="title">详细地址</view> -->
				<input placeholder="请输入详细地址" v-model="iptData.address"></input>
			</view>
			
			
			
			<view class="cu-form-group margin-top">
				<view class="title">场地费</view>
				<input v-model="iptData.placeFee" class="text-right" placeholder="请输入场地费"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">人力费</view>
				<input v-model="iptData.humanFee" class="text-right" placeholder="请输入人力费" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">其他</view>
				<input v-model="iptData.otherFee" class="text-right" placeholder="请输入其他费用" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">利润费</view>
				<input v-model="iptData.earnFee" class="text-right" placeholder="请输入利润费" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">人均报名费</view>
				<input v-model="iptData.averageFee" class="text-right" placeholder="请输入人均报名费" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">奖支</view>
				<input v-model="iptData.award" class="text-right" placeholder="请输入奖支" name="input"></input>
			</view>
			
			
			
			<view class="cu-form-group margin-top">
				<view class="title">最低信用值</view>
				<picker @change="craditChange" :value="index" :range="cradit">
					<view class="picker">
						{{craditIndex>-1?cradit[craditIndex]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group no-must">
				<view class="title">指定人群</view>
				<picker @change="crowdChange" :value="index" :range="crowd">
					<view class="picker">
						{{crowdIndex>-1?crowd[crowdIndex]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group no-must" >
				<view class="title">地域要求</view>
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
				>
				</mpvue-city-picker>
			</view>
			<view class="cu-form-group no-must">
				<view class="title">学历要求</view>
				<picker @change="eduChange" :value="index" :range="edu">
					<view class="picker">
						{{eduIndex>-1?edu[eduIndex]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group no-must">
				<view class="title">行业要求</view>
				<input v-model="iptData.business" class="text-right" placeholder="请输入"></input>
			</view>
			
			<view class="text-center padding">
				<text class="iconfont icon-duihao color-green"></text>
				发布教育即代表同意
				<text class="color-green">《xxx协议》</text>
			</view>
			
			<button class="u-btn block lg bg-green margin-top" @tap="handlePub">
				发布教育
			</button>
			
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
				baseurl:'',
				isShow:false, //遮罩控制
				index: -1,
				imgList:[], //图片数组
				date1: '请选择', //教育开始日期【必填】
				date2: '请选择', //教育截止日期【必填】
				time1: '请选择', //教育开始时间【必填】
				time2: '请选择', //教育截止时间【必填】
				typeIndex: 0,  //教育类型选中标致【必填】
				typeArr: ['教育类型1', '教育类型2', '教育类型3'], //教育类型【必填】
				locDefault: [0, 0, 0], //教育地址【必填】
				locShow:true, //解决三级联动的确定按钮无法关闭选择框的问题
				locText:'请选择', //选择后的地域要求内容【必填】
				iptData:{ //输入型的数据汇总
					titText:'教育者要去发现每一位学生的禀赋', //录入标题
					address:'九龙坡区石桥铺', //详细地址【必填】
					pnum:'16', //人数【必填】
					placeFee:'800',  //场地费【必填】
					humanFee:'2000', //人力费【必填】
					otherFee:'500', //其他费用【必填】
					earnFee:'0.2', //利润率【必填】
					averageFee:'400', //人均报名费【必填】
					award:'1000', //奖支【必填】
					business:'互联网行业' //行业要求
				},
				cradit: ['100', '200', '300'], //最低信用【必填】
				craditIndex: 0,
				crowd: ['人群1', '人群2', '人群3'],
				crowdIndex: 0,
				pickerValueDefault: [0, 0, 0], //地域要求
				cpShow:true, //解决三级联动的确定按钮无法关闭选择框的问题
				areaText:'请选择', //选择后的地域要求内容
				edu:['无要求','专科及以上','本科及以上','研究生及以上','博士及以上'], //学历要求
				eduIndex:0, //学历选择控制参数
				beginDay1:'', //开始时间的日期起点控制
				beginTime1:'',
				beginDay2:'',
				beginTime2:'',
			};
		},
		components: {
			mpvueCityPicker
		},
		onLoad(){
			this.baseurl = this.global.baseUrl;
			
			let myDate = new Date();
			let y = myDate.getFullYear();
			let m = myDate.getMonth()+1;
			let d = myDate.getDate();
			let h = myDate.getHours();
			let mu = myDate.getMinutes();
			this.beginDay1 = `${y}-${this.doubleFn(m)}-${this.doubleFn(d)}`;
			this.beginTime1 = `${this.doubleFn(h)}-${this.doubleFn(mu)}`
			console.log(this.beginDay1)
		},
		methods: {
			doubleFn(n){
				return n>10?n:'0'+n;
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
									var url = data[0].url.substring(6)
									console.log(url)
									imglist.push(url);
									// upImg.push(url)  //将服务器返回的路径存到数组
									this.imgList = imglist
									wx.hideLoading();
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
			async handlePub(){ //发布按钮功能
				if(this.titText==''){  
					uni.showToast({'title':'请输入教育标题','icon':'none'});
					return false;
				}
				if(this.date1=='请选择'||this.date2=='请选择'){  
					uni.showToast({'title':'请选择起止日期','icon':'none'});
					return false;
				}
				if(this.time1=='请选择' || this.time2=='请选择'){  
					uni.showToast({'title':'请选择起止时间','icon':'none'});
					return false;
				}
				if(this.typeIndex==-1){  
					uni.showToast({'title':'请选择教育类型','icon':'none'});
					return false;
				}
				if(this.pnum==''){  
					uni.showToast({'title':'请输入参与人数','icon':'none'});
					return false;
				}
				if(this.locText=='请选择'){  
					uni.showToast({'title':'请选择教育地址','icon':'none'});
					return false;
				}
				if(this.address==''){  
					uni.showToast({'title':'请输入详细地址','icon':'none'});
					return false;
				}
				if(this.placeFee==''){  
					uni.showToast({'title':'请输入场地费','icon':'none'});
					return false;
				}
				if(this.humanFee==''){  
					uni.showToast({'title':'请输入人力费','icon':'none'});
					return false;
				}
				if(this.otherFee==''){  
					uni.showToast({'title':'请输入其他费用','icon':'none'});
					return false;
				}
				if(this.earnFee==''){  
					uni.showToast({'title':'请输入利润率','icon':'none'});
					return false;
				}
				if(this.averageFee==''){  
					uni.showToast({'title':'请输入人均报名费','icon':'none'});
					return false;
				}
				if(this.award==''){  
					uni.showToast({'title':'请输入奖支','icon':'none'});
					return false;
				}
				if(this.craditIndex=='-1'){  
					uni.showToast({'title':'请选择最低信用值','icon':'none'});
					return false;
				}
				let pics = JSON.stringify(this.imgList);
				console.log("教育类型:"+(this.typeIndex) );
				
				let pubData = {   //发布教育数据包
					'name':this.iptData.titText,
					'pic1':pics,
					'baomingStartime':this.date1+' '+this.time1+':00',
					'baomingEndtime':this.date2+' '+this.time2+':00',
					'baomingMinimum':this.iptData.pnum,
					'quyu':this.locText,
					'address':this.iptData.address,
					'changdifei':this.iptData.placeFee,
					'renlifei':this.iptData.humanFee,
					'other':this.iptData.otherFee,
					'lilvfei':this.iptData.earnFee,
					'minCredit':this.cradit[this.craditIndex] || '',
					'xueli':this.edu[this.eduIndex] || '',
					'diyu':this.areaText,
					'industry':this.iptData.business,
					'time':'2019-08-18',
					'renqun':this.crowd[this.crowdIndex] || '',
					'type':this.typeIndex
				}
				let userinfo = uni.getStorageSync('userinfo');
				let token = JSON.parse(userinfo).token;
				let pubResult = await general.generalGET( //调用通用请求方法进行教育数据提交
					this.global.baseUrl+'doSaveAct',
					pubData,
					{token}
				)
				if(pubResult.data.code == 'OK'){
					this.isShow = true
				}
				console.log(pubResult);
				
			},
			coverHide(){
				this.isShow = false
			},
			Date1Change(e) { //教育开始日期
				this.date1 = e.detail.value
				this.beginDay2 = e.detail.value;
			},
			Date2Change(e) { //教育截止日期
				this.date2 = e.detail.value
			},
			time1Change(e) { //教育开始时间
				this.time1 = e.detail.value
			},
			time2Change(e) { //教育截止时间
				this.time2 = e.detail.value
			},
			handleEduType(e) { //教育类型
				this.typeIndex = e.detail.value
			},
			handleLoc() { //教育地址选择
			  this.$refs.locCityPicker.show();
			  this.locShow = false;
			},
			onLocConfirm(e) {   //教育地址确认事件
			  console.log(e);
			  this.locShow = true;
			  this.locText = e.label.split('-').join(',');
			},
			craditChange(e){ //最低信用值
				this.craditIndex = e.detail.value
			},
			crowdChange(e){ //最低信用值
				this.crowdIndex = e.detail.value
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
			eduChange(e) {
				this.eduIndex = e.detail.value
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
			}
		}
	}
</script>

<style lang="scss">
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.cu-form-group{
		position: relative;
		overflow: hidden;
		&::after{
			content: '';
			height: 1upx;
			width: 100%;
			background: #ececec;
			transform: scaleY(0.5);
			position: absolute;
			bottom: 0;
			left: 30upx;
		}
		&.no-border::after{
			height: 0;
		}
		&:last-child{
			left: 0;
		}
	}
	.cu-form-group+.cu-form-group,
	.cu-form-group.no-border{
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
	.cu-form-group{
		position: relative;
		padding-left: 40upx;
		&:before{
			content: '*';
			color:#FF5500;
			position: absolute;
			top: 50%;
			left: 20upx;
			height: 10upx;
			width: 10upx;
			margin-top: -3upx;
			line-height: 10upx;
		}
		&.no-must::before{
			content: '';
		}
	}
</style>
