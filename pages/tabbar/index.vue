<template>
	<view>
		<view class="search-box">
			<u-search placeholder="搜索商品" v-model="keyword" :show-action="false" class="search"></u-search>
		</view>
		<u-swiper :list="banner"  height="300"></u-swiper>
		<view class="navList">
			<view class="nav-item" v-for="(item,index) in itemList" :key="item.id" :class="{'view-mr':(index+1)%5==0}">
				<view class="pictrue">
					<image :src="item.pictrue" mode=""></image>
				</view>
				<view class="text">
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="promotion-area-title">
			<image src="/static/img/promotion-area.png" mode=""></image>
		</view>
		<view class="promotion-area">
			<view class="seckill" @click="gotoSeckill">
				<view class="seckill-title">
					<image src="/static/img/seckill-title.png" mode=""></image>
				</view>
				<view class="seckill-subtitle">
					民宿家居火热销售
				</view>
				<view class="bg-img">
					
				</view>
			</view>
			<view class="assemble">
				<view class="assemble-title">
					一起来拼团
				</view>
				<view class="assemble-subtitle">
					优惠多多
				</view>
				<view class="bg-img">
					
				</view>
			</view>
		</view>
		<view class="promotion-area-title">
			<image src="/static/img/remenbangdan.png" mode=""></image>
		</view>
		<view class="goods-list" >
			<view class="goods" v-for="(item,index) in 3" :key="index">
				<view class="goods-img">
					<image src="/static/img/assemble-bg2.jpg" mode=""></image>
				</view>
				<view class="title">
					A1109 大月梳（赞比亚紫檀）
				</view>
				<view class="money">
					￥88.00
				</view>
			</view>
			
		</view>
		<view class="promotion-area-title">
			<image src="/static/img/shangpincuxiao.png" mode=""></image>
		</view>
		<view class="goods-ArrList" >
			<view class="goods" v-for="(item,index) in BenefitGoodsList" :key="index" @click="gotoGoodsDetail(item.id)">
				<view class="goods-img">
					<image :src="item.image" mode=""></image>
				</view>
				<view class="title">
					{{item.goodsName}}
				</view>
				<view class="money-box">
					<view class="box-left">
						<view class="money">
							<text style="font-size: 28upx;">￥</text>{{item.webPrice}}
						</view>
						<view class="ot-money">
							<text style="font-size: 28upx;">￥</text>{{item.webOldPrice}}
						</view>
						
					</view>
					<view class="fengqiang">
						<image src="/static/img/fengqiang.png" mode=""></image>
					</view>
				</view>				
			</view>
			
		</view>
		<pictrue></pictrue>
		
	</view>
</template>

<script>
	import {
		getSlides,
		getRecommendGoods
	} from "@/api/api.js"
	import pictrue from '@/components/pictrue/pictrue.vue'
	export default {
		components:{
			pictrue
		},
		data() {
			return {
				banner:[],
				keyword:'',
				BenefitGoodsList:[],
				itemList:[
					{
						typeId:10,
						pictrue:require('../../static/img/1.png'),
						title:'工艺品'
					},
					{
						typeId:12,
						pictrue:require('../../static/img/2.png'),
						title:'家具类'
					},
					{
						typeId:147,
						pictrue:require('../../static/img/3.png'),
						title:'木雕类'
					},
					{
						typeId:13,
						pictrue:require('../../static/img/4.png'),
						title:'大板类'
					},
					{
						typeId:135,
						pictrue:require('../../static/img/5.png'),
						title:'生活用具'
					},
					{
						typeId:20,
						pictrue:require('../../static/img/6.png'),
						title:'红木类'
					},
					{
						typeId:21,
						pictrue:require('../../static/img/7.png'),
						title:'实木类'
					},
					{
						typeId:121,
						pictrue:require('../../static/img/8.png'),
						title:'定制类'
					},
					{
						typeId:148,
						pictrue:require('../../static/img/9.png'),
						title:'户外类'
					},
					{
						typeId:136,
						pictrue:require('../../static/img/10.png'),
						title:'原材料'
					},
				]
			};
		},
		onLoad() {
			this.getSlides();
			this.getRecommendGoods()
		},
		methods:{
			gotoGoodsDetail(id){
				uni.navigateTo({
					url:`/index/goodsDetail/goodsDetail?id=${id}`
				})
			},
			gotoSeckill(){
				uni.navigateTo({
					url:'/index/skillGoods/skillGoods'
				})
			},
			getSlides(){
				getSlides({
					
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						this.banner = data.data
						
					} else {
						uni.showToast({
							title: data.msg || '请求错误',
							icon: 'none'
						})
						return false
					}
				})
				.catch(error => {
					console.log(error)
					uni.showToast({
						title: error.msg || '请求错误',
						icon: 'none'
					});
				});
			},
			getRecommendGoods(){
				getRecommendGoods({
					
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						this.BenefitGoodsList = data.data
						
					} else {
						uni.showToast({
							title: data.msg || '请求错误',
							icon: 'none'
						})
						return false
					}
				})
				.catch(error => {
					console.log(error)
					uni.showToast({
						title: error.msg || '请求错误',
						icon: 'none'
					});
				});
			}
		}
	}
</script>

<style lang="scss">
	

	
	.search-box{
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
	}
	.navList{
		overflow: hidden;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 20upx;
		box-sizing: border-box;
		.nav-item{
			overflow: hidden;
			margin-right: 73upx;
			margin-bottom: 30upx;
			.pictrue{
				width:80upx;
				height: 80upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				font-size: 24upx;
				margin-top: 20upx;
			}
		}
		.view-mr{
			 margin-right: 0upx !important;
		}
	}
	
	.promotion-area-title{
		width:450upx;
		height: 100upx;
		margin: 0 auto;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.promotion-area{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30upx;
		box-sizing: border-box;
		.seckill{
			width: 330upx;
			height: 420upx;
			box-shadow: 0px 0px 20upx 2upx rgba(128, 128, 128, 0.5);
			border-radius: 20upx;
			overflow: hidden;
			.seckill-title{
				padding:25upx;
				box-sizing: border-box;
				width: 250upx;
				height: 100upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.seckill-subtitle{
				padding-left: 25upx;
				box-sizing: border-box;
				
				font-size: 26upx;
				color: #5B5B5B;
				
			}
			.bg-img{
				width: 100%;
				height: 280upx;
				background-image: url('/static/img/seckill-bg.png');
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
		}
		.assemble{
			width: 330upx;
			height: 420upx;
			box-shadow: 0px 0px 20upx 2upx rgba(128, 128, 128, 0.5);
			border-radius: 20upx;
			overflow: hidden;
			position: relative;
			.assemble-title{
				padding:25upx;
				font-weight: bold;
				box-sizing: border-box;
				font-size: 38upx;
				color: #3e3e3e;
			}
			.assemble-subtitle{
				padding-left: 25upx;
				box-sizing: border-box;
				font-size: 26upx;
				color: #5B5B5B;
			}
			.bg-img{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 200upx;
				background-image: url('../../static/img/assemble-bg2.jpg');
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
		}
	}
	
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		.goods{
			margin-left: 20upx;
			width:225upx;
			overflow: hidden;
			// height: 300upx;
			border-radius: 15upx;
			.goods-img{
				width: 100%;
				height: 200upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				margin-top: 10upx;
				font-size: 24upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.money{
				color: #E34819;
				font-size: 24upx;
			}
		}
		
	}
	.goods-ArrList{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		.goods{
			margin-left: 20upx;
			width:345upx;
			overflow: hidden;
			// height: 300upx;
			border-radius: 15upx;
			margin-top: 25upx;
			.goods-img{
				width: 100%;
				height: 294upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				margin-top: 10upx;
				font-size: 30upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.money-box{
				display: flex;
				align-items: center;
				.box-left{
					.money{
						color: #E34819;
						font-size: 34upx;
					}
					.ot-money{
						font-size: 18upx;
						color: #aaa;
						text-decoration: line-through;
						
					}
				}
				.fengqiang{
					width: 75upx;
					height: 30upx;
					margin-left: 5upx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			
		}
	}
	
	
</style>
