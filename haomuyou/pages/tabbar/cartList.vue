<template>
	<view>
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
		<pictrue></pictrue>
	</view>
</template>

<script>
	import pictrue from '@/components/pictrue/pictrue.vue'
	export default {
		components:{
			pictrue
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
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
</style>
