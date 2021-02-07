<template>
	<view>
		<view class="pictrue-box">
			<view class="homeCon"  :class="{'on':show}">
				<view class="iconfont">
					<image src="/static/img/r-shouye.png" mode=""></image>
				</view>
				<view class="iconfont">
					<image src="/static/img/r-gouwuche.png" mode=""></image>
				</view>
				<view class="iconfont">
					<image src="/static/img/r-wode.png" mode=""></image>
				</view>
				<view class="iconfont">
					<image src="/static/img/r-lianxi.png" mode=""></image>
				</view>
			</view>
			<view class="xiala" @click="homeConShow">
				<image src="/static/img/xiala.gif" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				on:'',
				show:false,
			};
		},
		methods:{
			homeConShow(){
				this.show = !this.show
			}
		}
	}
</script>

<style lang="scss">
	.pictrue-box{
		position: fixed;
		right: 30upx;
		top: 50%;
		.homeCon{
			background-color: #ff1f44;
			overflow: hidden;
			width: 80upx;
			height: 0upx;
			opacity: 0;
			border-radius: 100upx;
			padding-top: 30upx;
			box-sizing: border-box;
			margin-bottom: 20upx;
			transition: all 0.3s ease-in-out 0s;
			.iconfont{
				margin: 0 auto;
				width: 60upx;
				height: 60upx;
				margin-bottom: 30upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.xiala{
			width: 80upx;
			height: 80upx;
			border-radius: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.on{
		opacity: 1 !important;
		height: 390upx !important;
		transition: all 0.3s ease-in-out 0s;
	}
</style>
