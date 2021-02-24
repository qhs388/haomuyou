<template>
	<view>
		<view class="list">
			<view class="item">
				<view class="text">
					姓名
				</view>
				<input type="text" placeholder="请输入姓名"/>
			</view>
			<view class="item">
				<view class="text">
					联系方式
				</view>
				<input type="number" maxlength="11" placeholder="请输入联系方式"/>
			</view>
			<view class="item" >
				<view class="text">
					地址
				</view>
				<input type="text" placeholder="请输入地址"/>
			</view>

			<view style="margin-top: 150upx;margin-bottom: 30upx;padding: 0upx 20upx;box-sizing: border-box;">
				<u-button :custom-style="customStyle"  shape="circle" @click="send"   >
					支付费用成为VIP
				</u-button>
			</view>
			<view style="margin-top: 30upx;margin-bottom: 30upx;padding: 0upx 20upx;box-sizing: border-box;">
				<u-button :custom-style="customStyle2"  shape="circle" @click="send"   >
					购买商品成为VIP
				</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					width: '200upx', 
					height:'90upx',
					background:' #ff1f44',
					color: '#fff',
					fontSize:'32upx'
				},
				customStyle2: {
					width: '200upx', 
					height:'90upx',
					marginTop:'30upx',
					background:' #000000',
					color: '#fff',
					fontSize:'32upx'
				},
			};
		}
	}
</script>

<style lang="scss">
	.list{
		.item{
			padding: 20upx;
			box-sizing: border-box;
			border-bottom: 1upx solid #DADADA;
			font-size: 30upx;
			display: flex;
			align-items: center;
			.text{
				width: 214upx;
			}
		}
		.item2{
			padding: 20upx;
			box-sizing: border-box;
			border-bottom: 1upx solid #DADADA;
			font-size: 30upx;;
			.text{
				width: 214upx;
			}
			.content{
				width: 100%;
				.uploadImg{
					width: 100%;
					height: 400upx;
					border: 2upx dashed #bbbbbb;
					overflow: hidden;
					margin-top: 20upx;
					image{
						width: 100%;
						height: 100%;
						
					}
				}
			}
		}
	}
</style>
