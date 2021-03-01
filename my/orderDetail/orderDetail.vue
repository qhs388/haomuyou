<template>
	<view style="padding-bottom: 110upx;box-sizing: border-box;">
		<view class="header">
			<view class="pictrue">
				<image src="/static/img/5c9ccca151e99.gif" mode=""></image>
			</view>
			<view class="data">
				<view class="state">
					请在2021-02-21 16:01:04前完成支付
				</view>
				<view class="time">
					<text>2021-02-20</text>
					<view class="date">
						16:01:01
					</view>
				</view>
			</view>
		</view>
		<view class="nav">
			<u-steps :list="numList" mode="dot" active-color="#e93323" :current="0"></u-steps>
		</view>
		<view class="address">
			<view style="padding: 25upx;padding-bottom:30upx;box-sizing: border-box;">
				<view class="top">
					<view class="name">
						测试
					</view>
					<view class="phone">
						18780581923
					</view>
				</view>
				<view class="text">
					四川 成都市 金牛区 金牛小区
				</view>
			</view>
			<view class="line">
				<image src="/static/img/line.05bf1c84.jpg" mode=""></image>
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
				<view class="title">
					订单编号:
				</view>
				<view class="content">
					
				</view>
			</view>
			<view class="item">
				<view class="title">
					下单时间:
				</view>
				<view class="content">
					2021-02-24 15:36:00
				</view>
			</view>
			<view class="item">
				<view class="title">
					订单类型:
				</view>
				<view class="content">
					普通订单
				</view>
			</view>
			<view class="item">
				<view class="title">
					支付状态:
				</view>
				<view class="content">
					未支付
				</view>
			</view>
			<view class="item">
				<view class="title">
					支付方式:
				</view>
				<view class="content">
					暂未支付
				</view>
			</view>
		</view>
		
		<view class="wrapper">
			<view class="item">
				<view class="title">
					支付金额:
				</view>
				<view class="content">
					￥296.00
				</view>
			</view>
			<view class="item">
				<view class="title">
					积分抵扣:
				</view>
				<view class="content">
					-￥00.00
				</view>
			</view>
			<view class="actualPay">
				<text>实付款：<text style="color: #E34819 ;">￥0.00</text></text>
			</view>
		</view>
		
		<view class="bottom">
			<u-button :custom-style="customStyle2"  shape="circle" @click="send"  >
				取消订单
			</u-button>
			<u-button :custom-style="customStyle"  shape="circle" @click="send"  >
				立即付款
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					width: '97px', 
					height:'33px',
					background:' #ff1f44',
					color: '#fff',
					fontSize:'28upx',
					marginLeft:'10px',
				},
				customStyle2: {
					
					width: '97px', 
					height:'33px',
					background:' #fff',
					border:'0.2px solid #aaa',
					color: '#aaa',
					fontSize:'28upx'
				},
				numList: [{
					name: '待付款'
				}, {
					name: '待发货'
				}, {
					name: '待收货'
				}, {
					name: '待评价'
				},  {
					name: '已完成'
				},],
			};
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
	.header{
		width: 100%;
		height: 164upx;
		background-color: #e93323;
		padding: 25upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		.pictrue{
			width: 120upx;
			height: 120upx;
		}
		.data{
			margin-left: 20upx;
			font-size: 24upx;
			color: #ffffffcc;
			.state{
				font-weight: 700;
				font-size: 30upx;
				color: #FFFFFF;
				margin-bottom: 15upx;
			}
			.time{
				display:flex;
				align-items: center;
				.date{
					margin-left: 20upx;
				}
			}
		}
	}
	.nav{
		background-color: #FFFFFF;
		padding: 25upx;
		box-sizing: border-box;
	}
	
	.address{
		margin-bottom: 15upx;
		background-color: #FFFFFF;
		position: relative;
		.top{
			display: flex;
			align-items: center;
			
			
			.name{
				font-size: 30upx;
				color: #282828;
			}
			.phone{
				font-size: 30upx;
				margin-left: 15upx;
				
			}
		}
		.text{
			margin-top: 10upx;
			font-size: 26upx;
			color: #868686;
		}
		.line{
			width: 100%;
			height: 7upx;
			position: absolute;
			bottom: 0upx;
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
		overflow: hidden;
		margin-top: 15upx;
		padding: 25upx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		.item{
			display: flex;
			justify-content: space-between;
			color: #282828;
			font-size: 28upx;
			margin-bottom: 20upx;
			
			.title{
				
			}
			.content{
				text-align: right;
				color: #868686;
			}
		}
		.actualPay {
			text-align: right;
			font-size: 28upx;
			color: #282828;
		}
	}
	
	.bottom{
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0upx;
		width: 100%;
		overflow: hidden;
		padding: 20upx;
		border-top: 1upx solid #eee;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
</style>
