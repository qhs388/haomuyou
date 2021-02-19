<template>
	<view class="classification">
		<view class="left">
			<scroll-view class="leftScroll" style="height: 100vh;" :scroll-top="scrollTop" scroll-y="true">
				<view :class="{type1:true, current:(index1 === i)}" :style="{lineHeight: type1LineHeight, fontSize: type1Size, height: type1Height, color: selected(i)}" v-for="(item,i) in list" :key="i" @click="changeType1(item,i)">{{item.name}}</view>
			</scroll-view>
		</view>
		<view class="right">
			<scroll-view class="rightScroll" style="height: 100vh;" :scroll-top="scrollTop" scroll-y="true">
				<view class="type2" v-for="(item,i) in data2" :key="i">
					<p :style="{fontSize: type2Size}">{{ item.name }}</p>
					<view class="type3Box">
						<view class="type3" v-for="(item1,i1) in item.child" :key="i1" @click="selectType1(i,i1)">
							<image class="icon" mode="aspectFill" lazy-load="true" :src="item1.icon"></image>
							<text :style="{fontSize: type3Size}">{{item1.name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 0
			},
			list: {
				type: Array,
				default: [
					{
						name: "家装",
						child: [
							{
								name: "卧室",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室1",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室2",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室3",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室4",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室6",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室7",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室8",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							}
						]
					},
					{
						name: "家装1",
						child: [
							{
								name: "卧室",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室1",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室2",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室3",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室4",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室6",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室7",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							},
							{
								name: "卧室8",
								child: [
									{
										name: "台灯",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									},
									{
										name: "台灯1",
										icon: {
											type: String,
											default: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
										}
									}
								]
							}
						]
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					},
					{
						name: "家装2",
						child: []
					}
				]
			},
			selectedColor: {
				type: String,
				default: "#ff852a"
			},
			type1Size: {
				type: String,
				default: "14px"
			},
			type2Size: {
				type: String,
				default: "14px"
			},
			type3Size: {
				type: String,
				default: "10px"
			},
			type1Height: {
				type: String,
				default: "90rpx"
			},
			type1LineHeight: {
				type: String,
				default: "90rpx"
			}
		},
		data() {
			return {
				scrollTop: 0,
				data1: [], // 用来存储传来的数据
				index1: 0, // 标识当前选中的type1
				data2: [], // 用来存储当前选中的type2数据
				color: "", // 用来存储选中type1的颜色
				load: 0 // 用来判断是否是第一次加载数据
			}
		},
		mounted() {
			
		},
		beforeUpdate() {
			if(this.load == 0){
				// 判断是不是首次加载
				// 如果是将传入的值初始化到本地
				this.index1 = this.index
				this.data1 = this.list
				this.color = this.selectedColor
				console.log("这个时候的数据",this.list)
				this.changeType1(this.data1[this.index1],this.index1)
				this.load++
			}
			// 如果不是则不执行操作				
		},
		methods: {
			changeType1(item,index) {
				console.log("现在的index",index)
				this.index1 = index
				if (item === undefined ||item === null || item.child === undefined || item.child === null){
					console.log("该内容为空！")
					this.data2 = []
				} else
					this.data2 = item.child				
			},
			selectType1(i, i1) {
				this.$emit("selectType", this.index1, i, i1)
			},
			// 更换颜色
			selected: function(val){
				return (val === this.index1?this.selectedColor+" !important":"")
			}
		}
	}
</script>

<style lang="less" scoped>
	.classification {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		
		/* 隐藏滚动条 */
		::-webkit-scrollbar {  
			display: none;  
			width: 0 !important;  
			height: 0 !important;  
			-webkit-appearance: none;  
			background: transparent;  
		}
		.left {
			width: 160rpx;
			background-color: #fff;
			.type1 {
				width: 158rpx;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 14px;
			}
			.current {
				color: #ff852a;
				background-color: #F8F8F8;
			}
		}
		.right {
			float: right;
			width: 520rpx;
			margin-right: 30rpx;
			
			.type2 {
				p {
					margin: 46rpx 0 26rpx 0;
					font-size: 14px;
				}
				.type3Box {
					width: 100%;
					height: auto;
					border-radius: 28rpx;
					background-color: #fff;
					display: flex;
					flex-wrap: wrap;
					padding-top: 36rpx;
					margin-bottom: 36rpx;
					.type3 {
						margin: 0 36rpx 36rpx 36rpx;
						.icon {
							width: 100rpx;
							height: 100rpx;
							display: block;
						}
						text {
							padding: 18rpx 0;
							display: block;
							width: 100rpx;
							font-size: 10px;
							overflow: hidden;
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>
