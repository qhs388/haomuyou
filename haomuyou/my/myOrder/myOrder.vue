<template>
	<view>
		<view class="header">
			<view class="picTxt">
				<view class="text">
					<view class="name">
						订单信息
					</view>
					<view class="supText">
                        累计订单：6 总消费：￥4862.00
					</view>
				</view>
				<view class="pictrue">
					<image src="/static/img/211589991417_.pic_hd.png" mode=""></image>
				</view>
			</view>
			<view class="nav">
				<ss-navbar :navArr="list" :tabCurrentIndex="current" @navbarTap="change"></ss-navbar>
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in lists.list" :key="index" @click="gotoDetail()">
				<view class="title">
					<view class="time">
						2021-02-20 16:01:04
					</view>
					<view class="status">
						待付款
					</view>
				</view>
				<view class="shops">
					<view class="shop" v-for="(item,index) in 2" :key="index">
						<view class="shop-left">
							<view class="pictrue">
								<image src="/static/img/seckill-bg.png" mode=""></image>
							</view>
							<view class="name">
								A1109 大月梳（赞比亚紫檀）
							</view>
						</view>
						<view class="text">
							<view class="money">
								￥88.00
							</view>
							<view class="num">
								x1
							</view>
						</view>
					</view>
					<view class="totalPrice">
						<text>共2件商品，总金额</text>
						<view class="money">
							￥88.00
						</view>
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
			<view class="not-list" v-if="lists.list.length==0">
				<image src="/static/img/noOrder.90017ce2.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import ssNavbar from '@/components/ss-navbar/ss-navbar.vue'
	export default {
		components:{
			ssNavbar
		},
		data() {
			return {
				lists:{
					list:[{}],
					search:{
						page: 0,
						limit: 10,
					}
				},
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
				list: [{
					title: '待付款',
					count: 6
				}, {
					title: '待拼团',
					count: 0
				},  {
					title: '待发货',
					count: 0
				}, {
					title: '待收货',
					count: 0
				}, {
					title: '待评价',
					count: 0
				},{
					title: '已完成',
					count: 0
				}],
				current: 0,
				
			};
		},
		onReachBottom() {
			this.page++;
		},
		methods:{
			change(index) {
				this.current = index;
			},
			gotoDetail(id){
				uni.navigateTo({
					url:`/my/orderDetail/orderDetail?id=${id}`
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
	}
	.header{
		height: 286upx;
		background-color: #ff1f44;
		padding: 25upx;
		padding-top: 0upx;
		box-sizing: border-box;
		.picTxt{
			width: 100%;
			height: 208upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.text{
				color: #FFFFFF;
				font-size: 26upx;
				font-family: GuildfordProBook\ 5;
				.name{
					font-size: 34upx;
					font-weight: 700;
					margin-bottom: 20upx;
				}
				.supText{
					
				}
			}
			.pictrue{
				width: 134upx;
				height:120upx ;
			}
		}
		.nav{
			width: 99%;
			margin: 0 auto;
		}
	}
	
	.list{
		overflow: hidden;
		padding: 25upx;
		box-sizing: border-box;
		margin-top: 25upx;
		.item{
			background-color: #FFFFFF;
			border-radius: 10upx;
			margin-bottom: 10upx;
			.title{
				display: flex;
				align-items: center;
				padding: 20upx 25upx;
				box-sizing: border-box;
				justify-content: space-between;
				color: #282828;
				font-size: 30upx;
				border-bottom: 1upx solid #eee;
				.time{
				}
				.status{
					color: #E34819;
				}
			}
			.shops{
				overflow: hidden;
				padding: 20upx 25upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #eee;
				.shop{
					display: flex;
					justify-content: space-between;
					// align-items: center;
					font-size: 28upx;
					margin-bottom: 10upx;
					.shop-left{
						display: flex;
						.pictrue{
							width: 132upx;
							height: 132upx;
							border-radius: 15upx;
						}
						.name{
							width: 340upx;
							color: #282828;
							margin-left: 15upx;
						}
					}
					.text{
						color: #999;
						text-align: right;
						height: 132upx;
						position: relative;
						.money{
							
						}
						.num{
							position: absolute;
							bottom: 0;
							right: 0;
						}
					}
				}
				
				.totalPrice{
					font-size: 26upx;
					color: #282828;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-top: 20upx;
					.money{
						margin-left: 10upx;
						color: #E34819;
					}
				}
			}
			.bottom{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 20upx 25upx;
				box-sizing: border-box;
			}
		}
	}
	
	.not-list{
		width: 440upx;
		height: 330upx;
		margin: 0 auto;
		margin-top: 150upx;
	}
</style>
