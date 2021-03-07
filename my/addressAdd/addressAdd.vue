<template>
	<view>
		<view class="list">
			<view class="item">
				<view class="text">
					姓名
				</view>
				<input type="text" v-model="userName" placeholder="请输入姓名"/>
			</view>
			<view class="item">
				<view class="text">
					联系方式
				</view>
				<input type="number" v-model="phone" maxlength="11" placeholder="请输入联系方式"/>
			</view>
			<view class="item" style="justify-content: space-between;" @click="value=true">
				<view style="align-items: center;display: flex;">
					<view class="text">
						所在地区
					</view>
					<input type="text" v-model="address" placeholder="请选择所在地区" :disabled="true"/>
				</view>
				<u-icon name="map-fill" color="#E34819 " size="38"></u-icon>
			</view>
			<view class="item" >
				<view class="text">
					详细地址
				</view>
				<input type="text" v-model="detail" placeholder="请填写详细地址"/>
			</view>
			
			<view class="item-default">
				<u-checkbox-group  >
					<u-checkbox 
						shape="circle"
						active-color="#e93323"
						v-model="isDefault">
						<view class="text">
							设为默认
						</view>
					</u-checkbox>
				</u-checkbox-group>
				
			</view>
			
			<view style="margin-top: 30upx;margin-bottom: 30upx;padding: 0upx 20upx;box-sizing: border-box;">
				<u-button :custom-style="customStyle"  :ripple="true" shape="circle" @click="send"   >
					立即保存
				</u-button>
			</view>
		</view>
		<city-select v-model="value" @city-change="cityChange"></city-select>
	</view>
</template>
<script>
	import citySelect from '@/components/u-city-select/u-city-select.vue';
	import {
		addressAdd
	} from "@/api/api.js"
	
	
	export default {
		components:{
			citySelect
		},
		data() {
			return {
				userName:'',
				phone:'',
				address:'',
				addressArr:[],
				detail:'',
				isDefault:false,
				value: false,
				input:'',
				customStyle: {
					width: '200upx', 
					height:'90upx',
					background:' #ff1f44',
					color: '#fff',
					fontSize:'32upx'
				},
			};
		},
		methods:{
			cityChange(e) {
				this.addressArr[0] = e.province.label
				this.addressArr[1] = e.city.label
				this.addressArr[2] = e.area.label
				this.address = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},
			send(){
				addressAdd({
					userName:this.userName,
					phone:this.phone,
					address:this.addressArr,
					detail:this.detail,
					isDefault:this.isDefault?'1':'0',	
				})
				.then(result => {
					let data = result.data || [];
					if (data.code == this.$dict.responseCode.success) {
						
						uni.showToast({
							title:'添加成功！',
							icon: 'none'
						})
						
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
	page{
		background-color: #f5f5f5;
	}
	.list{
		.item{
			background-color: #FFF;
			padding: 20upx;
			box-sizing: border-box;
			border-top: 1upx solid #DADADA;
			font-size: 30upx;
			display: flex;
			align-items: center;
			.text{
				width: 214upx;
			}
		}
		
		.item-default{
			background-color: #FFF;
			margin-top: 20upx;
			margin-bottom: 40upx;
			padding: 20upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.text{
				font-size: 28upx;
				color: #282828;
				margin-left: 16upx;
			}
		}
		
		.item2{
			padding: 20upx;
			box-sizing: border-box;
			border-bottom: 1upx solid #DADADA;
			font-size: 30upx;;
			.text{
				width: 214upx;
			}
			.content{
				width: 100%;
				.uploadImg{
					width: 100%;
					height: 400upx;
					border: 2upx dashed #bbbbbb;
					overflow: hidden;
					margin-top: 20upx;
					image{
						width: 100%;
						height: 100%;
						
					}
				}
			}
		}
	}
</style>
