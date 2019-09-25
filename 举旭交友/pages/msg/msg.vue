<template>
	<view>
		<cu-custom  :isBack="false" :hasBorder="true">
			<block slot="content">
				消息				
			</block>
		</cu-custom>
        <view class="chat-list">
			<view class="chat" v-for="(chat,index) in chatList" :key="index">
				<view class="row" @tap="toChat(chat)">
					<view class="left">
						<image :src="chat.face"></image>
						<view class="tis" v-if="chat.tisNum>0">{{chat.tisNum}}</view>
					</view>
					<view class="right">
						<view class="top">
							<view class="username">{{chat.username}}</view>
							<view class="time">{{chat.time}}</view>
						</view>
						<view class="bottom">
							<view class="msg">{{chat.msg}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<cu-tab activeIndex="3"></cu-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatList:[
					{
						uid:1,
						username:"用户昵称",
						face:"/static/img/im/face/face_1.jpg",
						time:"13:08",
						msg:"亲，在吗？",
						tisNum:1
					},
					{
						uid:2,
						username:"用户昵称",
						face:"/static/img/im/face/face_2.jpg",
						time:"13:05",
						msg:"消息内容",
						tisNum:0
					},
					{
						uid:3,
						username:"用户昵称",
						face:"/static/img/im/face/face_3.jpg",
						time:"12:15",
						msg:"消息内容？",
						tisNum:0
					},
					{
						uid:4,
						username:"用户昵称",
						face:"/static/img/im/face/face_4.jpg",
						time:"12:11",
						msg:"消息内容",
						tisNum:0
					},
					{
						uid:5,
						username:"用户昵称客服",
						face:"/static/img/im/face/face_5.jpg",
						time:"12:10",
						msg:"你好，在吗？",
						tisNum:0
					},
					{
						uid:6,
						username:"用户昵称",
						face:"/static/img/im/face/face_6.jpg",
						time:"12:10",
						msg:"在吗？",
						tisNum:0
					}
				]
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onLoad() {

		},
		methods: {
			toChat(chat){
				uni.navigateTo({
					url:"chat/chat?name="+chat.username
				})
			}
		}
	}
</script>

<style  lang="scss">
	page{
		background-color: #F6F6F6;
		padding-bottom: 140upx;
	}
	.chat-list{
		width: 100%;
		padding: 0 30upx;
		// margin-top: 10upx;
		background: #FFF;
		.chat{
			width: 100%;
			height: 150upx;
			padding: 20upx 0;
			border-bottom: solid 1upx #eaeaea;
			.row{
				display: flex;
				justify-content: flex-start;
				.left{
					flex-shrink:0;
					width: 108upx;
					height: 108upx;
					position: relative;
					margin-right: 25upx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
					.tis{
						width: 40upx;
						height: 40upx;
						font-size: 22upx;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #F03D3D;
						color: #fff;
						border-radius: 100%;
						position: absolute;
						bottom: 0;
						right: 0;
					}
				}
				.right{
					flex-shrink:1;
					width: 98%;
					padding-left: 2%;
					.top{
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.username{
							font-size: 32upx;
							margin-top: 10upx;
						}
						.time{
							font-size: 24upx;
							color: #bebebe;
						}
					}
					.bottom{
						width: 100%;
						height: 40upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.msg{
							font-size: 28upx;
							color: #777;
						}
						
					}
				}
			}
		}
	}
</style>
