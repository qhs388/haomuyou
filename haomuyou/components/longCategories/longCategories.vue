<template>
	<view>
		<view class="long-categories">
			<view class="left">
				<scroll-view 
					:scroll-with-animation="true"
					scroll-y 
					:style="{'height':height+'px'}"
				>
					
					<view 
						class="left-item" 
						v-for="(item,index) in list" 
						:key="index"
						:class="{'left-item-active': index == active }"
						@click="categoryClick(item, index)"
					>
						{{ item.name }}
					<!-- 	<view class="num" v-if="Object.keys(item.selectedIds).length > 0">{{ Object.keys(item.selectedIds).length }}</view> -->
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y
					@scroll="scroll" 
					:style="{'height':height+'px'}"
					scroll-with-animation
					:scroll-into-view="cIndex"
					@scrolltolower="scrollToBottom"
				>
					<view class="right-container" v-for="(item,index) in list" :key="index">
						<view class="category-name" :id="`cid${ item.id }`">
							<view class="line"></view>
							<view class="txt">
								{{ item.name }}
							</view>
							<view class="line"></view>
						</view>
						<view class="category-content">
							<view class="content-box" 
							v-for="(child, index1) in item.children" 
								:key="index1" >
								<view class="img">
									<image src="" mode=""></image>
								</view>
								<view class="name">
									{{ child['name'] }}
								</view>
							</view>
							
							
						</view>
						
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
				active: 0,
				cIndex: '',
				topList: [],
				flag: false
			}
		},
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			maxSelected: {
				type: [String, Number],
				default: '-1'
			}
		},
		methods: {
			scroll(e) {
				if(this.flag){
					this.flag = false
					return
				}
				let scrollTop = e.target.scrollTop
				for(let i = 0;i < this.topList.length; i++){
					let h1 = this.topList[i]
					let h2 = this.topList[i + 1]
					if(scrollTop > h1 && scrollTop < h2) {
						this.active = i
					}
				}
			},
			categoryClick(category, index) {
				this.$nextTick(() => {
					this.cIndex = `cid${ category.id }`
					this.flag = true
				})
				this.cIndex = ''
				this.active = index;
			},
			itemClick (category, item) {
				if (item.disabled) return 
				let checked = !item.checked
				if (checked && this.maxSelected != '-1' && this.getValues().length >= Number(this.maxSelected)) {
					uni.showToast({
						icon: 'none',
						title: `最多可选${ this.maxSelected }个`
					})
					return
				}
				item.checked = checked
				if (checked) {
					category.selectedIds[item.id] = item
				} else {
					delete category.selectedIds[item.id]
				}
				this.getSelectedCount()
			},
			getValues () {
				let ids = []
				this.list.forEach(item => {
					ids = ids.concat(Object.values(item.selectedIds))
				})
				return ids
			},
			getActive () {
				return { index: this.active, data: JSON.parse(JSON.stringify(this.list[this.active])) }
			},
			getSelectedCount () {
				let ids = this.getValues()
				this.$emit('change', JSON.parse(JSON.stringify(ids)))
			},
			getNodesInfo () {
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.category-name').boundingClientRect().exec(res=>{
					let nodes = res[0]
					this.topList =  nodes.map(item => item.top)
				})
			},
			scrollToBottom () {
				setTimeout(()=>{
					this.active = this.list.length - 1
				}, 50)
			},
			reload () {
				this.getNodesInfo()
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.height = res.screenHeight - 188;
				}
			})
			this.getNodesInfo()
			setTimeout(() => {
				this.getSelectedCount()
			}, 500)
		}
	}
</script>

<style lang="less" scoped>
	.long-categories {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.left {
		width: 194upx;
		background: #f8f8f8;
	}
	
	
	.left-item {
		
		height: 88upx;
		font-size: 28upx;
		color: #333333;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		.num {
			width: 38upx;
			height: 38upx;
			line-height: 38upx;
			background: #F67124;
			border-radius: 50%;
			color: #FFFFFF;
			font-size: 16upx;
			font-weight: normal;
			text-align: center;
		}
	}
	
	.left-item-active {
		border-left: 8upx solid #E44B1D;
		background: #FFFFFF;
		color: #E44B1D;
		font-weight: bold;
		
	}
	
	.right {
		width: 74%;
		background: #FFFFFF;
	}
	
	.right-container {
		.category-name {
			padding: 20upx;
			text-align: center;
			.line {
			    display: inline-block;
			    width: 40upx;
			    border-top: 2upx solid grey;
			}
			.txt {
				padding: 0 8upx;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.category-content {
			display: flex;
			flex-wrap: wrap;
			padding: 32upx 18upx 0 18upx;
			.content-box{
				margin-top: 20upx;
				width: 170upx;
				.img{
					margin: 0 auto;
					width: 120upx;
					height: 120upx;
					border-radius: 100%;
					overflow: hidden;
					background-color: #e3e3e3;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.name{
					font-size: 28upx;
					text-align: center;
					color: #333;
					
				}
				
			}
		}
		
	}

	.right-item {
		margin-left: 32upx;
		margin-bottom: 42upx;
		width: 132upx;
		height: 72upx;
		line-height: 72upx;
		background: #FFFFFF;
		border: 2upx solid #E44B1D;
		opacity: 1;
		border-radius: 16upx;
		font-size: 28upx;
		text-align: center;
		color: #E44B1D;
		font-weight: bold;
	}
	.right-item-active {
		background-color: #E44B1D;
		color: #FFFFFF;
	}
	
	.right-item-disable {
		background: #EFEFEF;
		color: #666666;
		border-color: #EFEFEF;
	}

	.right-item image {
		width: 50px;
		height: 50px;
	}

	.active {
		color: #F24544;
	}

	.padding {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		position: fixed;
		background-color: #F24544;
	}
</style>
