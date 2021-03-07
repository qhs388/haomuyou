<template>
	<view>
		<view  style="padding-bottom: 100upx;box-sizing: border-box;">
			<u-swiper :list="goodsDetailInfor.goodsBean.sliderImages" height="600" indicator-pos="bottomRight" mode="number"></u-swiper>
			<view class="wrapper">
				<view class="share">
					<view class="money">
						<text style="font-size: 30upx;">￥</text>
						<text>{{goodsDetailInfor.goodsBean.webPrice}}</text>
					</view>
					<view class="vip-money">
						￥{{goodsDetailInfor.goodsBean.webOldPrice}}
					</view>
					<view class="vip-icon">
						<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAVCAYAAAA5BNxZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNmVhODdiZC0zYWY5LTEzNDYtYjYyYy1hZGE1MDVmMDUxMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MURGMzA2REQyMDNEMTFFOTkxOUVDOTNCMjU4MDcwQjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MURGMzA2REMyMDNEMTFFOTkxOUVDOTNCMjU4MDcwQjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk2ZWFjMGYtNDI3MC0yZDRlLThiYTItYjE4OTA2YzRiOWVlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDg3NDQyZTItM2M1ZC1iNDRkLTljYmUt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" mode=""></image>
					</view>
				</view>
				<view class="introduce">
					{{goodsDetailInfor.goodsBean.goodsName}}
				</view>
				<view class="label">
					<view>
						原价：￥{{goodsDetailInfor.goodsBean.webPrice}}
					</view>
					<view>
						库存：{{goodsDetailInfor.goodsBean.stock}}件
					</view>
					<view>
						销量：{{goodsDetailInfor.goodsBean.sales}}件
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="attribute" @click="skuShow()">
				<view class="attribute-left">
					请选择：{{ selectArr.length > 0 ? selectArr.join(' ') : '请选择规格' }}
				</view>
				<u-icon name="arrow-right" color="#82848f"></u-icon>
			</view>
			<view class="line"></view>
			<view class="UserEvaluation">
				<view class="UserEvaluation-left">
					用户评价(0)
				</view>
				<view class="UserEvaluation-right">
					<view >
						<text style="color: #E34819 ;">0.00%</text>
					</view>
					<view style="margin-left: 10upx;">
						<text>好评率</text>
					</view>
					<u-icon name="arrow-right" color="#82848f"></u-icon>
				</view>
			</view>
			<view class="line"></view>
			<view class="shop-detail">
				<view class="title">
					产品介绍
				</view>
				<view class="u-content">
					<u-parse :html="goodsDetailInfor.goodsBean.content"></u-parse>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="item">
				<view class="icon">
					<u-icon name="home" color="#666" size="44"></u-icon>
				</view>
				<view class="text">
					首页
				</view>
			</view>
			<view class="item">
				<view class="icon">
					<u-icon name="kefu-ermai" color="#666" size="44"></u-icon>
				</view>
				<view class="text">
					客服
				</view>
			</view>
			<view class="item">
				<view class="icon">
					<u-icon name="heart" color="#666" size="44"></u-icon>
				</view>
				<view class="text">
					收藏
				</view>
			</view>
			<view class="item">
				<view class="icon">
					<u-badge  bgColor="#ff1f44" size="10" :offset="[-5,-10]"  count="10"></u-badge>
					<u-icon name="shopping-cart" color="#666" size="44"></u-icon>
				</view>
				<view class="text">
					购物车
				</view>
			</view>
			
			<view class="bnt">
				<view class="joinCart" @click="Cart()">
					加入购物车
				</view>
				<view class="buy" @click="buy()">
					立即购买
				</view>
			</view>
			
		</view>
		
		<!-- sku弹出层 -->
		<view class="popup" catchtouchmove="true" :class="specClass" @touchmove.stop.prevent="moveHandle">
			<view class="mask" @click="closeSf"></view>
			<view class="layer attr-content">
				<view class="specification-wrapper">
					<scroll-view class="specification-wrapper-content" scroll-y="true">
						<view class="specification-header">
							<view class="specification-left"><image class="product-img"></image></view>
							<view class="specification-right">
								<view class="price-content">
									<text class="sign">¥</text>
									<text class="price">{{ selectshop.price || 0 }}</text>
								</view>
								<view class="inventory">库存:{{ selectshop.stock || 0 }}</view>
								<view class="choose">已选:{{ selectArr.join(' ') }}</view>
							</view>
						</view>
						<view class="specification-content">
							<view class="specification-item" v-for="(item, index1) in specifications" :key="index1">
								<view class="item-title">{{ item.name }}</view>
								<view class="item-wrapper">
									<view
										class="item-content"
										@tap="skuClick(item_value, index1, $event, index2)"
										v-for="(item_value, index2) in item.item"
										:key="index2"
										:class="[item_value.ishow ? '' : 'noactived', subIndex[index1] == index2 ? 'actived' : '']"
									>
										{{ item_value.name }}
									</view>
								</view>
							</view>
							<view class="specification-item">
								<view class="item-title">数量</view>
								<view class="item-wrapper">
									<stepper size="small" :min="1" :max="selectshop.stock" :defaultValue="selectNum" :display="canCount" @change="changeNum"></stepper>
								</view>
							</view>
						</view>
					</scroll-view>
					<view class="close" @tap="closeSf"><image class="close-item" src="../../static/close.png"></image></view>
				</view>
				<view class="skuBnt" v-if="skuShowis==1">
					<view class="joinCart" @click="Cart()">
						加入购物车
					</view>
					<view class="buy" @click="buy()">
						立即购买
					</view>
				</view>
				<view class="btn-wrapper" v-if="skuShowis==0"><button class="sure" @click="send()">确定</button></view>
			</view>
		</view>
		<pictrue></pictrue>
	</view>
</template>

<script>
	import stepper from '@/components/stepper/stepper.vue';
	import pictrue from '@/components/pictrue/pictrue.vue'
	import products from '@/json/product.json';
	import skuList from '@/json/skuList.json';
	import specList from '@/json/specList.json';
	
	
	import {
		goodsDetail
	} from "@/api/api.js"
	
	export default {
		components:{
			stepper,
			pictrue
		},
		data() {
			return {
				id:'',
				goodsDetailInfor:null,
				skuShowis:0,
				product: products.product,
				showSet: false,
				specClass: 'none',
				specifications: specList.specifications, //spu规格列表
				difference: skuList.difference, //sku列表
				shopItemInfo: {}, //存放要和选中的值进行匹配的数据
				selectArr: [], //存放被选中的值
				subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
				selectshop: {}, //存放最后选中的商品
				selectNum: 1, //选中数量
			}
		},
		computed: {
			canCount() {
				return this.subIndex.some(item => item === -1);
			}
		},
		onLoad(data) {
			this.id  = data.id
			this.goodsDetail()
			
			this.specifications.map(item => {
				this.selectArr.push('');
				this.subIndex.push(-1);
			});
			this.checkItem(); //计算sku里面规格形成路径
			this.checkInpath(-1); //传-1是为了不跳过循环
		},
		methods: {
			goodsDetail(){
				goodsDetail({
					id:this.id
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						this.goodsDetailInfor = data.data
						
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
			skuShow(){
				this.skuShowis = 1;
				this.specClass = 'show';
			},
			Cart(){
				this.skuShowis = 0;
				this.specClass = 'show';
				
			},
			send(){
				this.closeSf();
				console.log("dadada",this.selectshop)
				uni.navigateTo({
					url:`/index/orderSubmit/orderSubmit`
				})
				
			},
			buy(){
				this.skuShowis = 0;
				this.specClass = 'show';
			},
			closeSf() {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			},
			skuClick(value, index1, event, index2) {
				
				
				if (value.ishow) {
					if (this.selectArr[index1] != value.name) {
						this.$set(this.selectArr, index1, value.name);
						this.$set(this.subIndex, index1, index2);
					} else {
						this.$set(this.selectArr, index1, '');
						this.$set(this.subIndex, index1, -1);
					}
					this.checkInpath(index1);
					//如果全部选完
					if (this.selectArr.every(item => item != '')) {
						this.selectshop = this.shopItemInfo[this.selectArr];
						this.selectNum = 1;
					}
				}
			},
			checkInpath(clickIndex) {
				// console.time('筛选可选路径需要的时间是');
				//循环所有属性判断哪些属性可选
				//当前选中的兄弟节点和已选中属性不需要循环
			
				for (let i = 0, len = this.specifications.length; i < len; i++) {
					if (i == clickIndex) {
						continue;
					}
					let len2 = this.specifications[i].item.length;
					for (let j = 0; j < len2; j++) {
						if (this.subIndex[i] != -1 && j == this.subIndex[i]) {
							continue;
						}
						let choosed_copy = [...this.selectArr];
						this.$set(choosed_copy, i, this.specifications[i].item[j].name);
						let choosed_copy2 = choosed_copy.filter(item => item !== '' && typeof item !== 'undefined');
						if (this.shopItemInfo.hasOwnProperty(choosed_copy2)) {
							this.$set(this.specifications[i].item[j], 'ishow', true);
						} else {
							this.$set(this.specifications[i].item[j], 'ishow', false);
						}
					}
				}
				// console.log(this.specifications)
				// console.timeEnd('筛选可选路径需要的时间是');
			},
			checkItem() {
				// console.time('计算有多小种可选路径需要的时间是');
				//计算有多小种可选路径
				let result = this.difference.reduce(
					(arrs, items) => {
						return arrs.concat(
							items.difference.reduce(
								(arr, item) => {
									return arr.concat(
										arr.map(item2 => {
											//利用对象属性的唯一性实现二维数组去重
											if (!this.shopItemInfo.hasOwnProperty([...item2, item])) {
												this.shopItemInfo[[...item2, item]] = items;
											}
											return [...item2, item];
										})
									);
								},
								[[]]
							)
						);
					},
					[[]]
				);
				// console.timeEnd('计算有多小种可选路径需要的时间是');
			},
			changeNum(val) {
				this.selectNum = parseInt(val);
			}
		}
	}
</script>

<style lang="scss">
	.skuBnt{
		overflow: hidden;
		display: flex;
		align-items: center;
		border-radius: 50upx;
		overflow: hidden;
		margin: 0 auto;
		margin-bottom: 20upx;
		.joinCart{
			width: 350upx;
			height: 82upx;
			background-color: #E34819;
			font-size: 24upx;
			color: #FFFFFF;
			text-align: center;
			line-height: 82upx;
		}
		.buy{
			width: 350upx;
			height: 82upx;
			background-color: #2C2C2C;
			font-size: 24upx;
			color: #FFFFFF;
			text-align: center;
			line-height: 82upx;
		}
	}
	.wrapper{
		padding: 30upx;
		box-sizing: border-box;
		.share{
			display: flex;
			align-items: center;
			.money{
				font-size:45upx;
				color: #E34819;
				font-weight: 700;
				margin-right: 20upx;
			}
			.vip-money{
				font-size:28upx;
				color: #282828;
				font-weight: 700;
			}
			.vip-icon{
				margin-left: 10upx;
				width: 50upx;
				height: 22upx;
				image{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		.introduce{
			font-size: 34upx;
			margin-top: 20upx;
			font-weight: 700;
		}
		.label{
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24upx;
			color: #82848f;
			margin-top: 20upx;
		}
	}
	.line{
		width: 100%;
		height: 20upx;
		background-color: #f5f5f5;
	}
	.attribute{
		height: 88upx;
		background-color: #FFFFFF;
		padding: 30upx;
		box-sizing: border-box;
		font-size: 24upx;
		color: #82848f;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.attribute-left{
			display: flex;
			align-items: center;
			
		}
	}
	.UserEvaluation{
		height: 88upx;
		background-color: #FFFFFF;
		padding: 30upx;
		box-sizing: border-box;
		font-size: 24upx;
		color: #82848f;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.UserEvaluation-left{
			font-size: 28upx;
			color: #282828;
			
		}
		.UserEvaluation-right{
			display: flex;
			align-items: center;
			color: grey;
		}
	}
	.shop-detail{
		padding: 30upx 0upx;
		.title{
			font-size: 30upx;
			color: #282828;
			text-align: center;
		}
		.u-content {
			margin-top: 30upx;
		}
	}
	.footer{
		padding: 10upx 30upx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0upx;
		z-index: 1;
		width: 100%;
		box-shadow: 0upx 0upx 10upx #e3e3e3;
		.item{
			 margin-right: 38upx;
			 position: relative;
			.icon{
				width: 44upx;
				height: 44upx;
				margin: 0 auto;
				display: flex;
				justify-content: center;
			}
			.text{
				font-size: 24upx;
				text-align: center;
				color: #666;
			}
		}
		.bnt{
			overflow: hidden;
			display: flex;
			align-items: center;
			border-radius: 50upx;
			overflow: hidden;
			.joinCart{
				width: 160upx;
				height: 82upx;
				background-color: #E34819;
				font-size: 24upx;
				color: #FFFFFF;
				text-align: center;
				line-height: 82upx;
			}
			.buy{
				width: 160upx;
				height: 82upx;
				background-color: #2C2C2C;
				font-size: 24upx;
				color: #FFFFFF;
				text-align: center;
				line-height: 82upx;
			}
		}
	}
	
	
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		overflow: hidden;
	
		&.show {
			display: block;
	
			.mask {
				animation: showPopup 0.2s linear both;
			}
	
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
	
		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}
	
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
	
		&.none {
			display: none;
		}
	
		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.3);
		}
	
		.layer {
			display: flex;
			width: 100%;
			// height: 1014rpx;
			flex-direction: column;
			// min-height: 40vh;
			// max-height: 1014rpx;
			position: fixed;
			z-index: 99;
			bottom: 0;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
	
			.specification-wrapper {
				width: 100%;
				padding: 30rpx 25rpx;
				box-sizing: border-box;
				.specification-wrapper-content {
					width: 100%;
					max-height: 900rpx;
					min-height: 600rpx;
					&::-webkit-scrollbar {
						/*隐藏滚轮*/
						display: none;
					}
	
					.specification-header {
						width: 100%;
						display: flex;
						flex-direction: row;
						position: relative;
						margin-bottom: 40rpx;
	
						.specification-left {
							width: 180rpx;
							height: 180rpx;
							flex: 0 0 180rpx;
	
							.product-img {
								width: 180rpx;
								height: 180rpx;
								background-color: #999999;
							}
						}
	
						.specification-right {
							flex: 1;
							padding: 0 35rpx 0 28rpx;
							box-sizing: border-box;
							display: flex;
							flex-direction: column;
							justify-content: flex-end;
							font-weight: 500;
	
							.price-content {
								color: #fe3a3a;
								margin-bottom: 20rpx;
	
								.sign {
									font-size: 28rpx;
								}
	
								.price {
									font-size: 48rpx;
								}
							}
	
							.inventory {
								font-size: 24rpx;
								color: #999999;
								margin-bottom: 14rpx;
							}
	
							.choose {
								font-size: 28rpx;
								color: #333333;
							}
						}
					}
	
					.specification-content {
						font-weight: 500;
	
						.specification-item {
							margin-bottom: 40rpx;
	
							&:last-child {
								margin-bottom: 0;
							}
	
							.item-title {
								margin-bottom: 20rpx;
								font-size: 28rpx;
								color: #999999;
							}
	
							.item-wrapper {
								display: flex;
								flex-direction: row;
								flex-flow: wrap;
	
								.item-content {
									display: inline-block;
									padding: 15rpx 35rpx;
									border-radius: 10rpx;
									background-color: #ffffff;
									color: #333333;
									font-size: 28rpx;
									margin-right: 20rpx;
									border: 2rpx solid #f4f4f4;
									box-sizing: border-box;
	
									&.actived {
										border-color: #fe3a3a;
										color: #fe3a3a;
									}
	
									&.noactived {
										background-color: #f4f4f4;
										border-color: #f4f4f4;
									}
								}
							}
						}
					}
				}
				.close {
					position: absolute;
					top: 30rpx;
					right: 25rpx;
					width: 50rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					.close-item {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
	
			.btn-wrapper {
				display: flex;
				width: 100%;
				height: 120rpx;
				flex: 0 0 120rpx;
				align-items: center;
				justify-content: space-between;
				padding: 0 26rpx;
				box-sizing: border-box;
	
				.layer-btn {
					width: 335rpx;
					height: 76rpx;
					border-radius: 38rpx;
					color: #fff;
					line-height: 76rpx;
					text-align: center;
					font-weight: 500;
					font-size: 28rpx;
	
					&.add-cart {
						background: #ffbe46;
					}
	
					&.buy {
						background: #fe3a3a;
					}
				}
				.sure {
					width: 698rpx;
					height: 76rpx;
					border-radius: 38rpx;
					color: #fff;
					line-height: 76rpx;
					text-align: center;
					font-weight: 500;
					font-size: 28rpx;
					background: #fe3a3a;
				}
			}
		}
	
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
	
			100% {
				opacity: 1;
			}
		}
	
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
	
			100% {
				opacity: 0;
			}
		}
	
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
	
			100% {
				transform: translateY(0%);
			}
		}
	
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
	
			100% {
				transform: translateY(120%);
			}
		}
	}
</style>
