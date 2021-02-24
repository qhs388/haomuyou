<template>
	<view>
		<view class="list">
			<view class="item">
				<view class="text">
					姓名
				</view>
				<input type="text" placeholder="请输入姓名"/>
			</view>
			<view class="item">
				<view class="text">
					执照号码
				</view>
				<input type="text" placeholder="请输入执照号码"/>
			</view>
			<view class="item2">
				<view class="text">
					营业执照
				</view>
				<view class="content">
					<view class="uploadImg">
						<image :src="img1==''?'/static/img/upload-default1.jpg':img1"  mode="aspectFill" @click.stop="showImg(img1,1)"></image>
					</view>
				</view>
			</view>
			<view class="item2" style="border-bottom: 0upx;">
				<view class="text">
					个人身份证
				</view>
				<view class="content">
					<view class="uploadImg">
						<image :src="img2==''?'/static/img/upload-default.png':img2"  mode="aspectFill" @click.stop="showImg(img2,2)"></image>
					</view>
				</view>
				<view class="content">
					<view class="uploadImg">
						<image :src="img3==''?'/static/img/upload-default2.png':img3"  mode="aspectFill" @click.stop="showImg(img3,3)"></image>
					</view>
				</view>
			</view>
			
			<view style="margin-top: 30upx;margin-bottom: 30upx;padding: 0upx 20upx;box-sizing: border-box;">
				<u-button :custom-style="customStyle"  shape="circle" @click="send"   >
					确认
				</u-button>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img1:'',
				img2:'',
				img3:'',
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
			uploadImg(type){
				 uni.chooseImage({
					count: 1, //默认9
					// sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success:(res)=> {
						let igmFile = res.tempFilePaths;
						if(type==1){
							this.img1 = igmFile
						}
						if(type==2){
							this.img2 = igmFile
						}
						if(type==3){
							this.img3 = igmFile
						}
					},
				});
			},
			showImg(img,type){
				if(img!=''){
					var arr = []
					arr.push(img)
					uni.previewImage({
						current: 0,
						urls: arr[0]
					})
				}else{
					this.uploadImg(type)
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.list{
		.item{
			padding: 20upx;
			box-sizing: border-box;
			border-bottom: 1upx solid #DADADA;
			font-size: 30upx;
			display: flex;
			align-items: center;
			.text{
				width: 214upx;
			}
		}
	}
</style>
