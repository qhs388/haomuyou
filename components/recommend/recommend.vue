<template>
	<view>
		<view class="content">
			<view class="title-heard">
				为你推荐
			</view>
			<view class="content-view">
				<view class="goods" v-for="(item,index) in GoodsList" :key="index" @click="gotoGoodsDetail(item.id)">
					<view class="pictrue_log_class pictrue_log_big">
						热销
					</view>
					<view class="goods-img">
						<image :src="item.image" mode=""></image>
					</view>
					<view class="title">
						{{item.goodsName}}
					</view>
					<view class="money-box">
						<view class="box-left">
							<view class="money">
								<text style="font-size: 24upx;">￥</text>{{item.webPrice}}
							</view>
						<!-- 	<view class="ot-money">
								<text style="font-size: 28upx;">￥</text>{{item.webOldPrice}}
							</view> -->
							
						</view>
					<!-- 	<view class="fengqiang">
							<image src="/static/img/fengqiang.png" mode=""></image>
						</view> -->
					</view>				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getRecommendGoods
	} from "@/api/api.js"
	export default {
		data() {
			return {
				GoodsList:[],
			};
		},
		mounted() {
			
			this.getRecommendGoods()
		},
		methods:{
			gotoGoodsDetail(id){
				uni.navigateTo({
					url:`/index/goodsDetail/goodsDetail?id=${id}`
				})
			},
			getRecommendGoods(){
				console.log("Aaaaaaaaaaaaaaaa")
				
				getRecommendGoods({
					
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						this.GoodsList = data.data
						
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
	.content{
		padding: 0upx 25upx;
		padding-top: 35upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-top: 35upx;
		padding-bottom: 25upx;
		box-sizing: border-box;
		.title-heard{
			display: flex;
			justify-content: center;
			font-size: 32upx;
			color: #454545;
		}
		.content-view{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			.goods{
				position: relative;
				margin-left: 20upx;
				width:330upx;
				overflow: hidden;
				// height: 300upx;
				border-radius: 15upx;
				margin-top: 25upx;
				.goods-img{
					width: 100%;
					border-radius: 10upx;
					height: 330upx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.title{
					margin-top: 15upx;
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
							font-size: 28upx;
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
	}
	
	.pictrue_log_class{
		background: linear-gradient(90deg,#f67a38,#f11b09);
		opacity: 1;
		position: absolute;
		top: 0;
		left: 0;
		color: #fff;
		text-align: center;
	}
	.pictrue_log_big{
		width: 100upx;
		height: 55upx;
		line-height: 55upx;
		border-radius: 10upx 0 20upx 0;
		font-size: 28upx;
	}
	
</style>
