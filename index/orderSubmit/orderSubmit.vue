<template>
	<view>
		<view class="allAddress">
			<view class="address">
				<view class="addressCon" @click="show=true">
					
					<view class="addressItem">
						<view class="addressItem-top">
							<view class="name">
								测试
							</view>
							<view class="phone">
								18780581923
							</view>
						</view>
						<view class="addressItem-bottom">
							<text style="color: #fc4141;">[默认]</text>
							<view style="margin-left: 15upx;">
								北京密云区城区以外的
							</view>
						</view>
					</view>
				<!-- 	<view class="text" >
						 设置收货地址
					</view> -->
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
		
		<u-popup v-model="show" mode="bottom" >
			<view class="content">
				<view class="popupTitle">
					选择地址
				</view>
				<view class="content-view">
					<view class="addressItem" @click="clickItem(index)" :style="{'color':(addressIndex==index?'#fc4141 ':'#282828')}" v-for="(item,index) in addressList" :key="index">
						<view class="addressItem-left">
							<view class="addressItem-top">
								<view class="name">
									测试
								</view>
								<view class="phone">
									18780581923
								</view>
							</view>
							<view class="addressItem-bottom" :style="{'color':(addressIndex==index?'#fc4141 ':'#282828')}">
								<view>
									北京密云区城区以外的
								</view>
							</view>
						</view>
						<u-icon name="checkmark" v-if="addressIndex==index" :color="addressIndex==index?'#fc4141':'#282828'" size="38"></u-icon>
					</view>
					<view class="noaddress" v-if="addressList.length==0">
						<image src="/static/img/noAddress.png" mode=""></image>
					</view>
					
				</view>
				<view class="foot-button">
					<u-button :custom-style="customStyle2" :ripple="true" type="warning"  shape="circle" @click="gotoAddressAdd"   >
						添加地址
					</u-button>
				</view>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[],
				show:false,
				addressIndex:0,
				customStyle:{
					width:'120px',
					marginLeft:'20px',
					backgroundColor:'#ff1f44',
					color:'#fff'
				},
				customStyle2: {
					border:'1px solid #fff',
					width: '200upx', 
					height:'90upx',
					background:"#ff1f44",
					color: '#fff',
					fontSize:'32upx'
				},
				flag:false,
			};
		},
		methods:{
			clickItem(index){
				this.addressIndex = index
			},
			gotoAddressAdd(){
				uni.navigateTo({
					url:'/my/addressAdd/addressAdd'
				})
			}
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
				.addressItem{
					.addressItem-top{
						display: flex;
						align-items: center;
						font-size: 30upx;
						font-weight: 700;
						.name{
							
						}
						.phone{
							margin-left: 25upx;
						}
					}
					.addressItem-bottom{
						color: #666;
						display: flex;
						align-items: center;
						font-size: 26upx;
						margin-top: 15upx;
					}
				}
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
		min-height: 40%;
		.popupTitle{
			text-align: center;
			color: #333;
			font-size: 34upx;
			font-weight: bold;
			margin-bottom: 20upx;
		}
		.content-view{
			max-height: 600upx;
		
			overflow-y: auto;
			.addressItem{
				padding-bottom: 25upx;
				border-bottom: 1upx solid #eee;
				box-sizing: border-box;
				margin-top: 25upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.addressItem-left{
					
					.addressItem-top{
						display: flex;
						align-items: center;
						font-size: 30upx;
						font-weight: 700;
						.name{
							
						}
						.phone{
							margin-left: 25upx;
						}
					}
					.addressItem-bottom{
						color: #666 ;
						display: flex;
						align-items: center;
						font-size: 26upx;
						margin-top: 15upx;
					}
				}
				
			}
		}
		.foot-button{
			margin-top: 100upx;
		}
		
	}
	
	.noaddress{
		width: 414upx;
		height: 336upx;
		margin: 0 auto;
		margin-top: 100upx;
		image{
			width: 100%;
			height: 100%;
			display: block;
		}
	}
	
</style>
