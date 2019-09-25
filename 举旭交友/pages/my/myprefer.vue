<template>
	<view>
		<cu-custom :hasBorder="true" :isBack="true">
			<block slot="content">偏好设置</block>
			<block slot="right">
				<text class="color-green margin-right" @tap="handleSave">保存</text>
			</block>
		</cu-custom>
		<view class="prefer-cont">
			<block v-for="(item,index) in preferData" :key="index">
				<view class="prefer-tit">
					{{item.tit}}
				</view>
				<view class="prefer-list margin-top margin-bottom">
					<!-- <view>
						20岁~30岁
					</view> -->
					<view 
					v-for="(listItem,listIndex) in item.list" 
					:key="listIndex" 
					:class="listItem.isCheck?'active':''" 
					@tap="handleItem(index,listIndex)">
						{{listItem.btntext}}
					</view>
				</view>
			</block>
			<view class="prefer-tit">
				工作地
			</view>
			<view class="cu-bar bg-white solid-bottom margin-top" >
				<view class="action">
					{{locText}}
				</view>
				<text class="iconfont icon-lower-triangle margin-right fs-32"></text>
				<view class="show-citypicker" @tap="handleArea" v-if="cpShow"></view>
				<mpvue-city-picker
				ref="mpvueCityPicker" 
				:pickerValueDefault="pickerValueDefault" 
				@onConfirm = "onConfirm" 
				@onCancel = "onLocCancel"
				>
				</mpvue-city-picker>
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
				upData:{}, //提交至服务器的偏好数据包
				locText:'请选择', //选择后的籍贯地要求内容【必填】
				pickerValueDefault: [0, 0, 0], //居住地
				cpShow:true,
				preferData:[ //偏好设置数据
					{
						type:'age',
						tit:'年龄',
						list:[
							{'btntext':'20岁~30岁','isCheck':false},
							{'btntext':'30岁~40岁','isCheck':false},
							{'btntext':'40岁~50岁','isCheck':false},
							{'btntext':'无标准','isCheck':false},
						]
					},
					{
						type:'shengao',
						tit:'身高',
						list:[
							{'btntext':'155cm以下','isCheck':false},
							{'btntext':'155~160cm','isCheck':false},
							{'btntext':'160~175cm','isCheck':false},
							{'btntext':'175cm以上','isCheck':false},
							{'btntext':'无标准','isCheck':false},
						]
					},
					{
						type:'weight',
						tit:'体重',
						list:[
							{'btntext':'48kg以下','isCheck':false},
							{'btntext':'48kg~55kg','isCheck':false},
							{'btntext':'55kg~60kg','isCheck':false},
							{'btntext':'60kg以上','isCheck':false},
							{'btntext':'无标准','isCheck':false},
						]
					},
					{
						type:'blood',
						tit:'血型',
						list:[
							{'btntext':'A型血','isCheck':false},
							{'btntext':'B型血','isCheck':false},
							{'btntext':'AB型血','isCheck':false},
							{'btntext':'O型血','isCheck':false},
							{'btntext':'无标准','isCheck':false},
						]
					},
					{
						type:'hunyin',
						tit:'婚姻状况',
						list:[
							{'btntext':'未婚','isCheck':false},
							{'btntext':'离异','isCheck':false},
							{'btntext':'无标准','isCheck':false}
						]
					},
					{
						type:'child',
						tit:'小孩情况',
						list:[
							{'btntext':'无小孩','isCheck':false},
							{'btntext':'跟女方','isCheck':false},
							{'btntext':'跟男方','isCheck':false}
						]
					},
					{
						type:'xueli',
						tit:'学历',
						list:[
							{'btntext':'高中','isCheck':false},
							{'btntext':'大专以下','isCheck':false},
							{'btntext':'本科','isCheck':false},
							{'btntext':'研究生','isCheck':false},
							{'btntext':'博士生','isCheck':false},
							{'btntext':'无标准','isCheck':false}
						]
					},
					{
						type:'salary',
						tit:'年薪',
						list:[
							{'btntext':'10万以下','isCheck':false},
							{'btntext':'10万~15万','isCheck':false},
							{'btntext':'15万~20万','isCheck':false},
							{'btntext':'20万~25万','isCheck':false},
							{'btntext':'25万~30万','isCheck':false},
							{'btntext':'无标准','isCheck':false},
						]
					},
					{
						type:'fangchan',
						tit:'房产',
						list:[
							{'btntext':'无房产','isCheck':false},
							{'btntext':'有房产','isCheck':false},
							{'btntext':'无标准','isCheck':false}
						]
					}
				]
			};
		},
		components: {
			mpvueCityPicker
		},
		async onLoad(){
			if(this.token){
				console.log(this.token)
				wx.showLoading()
				let prefer = await general.generalGET(
					this.global.baseUrl+'toPianHao',
					{},
					{token:this.token}
				)
				wx.hideLoading()
				console.log(prefer)
				prefer = prefer.data.jxMemberPianhao;
				let updata = {};
				let pData = this.preferData;
				let Len = pData.length;
				for(let attr in prefer){
					console.log(attr)
					for(let i=0;i<Len;i++){
						if(pData[i].type == attr){
							for(let j=0;j<pData[i].list.length;j++){
								if(pData[i].list[j].btntext == prefer[attr]){
									pData[i].list[j].isCheck = true;
									updata[attr] = pData[i].list[j].btntext
									break;
								}
							}
							break;
						}
					}
				}
				this.locText = prefer.workquyu || '请选择'
				this.upData = updata;
				this.upData.workquyu = prefer.workquyu;  //显示原有区域值
			}
		},
		methods: {
			handleItem(idx1,idx2) { //偏好选项的点击事件
				var d = this.preferData;
				let listLen = d[idx1].list.length;
				for(let i=0;i<listLen;i++){ //清除当前分类的其他选中状态
					d[idx1].list[i].isCheck = false;
				}
				d[idx1].list[idx2].isCheck = true; //为被点击元素添加选中状态
				this.preferData = d;
				let key = d[idx1].type; 
				let val = d[idx1].list[idx2].btntext;
				// console.log(key,val)
				this.upData[key] = val;
				console.log(JSON.stringify(this.upData))
			},
			handleArea() { //地域要求
			  console.log(555)
			  this.$refs.mpvueCityPicker.show();
			  this.cpShow = false;
			},
			onConfirm(e) {   //地域要求确认事件
			  console.log(e);
			  this.cpShow = true;
			  this.locText = e.label.split('-').join(',');
			  this.upData.workquyu = this.locText
			},
			async handleSave(){ //利用get请求通用方法，提交偏好至服务器
				// token = general.handleToken('userinfo').token;
				
				if(this.token){
					let saveData = await general.generalGET(
						this.global.baseUrl+'doPianHao',
						this.upData,
						{token:this.token}
					)
					console.log(saveData);
					if(saveData.data.code=='OK'){
						uni.showToast({
							title:'保存成功'
						})
					}else{
						uni.showToast({
							title:'保存失败',
							icon:'none'
						})
					}
				}else{
					uni.showToast({
						title:'请登录后设置偏好',
						icon:'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.cu-bar{
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
	.prefer-cont{
		padding: 30upx;
		.prefer-tit{
			position: relative;
			padding: 0 14upx;
			// border-left: 3upx solid #2DDBC4;
			&::before{
				content: '';
				height: 80%;
				width: 4upx;
				background: #2DDBC4;
				position: absolute;
				top: 3%;
				left: 0;
			}
		}
		.prefer-list{
			display: flex;
			flex-wrap: wrap;
			
			&>view{
				padding: 0 30upx;
				height: 60upx;
				line-height: 65upx;
				border-radius:50upx;
				background: #FFF;
				margin-right: 20upx;
				margin-bottom: 20upx;
				font-size: 28upx;
				&.active{
					background: #2DDBC4;
					color: #FFF;
				}
			}
		}
	}
</style>
