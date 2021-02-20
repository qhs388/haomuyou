<template>
	<view>
		<view class="allAddress">
			<view class="address">
				<view class="addressCon" @click="show=true">
					
					<view class="text" >
						 设置收货地址
					</view>
					<u-icon name="arrow-right" size="33" color="#82848f"></u-icon>
				</view>
				<view class="line">
					<image src="/static/img/line.05bf1c84.jpg" mode=""></image>
				</view>
			</view>
			
			
		</view>
		<view class="orderGoods">
			<view class="total">
				共1件商品
			</view>
			<view class="goodWrapper">
				<view class="item">
					<view class="pictrue">
						<image src="" mode=""></image>
					</view>
					<view class="text">
						<view class="acea-row">
							<view class="name">
								J2038 新方凳 （绿芯檀-奥坎）
							</view>
							<view class="num">
								x1
							</view>
						</view>
						<view class="attr">
							默认
						</view>
						<view class="money">
							￥296.00
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="wrapper">
			<view class="item">
				<text>积分抵扣</text>
				<view class="discount">
					<view class="integral">
						当前积分
						<view style="margin-left: 5upx;">
							<text style="color: #fc4141">0</text>
						</view>
					</view>
					<u-checkbox-group  >
						<u-checkbox 
							shape="circle"
							active-color="#e93323"
							
							v-model="flag"
						></u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
			<view class="remarks">
				<view class="title">
					备注信息
				</view>
				<textarea value="" placeholder="请添加备注（150字以内）" />
			</view>
		</view>
		<view class="moneyList">
			<view class="item">
				<view class="text">
					商品总价:
				</view>
				<view class="money">
					￥296.00
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="allMoney">
				<view class="text">
					合计：
				</view>
				<view class="num">
					￥296.00
				</view>
			</view>
			<u-button shape="circle" :customStyle="customStyle" >立即结算</u-button>
		</view>
		
		<u-popup v-model="show" mode="bottom" length="75%">
			<view class="content">
				<view class="popupTitle">
					选择地址
				</view>
				
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				customStyle:{
					width:'120px',
					marginLeft:'20px',
					backgroundColor:'#ff1f44',
					color:'#fff'
				},
				flag:false,
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	image{
		width: 100%;
		height: 100%;
		display: block;
	}
	page{
		background-color: #f5f5f5;
	}
	.allAddress{
		padding: 20upx;
		box-sizing: border-box;
		background-image: linear-gradient(180deg,#e93323 0,#f5f5f5);
		.address{
			width: 100%;
			height: 164upx;
			background-color: #FFFFFF;
			position: relative;
			
			
			.addressCon{
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100%;
				font-size: 26upx;
				color: #666;
				padding: 30upx;
				box-sizing: border-box;
			}
			.line{
				width: 100%;
				height: 3upx;
				position: absolute;
				bottom: 0upx;
			}
		}
	}
	
	.orderGoods{
		background-color: #FFFFFF;
		.total{
			padding: 20upx;
			box-sizing: border-box;
			font-size: 30upx;
			color: #282828;
			line-height: 50upx;
			border-bottom: 1upx solid #eee;
		}
		.goodWrapper{
			padding: 20upx;
			box-sizing: border-box;
			.item{
				display: flex;
				align-items: center;
				.pictrue{
					width: 140upx;
					height: 140upx;		
				}
				.text{
					margin-left: 15upx;
					.acea-row{
						display: flex;
						align-items: center;
						.name{
							width: 500upx;
							font-size: 28upx;
							color: #282828;
						}
						.num{
							color: #868686;
							font-size: 26upx;
						}
					}
					.attr{
						font-size: 24upx;
						color: #868686;
						margin-top: 5upx;
					}
					.money{
						margin-top: 17upx;
						color: #fc4141;
					}
				}
			}
		}
	}
	
	.wrapper{
		margin-top: 20upx;
		background-color: #FFFFFF;
		.item{
			display: flex;
			justify-content: space-between;
			color: #282828;
			border-bottom: 1upx solid #f0f0f0;
			font-size: 30upx;
			padding: 30upx 20upx;
			box-sizing: border-box;
			.discount{
				display: flex;
				align-items: center;
				.integral{
					margin-right: 20upx;
					color: #999;
					display: flex;
					align-items: center;
				}
			}
		}
		.remarks{
			padding: 30upx 20upx;
			box-sizing: border-box;
			.title{
				color: #282828;
				font-size: 30upx;
			}
			textarea{
				background-color: #f9f9f9;
				width: 660upx;
				height: 154upx;
				border-radius: 5upx;
				margin-top: 30upx;
				padding: 25upx;
			}
			
		}
	}
	.moneyList{
		width: 100%;
		padding: 30upx 20upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-top: 20upx;
		.item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24upx;
			.text{
				
			}
			.money{
				color: #868686;
			}
		}
	}
	.footer{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0upx;
		background-color: #FFFFFF;
		width: 100%;
		padding:  20upx;
		box-sizing: border-box;
		.allMoney{
			display: flex;
			align-items: center;
			.text{
				
			}
			.num{
				color: #fc4141;
			}
		}
	}
	.content{
		padding: 30upx;
		box-sizing: border-box;
		.popupTitle{
			text-align: center;
			color: #333;
			font-size: 34upx;
			font-weight: bold;
		}
	}
	
</style>
