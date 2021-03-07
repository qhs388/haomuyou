<template>
	<view>
		<view class="content">
			<view class="line">
				<image src="/static/img/line.05bf1c84.jpg" mode=""></image>
			</view>
			<view class="item">
				<view class="item-top">
					<view class="item-view">
						<view class="name">
							收货人：测试
						</view>
						<view class="phone">
							18780581923
						</view>
					</view>
					<view class="address">
						收货地址：四川成都市金牛区金牛小区
					</view>
				</view>
				<view class="item-bottom">
					<view class="bottom-left">
						<u-checkbox-group  >
							<u-checkbox 
								shape="circle"
								active-color="#e93323"
								v-model="flag"
							>
								<view class="text">
									设为默认
								</view>
							</u-checkbox>
						</u-checkbox-group>
						
					</view>
					<view class="margin-right">
						<view class="right-item">
							<view class="icon">
								<image src="/static/img/bianji.png" mode=""></image>
							</view>
							<view class="text">
								编辑
							</view>
						</view>
						<view class="right-item" style="margin-left: 50upx;">
							<view class="icon">
								<image src="/static/img/shanchu.png" mode=""></image>
							</view>
							<view class="text">
								删除
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<view class="foot">
				<view class="button">
					<u-button :custom-style="customStyle" :ripple="true" type="warning"  shape="circle" @click="send"   >
						添加地址
					</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:true,
				customStyle: {
					border:'1px solid #fff',
					width: '200upx', 
					height:'90upx',
					background:"#ff1f44",
					color: '#fff',
					fontSize:'32upx'
				},
			};
		},
		methods:{
			send(){
				uni.navigateTo({
					url:'/my/addressAdd/addressAdd'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f5f5f5;
	}
	image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.content{
		position: relative;
		background-color: #fff;
		.line{
			width: 100%;
			height: 4upx;
			position: absolute;
			top: 0upx;
		}
		.item{
			padding: 25upx;
			box-sizing: border-box;
			.item-top{
				padding-bottom: 20upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #eee;
				.item-view{
					display: flex;
					align-items: center;
					font-size: 28upx;
					color: #282828;
					font-weight: 700;
					.name{
						
					}
					.phone{
						margin-left: 20upx;
					}
				}
				.address{
					margin-top: 15upx;
					font-size: 28upx;
					
				}
			}
			
			.item-bottom{
				padding-top: 20upx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.bottom-left{
					display: flex;
					align-items: center;
					.text{
						font-size: 28upx;
						color: #282828;
						margin-left: 16upx;
					}
				}
				.margin-right{
					display: flex;
					align-items: center;
					.right-item{
						display: flex;
						align-items: center;
						.icon{
							width: 35upx;
							height: 35upx;
						}
						.text{
							font-size: 28upx;
							color: #2c2c2c;
							margin-left: 10upx;
						}
					}
				}
			}
		}
	}
	
	.foot{
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0upx;
		overflow: hidden;
		z-index: 10;
		.tips{
			width: 100%;
			padding: 12upx;
			box-sizing: border-box;
			background-color: #FFF9F2;
			font-size: 22upx;
			color: #FF6941;
			text-align: center;
		}
		.button{
			padding: 16upx 24upx;
			box-sizing: border-box;
		}
	}
</style>
