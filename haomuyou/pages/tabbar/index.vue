<template>
	<view>
		<view class="search-box">
			<u-search placeholder="搜索商品" v-model="keyword" :show-action="false" class="search"></u-search>
		</view>
		<u-swiper :list="list" height="300"></u-swiper>
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
			<view class="">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
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
		height: 70upx;
		margin: 0 auto;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.promotion-area{
		.seckill{
			
		}
		.assemble{
			
		}
	}
	
	
</style>
