<template>
	<view>
		<view class="search-box">
			<u-search placeholder="搜索商品" v-model="keyword" :show-action="false" class="search"></u-search>
		</view>
		<view class="tabs-box">
			<u-tabs :list="tabsList" font-size="35"  :is-scroll="false" fonz :current="current" bar-width="110" @change="change" active-color="#E44B1D" inactive-color="#333333"></u-tabs>
		</view>
		aaa
		<long-categories
		:list="list"></long-categories>
	</view>
</template>

<script>
	import longCategories from '../../components/longCategories/longCategories.vue'
	export default {
		comments:{
			longCategories
		},
		data() {
			return {
				tabsList: [{
					name: '用途'
				}, {
					name: '材质'
				}
				],
				current: 0,
				list: [],
			};
		},
		onLoad() {
			this.init()
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