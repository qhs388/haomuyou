<template>
	<scroll-view class="ss-scroll-navbar" scroll-x :scroll-left="scrollLeft" scroll-with-animation="true">
		<view
		v-for="(item, index) in navArr" 
		:key="item.url" 
		class="nav-item"
		:class="{current: index === tabCurrentIndex}"
		@click="tabChange(index)"
		:id="'item-' + index"
		>
			<view class="content">
				<text class="title">{{item.title}}</text>
				<view class="state">
					{{isState(item.state)}}
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: 'ss-scroll-navbar',
		props: {
			navArr: {
				type: Array,
				default () {
					return [
					]
				}
			},
			tabCurrentIndex: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				scrollLeft: 0,
				widthList: [],
				screenWidth: 0
			}
		},
		methods: {
			
			isState(state){
				switch(state){
					case '1':
						return '已结束'
					break;
					case '2':
						return '抢购中'
					break;
					case '3':
						return '即将开始'
					break;
				}
			},
			
			/**
			 * 导航栏navbar
			 * 点击事件
			 */
			tabChange (index) {
				this.$emit('navbarTap', index);
				var widthArr = this.widthList;
				var scrollWidth = 0;
				for (var i = 0; i < index + 1; i++) {
					scrollWidth += widthArr[i];
				}
				let currentWidth = widthArr[index];
				// scrollView 居中算法
				// 减去固定宽度位移
				// 减去选中的bar的宽度的一半
				scrollWidth -=  this.screenWidth / 2;
				scrollWidth -= currentWidth / 2;
				this.scrollLeft = scrollWidth;
			},
			calculateItemWidth () {
				var that = this;
				var arr = [];
				let w = 0;
				this.navArr.forEach((item, index) =>{
					let view = uni.createSelectorQuery().in(this).select("#item-" + index);
					view.fields({
						size: true
					}, data => {
						arr.push(data.width);
					}).exec();
				})
				this.widthList = arr;
			},
			calculateWindowWidth () {
				var info = uni.getSystemInfoSync();
				this.screenWidth = info.screenWidth;
			}
		},
		created () {
			var that = this;
			this.calculateWindowWidth();
			setTimeout(function() {
				that.calculateItemWidth();
			}, 1000);
		}
	}
</script>

<style lang="scss">
	.ss-scroll-navbar {
		width: 100%;
		height: 118upx;
		
		background-color: #fff;
		white-space:nowrap;
		
		.nav-item {
			height: 90upx;
			text-align: center;
			width: 222upx;
			display: inline-block;
			position: relative;
			font-size: 30upx;
			
			.content{
				color: #282828;
				background-color: #efc58f;
				padding-top: 5upx;
				padding-bottom: 5upx;
				box-sizing: border-box;
				.title {
					font-size: 30upx;
					font-weight: bold;
					text-align: center;
				}
				.state{
					font-size: 24upx;
					line-height: 51upx;
					text-align: center;
				}
			}
			
			&:after{
				
			}
		}
		
		.current{
			.content{
				width: 100%;
				height: upx;
				color: #fff !important;
				background-color: #ff1f44 !important;
				padding-top: 5upx;
				padding-bottom: 5upx;
				box-sizing: border-box;
				.title {
					text-align: center;
				}
				.state{
					text-align: center;
				}
			}
			&:after{
				content: '';
				width: 0;
				height: 0;
				border-top:15upx solid #ff1f44;
				border-left:15upx solid transparent;
				border-right:15upx solid transparent;
				position: absolute;
				left: 50%;
				bottom: -20upx;
				transform: translateX(-50%);
			}
		}
	}
</style>
