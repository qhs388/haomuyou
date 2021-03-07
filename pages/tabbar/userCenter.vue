<template>
	<view>
		<view class="header">
			<view class="between-wrapper">
				<view class="wrp-left">
					<view class="pictrue">
						<image src="" mode=""></image>
					</view>
					<view class="text">
						<view class="name">
							youzhi
						</view>
						<view class="phone">
							<view class="number">
								绑定手机号
							</view>
							<view class="edit">
								<image src="/static/img/edit.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				<view class="user-set" @click="gotoSetting()">
					<image src="/static/img/user-set.png" mode=""></image>
				</view>
			</view>
			<view class="nav">
				<view class="item">
					<view class="num">
						0.00
					</view>
					<view class="text">
						余额(元)
					</view>
				</view>
				<view class="item">
					<view class="num">
						0
					</view>
					<view class="text">
						积分
					</view>
				</view>
			</view>
		</view>
		<view class="wrapper">
			<view class="myOrder">
				<view class="title">
					<view class="text">
						我的订单
					</view>
					<view class="more">
						全部订单>
					</view>
				</view>
				<view class="orderState">
					<view class="item" v-for="(item,index) in itemList" :key="index" @click="gotoMyorder()">
						<view class="icon">
							<image :src="item.pictrue" mode=""></image>
						</view>
						<view class="text">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
			<view class="myService">
				<view class="title">
					<view class="text">
						我的服务
					</view>
					
				</view>
				<view class="serviceList">
					<view class="item" v-for="(item,index) in serviceList" :key="index" @click="gotoUrl(item.url)" :class="{'view-mr':(index+1)%4==0}">
						<view class="icon">
							<image :src="item.pictrue" mode=""></image>
						</view>
						<view class="text">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<pictrue></pictrue>
	</view>
</template>

<script>
	import pictrue from '@/components/pictrue/pictrue.vue'
	export default {
		components:{
			pictrue
		},
		data() {
			return {
				itemList:[
					{
						typeId:10,
						pictrue:require('../../static/img/daifukuan.png'),
						title:'待付款'
					},
					{
						typeId:12,
						pictrue:require('../../static/img/daipintuan.png'),
						title:'待拼团'
					},
					{
						typeId:147,
						pictrue:require('../../static/img/daifahuo.png'),
						title:'待发货'
					},
					{
						typeId:13,
						pictrue:require('../../static/img/daishouhuo.png'),
						title:'待收货'
					},
					{
						typeId:135,
						pictrue:require('../../static/img/yiwancheng.png'),
						title:'已完成'
					}
				],
				serviceList:[
					{
						url:'/my/applyManager/applyManager',
						pictrue:require('../../static/img/sqcwzg.png'),
						title:'申请掌柜'
					},
					{
						url:'/my/applyPartner/applyPartner',
						pictrue:require('../../static/img/sqcwhhr.png'),
						title:'申请合伙人'
					},
					{
						url:'/my/applyVip/applyVip',
						pictrue:require('../../static/img/sqcwvip.png'),
						title:'申请VIP'
					},
					{
						typeId:13,
						pictrue:require('../../static/img/wdewm.png'),
						title:'我的二维码'
					},
					{
						url:'/my/addressList/addressList',
						pictrue:require('../../static/img/dzgl.png'),
						title:'地址管理'
					},
					{
						typeId:135,
						pictrue:require('../../static/img/wdfs.png'),
						title:'我的粉丝'
					},{
						typeId:135,
						pictrue:require('../../static/img/wodeshoucang.png'),
						title:'我的收藏'
					}
				]
			};
		},
		methods:{
			gotoUrl(url){
				uni.navigateTo({
					url:url
				})
			},
			gotoMyorder(){
				uni.navigateTo({
					url:`/my/myOrder/myOrder`
				})
			},
			gotoSetting(){
				uni.navigateTo({
					url:'/my/userSetting/userSetting'
				})
			}
		}
	}
</script>

<style lang="scss" >
	page{
		background-color: #f5f5f5;
	}
	image{
		width: 100%;
		height: 100%;
	}
	.header{
		padding: 20upx 30upx;
		overflow: hidden;
		background-color: #e93323;
		.between-wrapper{
			display: flex;
			justify-content: space-between;
			margin-bottom: 30upx;
			box-sizing: border-box;
			.wrp-left{
				display: flex;
				align-items: center;
				.pictrue{
					width: 100upx;
					height: 100upx;
					border-radius: 100%;
					overflow: hidden;
					background-color: #e3e3e3;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.text{
					margin-left: 20upx;	
					.name{
						font-size: 28upx;
						color: #FFFFFF;
					}
					.phone{
						font-size: 26upx;
						color: #ffffff99;
						display: flex;
						align-items: center;
						.number{
							margin-right: 5upx;
						}
						.edit{
							width: 22upx;
							height: 22upx;
							image{
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
			.user-set{
				width: 52upx;
				height: 48upx;
			}
		}
		.nav{
			display: flex;
			align-items: center;
			.item{
				color: #FFFFFF;
				font-size: 28upx;
				margin-right: 40upx;
				.num{
					text-align: center;
				}
				.text{
					text-align: center;
				}
			}
		}
	}
	
	.wrapper{
		padding: 30upx;
		box-sizing: border-box;
		.myOrder{
			padding: 20upx 30upx;
			background-color: #FFFFFF;
			overflow: hidden;
			border-radius: 10upx;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20upx;
				.text{
					font-size: 30upx;
					font-weight: bold;
					color: #0D0D0D;
				}
				.more{
					font-size: 24upx;
					color: #666;
				}
			}
			.orderState{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.item{
				
					.icon{
						margin: 0 auto;
						width:56upx;
						height: 56upx;
					}
					.text{
						margin-top: 10upx;
						text-align: center;
						font-size: 24upx;
					}
				}
			}
		}
		.myService{
			padding: 20upx 30upx;
			background-color: #FFFFFF;
			overflow: hidden;
			border-radius: 10upx;
			margin-top: 30upx;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20upx;
				.text{
					font-size: 30upx;
					font-weight: bold;
					color: #0D0D0D;
				}
				.more{
					font-size: 24upx;
					color: #666;
				}
			}
			.serviceList{
				 display: flex;
				 align-items: center;
				 flex-wrap: wrap;
				.item{
					margin-right: 60upx;
					margin-top: 40upx;
					margin-bottom: 40upx;
					.icon{
						margin: 0 auto;
						width:52upx;
						height: 52upx;
					}
					.text{
						margin-top: 10upx;
						text-align: center;
						font-size: 24upx;
					}
				}
			}
		}
	}
	.view-mr{
		margin-right: 0upx !important;
	}
</style>
