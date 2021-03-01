<template>
	<view class="page_box">
		<view class="banner">
			<image src="http://demo3.crmeb.net/uploads/attach/2019/11/20191127/0f82ff4c674a9ecb37d64bba95b8ae62.jpg" mode=""></image>
			
		</view>
		<ss-scroll-navbar :navArr="navList" :tabCurrentIndex="currentIndex" @navbarTap="navbarTapHandler"></ss-scroll-navbar>
		<view class="content">
			<view class="text" v-if="navList[currentIndex].state==1">
				活动已结束
			</view>
			<view class="text" v-if="navList[currentIndex].state==3">
				活动即将开始
			</view>
			<view class="countDown" v-if="navList[currentIndex].state==2">
				<text>距离结束仅剩</text>
				<view class="time">
					<view class="styleAll">
						00
					</view>
					<view class="timeTxt">
						:
					</view>
					<view class="styleAll">
						25
					</view>
					<view class="timeTxt">
						:
					</view>
					<view class="styleAll">
						26
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import ssScrollNavbar from '@/components/ss-scroll-navbar/ss-scroll-navbar.vue'
export default {
	components:{
		ssScrollNavbar
	},
	data() {
		return {
			currentIndex: 0,
			navList: [
				{
					title: '05:00',
					state:'1',
					url: '关注'
				}, {
					title: '07:00',
					state:'1',
					url: '推荐'
				}, {
					title: '10:00',
					state:'2',
					url: '视频'
				}, {
					title: '12:00',
					state:'3',
					url: '武汉'
				}, {
					title: '14:00',
					state:'3',
					url: '懂车帝'
				}
			]
		};
	},
	onLoad() {

	},
	methods: {
		navbarTapHandler (index) {
			this.currentIndex = index;
		},
		navbarTapHandler1 (index) {
			this.currentIndex1 = index;
			var obj = this.navList[index];
			console.log('url：' + obj.url);
		}
	}
};
</script>

<style lang="scss">
	image{
		width: 100%;
		height: 100%;
	}
	.banner{
		width: 100%;
		height: 264upx;
	}
	.content{
		.text{
			font-size: 28upx;
			color: #333;
			padding: 20upx;
			box-sizing: border-box;
			text-align: center;
		}
		.countDown{
			
			padding: 20upx;
			box-sizing: border-box;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			.time{
				margin-left: 10upx;
				display: flex;
				align-items: center;
				.styleAll{
					background-color: #ffcfcb;
					color: #fc4141;
					padding: 7upx;
					box-sizing: border-box;
					overflow: hidden;
					font-size: 26upx;
					font-weight: bold;
				}
				.timeTxt{
					margin-left: 10upx;
					margin-right: 10upx;
					color: #fc4141;
					font-size: 26upx;
				}
			}
			
		}
	}
</style>
