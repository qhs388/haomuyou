<template>
	<view>
		<view  style="padding-bottom: 100upx;box-sizing: border-box;">
			<u-swiper :list="list" height="600" indicator-pos="bottomRight" mode="number"></u-swiper>
			<view class="wrapper">
				<view class="share">
					<view class="money">
						<text style="font-size: 30upx;">￥</text>
						<text>3666.00</text>
					</view>
					<view class="vip-money">
						￥3666.00
					</view>
					<view class="vip-icon">
						<image src="/static/img/sqcwvip.png" mode=""></image>
					</view>
				</view>
				<view class="introduce">
					A1113 十二生肖（巴西花梨）
				</view>
				<view class="label">
					<view>
						原价：￥4032.60
					</view>
					<view>
						库存：99件
					</view>
					<view>
						销量：2件
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="attribute">
				<view class="attribute-left">
					请选择：
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
					<u-parse :html="content"></u-parse>
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
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`,
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
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
			 margin-right: 40upx;
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
	}
</style>
