<template>
	<view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop">
				<block v-for="(item,index) in list" :key="index">
					
					<view class="cu-item" :class="index==tabCur?'text-red cur':''" @tap="TabSelect" :data-id="index">
						<view :class="index==tabCur?'text-black text-bold':''">{{item.cateName}}</view>
					</view>
				</block>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<block v-for="(item,index) in list" :key="index">
					<view class="padding-top padding-lr" style="padding: 20upx;box-sizing: border-box;" :id="'main-'+index">
						
						<!--标题栏-->
						<view class="cu-bar bg-white">
							<view class="action">
								<text class="cuIcon-title text-red"/>
								<text>{{item.cateName}}</text>
							</view>
						</view>
						
						<!--图标导航-->
						<view class="zaiui-grid-icon-box">
							<view class="cu-list grid col-3 no-border">
								<block v-for="(items,indexs) in sortList" :key="indexs">
									<view class="cu-item" :class="{'view-mr':(index+1)%2==0}">
										<view class="grid-icon">
											<image class="icon" :src="items.pic" lazy-load />
										</view>
										<text class="text-black">{{items.cateName}}</text>
									</view>
								</block>
							</view>
						</view>
						
					</view>
				</block>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import _sort_data from '@/static/zaiui/data/sort_vue.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	
	import {
		getChildGoodsType
	} from "@/api/api.js"
	
	export default {
		data() {
			return {
				tabCur: 0,
				mainCur: 0, 
				verticalNavTop: 0, 
				load: true, 
				sortList: [],
			}
		},
		props:{
			 list: {
			  type: Array,
			  default: [],
			},
		},
		onLoad() {
			console.log('aaaaaaaaaaa',this.list);	
			
		},
		onReady() {
			console.log("xxxxxxxxxxxxxxxxx")
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			this.getChildGoodsType();
			
			// let list = [{}];
			// for (let i = 0; i < 26; i++) {
			// 	list[i] = {};
			// 	list[i].name = String.fromCharCode(65 + i);
			// 	list[i].id = i;
			// }
			// this.list = list;
			// this.listCur = list[0];
			
			// this.sortList = _sort_data.sortListData();
		},
		methods: {
			getChildGoodsType(){
				getChildGoodsType({
					pid:10
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						this.sortList = data.data
						
						
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
			BackPage() {
				uni.navigateBack();
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			},
			searchTap() {
				uni.navigateTo({
					url: "/pages/home/search"
				});
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	
	@import "../../static/zaiui/style/sort_vue.scss";
	.cu-list{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		.cu-item{
			text-align: center;
			margin-right: 34upx;
		}
		.grid-icon{
			
			width: 138upx;
			height: 138upx;
			border-radius: 100%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		.view-mr{
			margin-right: 0upx !important;
		}
	}
	
</style>
