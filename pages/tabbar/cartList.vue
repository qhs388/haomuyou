<template>
	<view style="padding-bottom: 115upx;box-sizing: border-box;">
		<view class="labelNav">
					<view class="itme">
						<u-icon name="checkmark-circle" color="#c3c3c3"></u-icon>
						<view style="margin-left: 10upx;">
							100%正品保证
						</view>
					</view>
					<view class="itme">
						<u-icon name="checkmark-circle" color="#c3c3c3"></u-icon>
						<view style="margin-left: 10upx;">
							所有商品精挑细选
						</view>
					</view>
					<view class="itme">
						<u-icon name="checkmark-circle" color="#c3c3c3"></u-icon>
						<view style="margin-left: 10upx;">
							售后无忧	
						</view>
					</view>
				</view>
				<view class="nav">
					<view class="text">
						<view style="margin-right: 10upx;">
							购物数量
						</view>
						<text style="color:#E34819;">0</text>
					</view>
					<view class="administrate" @click="strate">
						{{administrate==false?'管理':'取消'}}
					</view>
				</view>
				
		<view class="">
			<view class="cartlist">
				<view class="cartitem" v-for="(item,index) of cartlist" :key="index" @touchstart="drawStart" 
	    @touchmove="drawMove" 
	    @touchend="drawEnd" 
		:data-index="index"
		:style="'right:'+item.right+'px'">
						<view class="">
							<u-checkbox-group  @change="selected(item)">
									<u-checkbox 
										shape="circle"
										active-color="#e93323"
										
										v-model="item.flag"
									></u-checkbox>
								</u-checkbox-group>
						</view>
						<view class="shop-img">
							<image src="../../static/img/seckill-bg.png" mode=""></image>
						</view>
						<view class="itemright">
							<view class="shopCarName">
								Y6345 不求人 痒痒挠（花梨木）
							</view>
							<view class="infor">
								属性：默认
							</view>
							<view class="right-bottom">
								<view class="shopCarPrice">
									￥{{item.price}}
									<!-- <text class="del" @click="del(item,index)">删除</text> -->
								</view>
								<view class="bgImg">
									<view class="reduce" @click="reduce(item)">
										-
									</view>
									<view class="number">
										{{item.num}}
									</view>
									<view class="add"  @click="add(item)">
										+
									</view>
								</view>
							</view>
						</view>
						
					
					<!-- <view class="remove" @click="del(item)">删除</view> -->
				</view>
				
				<view class="noCart">
					<image src="/static/img/noCart.png" mode=""></image>
				</view>
			</view>
			
			<recommend></recommend>
			
			<view class="footerCar">
				<u-checkbox-group  @change="selectedall()">
						<u-checkbox 
							shape="circle"
							active-color="#e93323"
							v-model="allchecked"
						>全选</u-checkbox>
					</u-checkbox-group>
			
				<view class="footerCarRight">
					<text class="combined" style="color: #E34819 ;"  v-if="administrate==false">￥<text>{{totalPrice}}</text></text>
					<u-button shape="circle" :customStyle="customStyle" v-if="administrate==false">立即下单</u-button>
					<u-button shape="circle" :customStyle="customStyle2" v-else>删除</u-button>
				</view>
			</view>
		</view>
		
		<pictrue></pictrue>
	</view>
</template>

<script>
	import pictrue from '@/components/pictrue/pictrue.vue'
	import recommend from '@/components/recommend/recommend.vue'
	export default {
		components:{
			pictrue,
			recommend
		},
		data() {
			return {
				customStyle2:{
					width:'120px',
					marginLeft:'20px',
					backgroundColor:'#fff',
					color:'#999'
				},
				customStyle:{
					width:'120px',
					marginLeft:'20px',
					backgroundColor:'#ff1f44',
					color:'#fff'
				},
				flag: true, // 用于判断用户购物车是否有商品，没有商品为true，有商品为false
				cartlist: [{
					flag:false,
					proname:'华为',
					price: 5999,
					num:1,
					right:0
					
				},{
					flag:false,
					proname:'华为',
					price: 5999,
					num:1,
					right:0
					
				}], // 购物车商品信息
				administrate :false,
				allchecked: false ,//默认全选为true，因为后台数据没有是否选中的信息
				//左滑默认宽度
				delBtnWidth: 80,
			}
		},
		computed: {
			// 计算选中商品数量
			totalNum() {
				let totalNum = 0;
				this.cartlist.map(item => {
					item.flag ? totalNum += item.num : totalNum += 0
				})
				return totalNum
			},
			//计算选中商品的总价
			totalPrice() {
				let totalPrice = 0;
				this.cartlist.map(item => {
					item.flag ? totalPrice += item.num * item.price : totalPrice += 0
				})
				return totalPrice
			}
		},
		methods: {
			strate(){
				this.administrate = !this.administrate	
			},
			// 减号操作
			reduce(item) {
				let num = item.num
				// 需要判断是否会减到0，我在这里是最小为1.
				if (num > 1) {
					num -= 1
				} else {
					num = 1
					return
				}
				item.num = num
			},
			// 加号操作
			add(item) {
				let num = item.num
				num += 1
				item.num = num
				// console.log(item)
			},
			// 删除单挑购物车商品
			del(item, index) {
				// console.log(item)
				this.cartlist.splice(index,1)
			},
			// 单个商品前的勾选
			selected(item) {
				// console.log(item)
				// item.flag = !item.flag
				if (!item.flag) {
					this.allchecked = false
				} else {
					const test = this.cartlist.every(item => {
						return item.flag === true
					})
					if (test) {
						this.allchecked = true
					} else {
						this.allchecked = false
					}
				}
			},
			// 全选按钮
			selectedall() {	
				if (this.allchecked) {
					this.cartlist.map(item => {
						item.flag = true
					})
				} else {
					this.cartlist.map(item => {
						item.flag = false
					})
				}
			},
			//开始触摸滑动
			drawStart(e) {
				// console.log("开始触发");
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				// console.log("滑动");
				for (var index in this.cartlist) {
					this.$set(this.cartlist[index],'right',0);
				}
				var touch = e.touches[0];
				// console.log(touch)
				// console.log(e.currentTarget.dataset)
				var item = this.cartlist[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				// console.log(this.delBtnWidth)
				if (disX >= 20) {
				        if (disX > this.delBtnWidth) {
					    disX = this.delBtnWidth;
				        }
				        this.$set(item,'right',disX);
				} else {
					this.$set(item,'right',0);
				}
			},
			//触摸滑动结束
			drawEnd(e) {
				// console.log("滑动结束");
				var item = this.cartlist[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(item,'right',this.delBtnWidth);
				} else {
					this.$set(item,'right',0);
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: rgb(245, 245, 245);
	}
	.labelNav{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx;
			box-sizing: border-box;
			background-color: #f5f5f5;
			.itme{
				display: flex;
				align-items: center;
				font-size: 24upx;
				color: #c3c3c3;
			}
		}
		.nav{
			background-color: #FFFFFF;
			width: 100&;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx;
			box-sizing: border-box;
			.text{
				display: flex;
				align-items: center;
				font-size: 28upx;
				color: #333333;
			}
			.administrate{
				width: 110upx;
				height: 50upx;
				border-radius: 10upx;
				text-align: center;
				line-height: 50upx;
				color: #333333;
				border: 1upx solid #333;
			}
		}
	.cartlist {
		.noCart{
			width: 414upx;
			height: 336upx;
			margin: 0 auto;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.cartitem {
			width: 100%;
			background-color: #FFFFFF;
			margin-bottom: 10px;
			padding: 20upx;
			box-sizing: border-box;
			position: relative;
			display: flex;
			align-items: center;
			.remove {
				margin-left:-5%;
				width: 160rpx;
				height: 100%;
				background-color: #EE3105;
				color: #FFFFFF;
				position: absolute;
				top: 0;
				right: -190rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
			}
			.xuanzhong {
				float: left;
				line-height: 200rpx;
				margin-right: 20rpx;
			}
			.shop-img{
				border-radius: 20rpx;
				width: 160upx;
				height: 160upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			
			
			.itemright {
				display: inline-block;
				margin-left: 20upx;
				width: 425upx;
				.shopCarName {
					font-size: 26rpx;
					color: #333;
				}
				.infor{
					font-size: 24upx;
					color: #868686;
					margin-top: 25upx;
				}
				.right-bottom{
					margin-top: 25upx;
					display: flex;
					overflow: hidden;
					align-items: center;
					justify-content: space-between;
					.shopCarPrice {
						font-size: 32rpx;
						color: #282828;
					
					}
					.bgImg {
						border: 1upx solid #a4a4a4;
						display: flex;
						align-items: center;
						.reduce{
							text-align: center;
							width: 60upx;
							height: 40upx;
							line-height: 40upx;
							border-right:1upx solid #a4a4a4 ;
						}
						.number{
							width: 60upx;
							text-align: center;
						}
						.add{
							width: 60upx;
							height: 40upx;
							line-height: 40upx;
							text-align: center;
							border-left:1upx solid #a4a4a4 ;
						}
						
					}
				}
				
			}
			
		}

	}
	.footerCar {
		position: fixed;
		bottom: 0;
		height: 98rpx;
		background-color: #FFFFFF;
		border-top: 1rpx solid #f8f8f8;
		width: 100%;
		line-height: 98rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0upx 30upx;
		box-sizing: border-box;
		
		.footerCarRight{
			display: flex;
			align-items: center;
		}
	}
</style>