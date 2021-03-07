<template>
	<view>
		<view class="search-box">
			<u-search placeholder="搜索商品" v-model="keyword" :show-action="false" class="search"></u-search>
		</view>
		<view class="tabs-box">
			<u-tabs :list="tabsList" font-size="35"  :is-scroll="false" fonz :current="current" bar-width="110" @change="change" active-color="#E44B1D" inactive-color="#333333"></u-tabs>
		</view>
		<glance-shop-classify :list="list" ></glance-shop-classify>
		
	</view>
</template>

<script>
	import glanceShopClassify from '@/components/glance-ShopClassify/glance-ShopClassify.vue'
	
	import {
		getRootGoodsType
	} from "@/api/api.js"
	
	
	
	export default {
		components:{
			glanceShopClassify
		},
		data() {
			return {
				tabsList: [{
					name: '用途',
					type:1,
				}, {
					name: '材质',
					type:2
				}
				],
				current: 0,
				list: [],
			};
		},
		onLoad() {
			// this.init()
			this.getData();
		},
		methods:{
			init () {
				for (let i = 0; i < 10; i++) {
					let item = {
						id: `c-${ i }`,
						name: `分类-${ i }`,
						children: [],
						selectedIds: {}
					}
					for (let j = 0; j < 10; j++) {
						item.children.push({
							id: `item-${ i }-${ j }`,
							name: `元素${ j }`,
							disabled: ( j > 2 && j < 5),
							checked: false
						})
					}
					this.list.push(item)
				}
			},
			change(index){
				this.current = index;
			},
			getData(){
				getRootGoodsType({
					type:this.tabsList[this.current].type
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						this.list = data.data
						
						
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
	.search-box{
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
	}
	.tabs-box{
		border-bottom: 1upx solid #f5f5f5;
	}
</style>