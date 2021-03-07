<template>
	<view>
		<view class="line">
			
		</view>
		<view class="wrapper">
			<view class="title">
				管理我的账号
			</view>
			<view class="content">
				<view class="pictrue-box">
					<view class="pictrue">
						<image src="" mode=""></image>
					</view>
					<view class="icon">
						<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNTA0M2QyNC02ZDBmLTkwNGItYjY1Ni02OGM0MTIzOWMzZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU2OUE5RjFCRjBFMTFFOUFDNzRBNUUwNDlEMzk1RTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDU2OUE5RjBCRjBFMTFFOUFDNzRBNUUwNDlEMzk1RTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGRkYmQ0NDMtMjEwZS00ZjVjLWE0MDgtMDYxM2VkMDBkMDE1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWIyMDM4YzctNTBiNi0xNzRiLTg3NGEtNjkyZDA5MzI1MWRmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bMGCmQAAA5NJREFUeNq0l0tME1EUhs8wDATFAiJEIhZBMSZqkFeiCeKrwEZjwAUlMbCRRCBRSYyy8AELQ9wIESRskKVhAZGEjYiCBNTwBsFHUEgBkUcLrUCFPrjeMw4IdDotUzjJaTtzzz1f79zH/IchhIAjm4o5xNGvJOoJ1GOph1H3FZr11Ieot1N/Tf1VYMd3s6OcjBSYAjH5LWCYbC4yJsAz7hxwEdHA7g8BZpcPH0PmDGAd1YC5txOWWhrB3N2hBUKe0aZi+gf0dpMjWMwnow+qJ2PDJwz5d4hFM0ScNYtmmBgK7hLsizns5RcDstTLtMkXiKm/h8g17Ku9dIZgLswpCRag1bM5GWR5YZ64atYZHZm5pkZ49Ub4RnDJTKaaLJtMZKsMc81ev4rwUlEwbUjFR4P/cqsNn542WYXw1HVgesOXLoZJV+bUop0i2qeFZKaihFiNC6JzjgxkrQXn40qUa+bxMfLj9BHyVenB+/iNDNE4Q0EejjofmQz94UH36Zh/TUMA7k85NpqaAMaPzavXHmHhENrYbxOH+12Xopqmow12o9eJXGSsLKjl108wvKiAvU8qgAsJW73vrbooGo8MZCGTB3vGnZUFHUlVwUReNszVVoGyqoGHKy6rISDvkd1+AivJnX5EcccjZUHNmiH+evrxPX6thNS2AKugpyzL2u3LHeNZUQg+zIaEyoaumOnbALA+fgBubpL92QM8KxyjfBhvhUtQfLxBRc8dQvm30r+Xi4+bqyNdhUo8XjFDsIHM/3YYOJ6VtiVQfI0iE8GDVs2wZLBVNw1/etq2ZKQCaxDBneZP3ZLBCy1v8IhzGYomsLoQXL/U0iQZbGxtAq+ok7An9z4oXzZDUHGlLCiawKpfOTLH6ZHpL3Z6GT+8A6t2ChgPT6eTM147YGe8SvLIdKe6yES1VelCZflDxYNCW91VcBuWvvRtalTcPiWEvR+0nbLKcpyyMmS6C/eKF+uqs7yuqAO5oxHrF1FyGlhOxW8KzPrutp3bz32wWFczjax1Ym/bhUBKAlkr/jZKn9JtkT5Z6TbSZ+PJddPc1V5jyM0EYjSCq7asnwV9djqY2lprMLekrv4vb1XENNArX97Svk7LWxFBP4mSCEX65gR93oq+sivonSlhcuk+z6EljL9n3HngTtASJli5voQZGwFzD5Ywb7GE0QklTJFUCcNssmhLXFO0+QnNs2uKtnp03KeOcv4VYABwkIZ9IZVk0gAAAABJRU5ErkJggg==" mode=""></image>
					</view>
				</view>
				<view class="msg">
					<view class="id">
						457
					</view>
					<view class="phone">
						绑定手机号:18780581923
					</view>
				</view>
				<view class="text">
					当前账号
				</view>
				<view class="bg-img">
					<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAACgCAYAAADw+I85AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0QzNkY3NzlCNzJCMTFFOTgyNEU4QzhGQTRFRUY2REQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0QzNkY3N0FCNzJCMTFFOTgyNEU4QzhGQTRFRUY2REQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRDM2Rjc3N0I3MkIxMUU5ODI0RThDOEZBNEVFRjZERCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRDM2Rjc3OEI3MkIxMUU5ODI0RThDOEZBNEVFRjZERCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn3rJMAAAArUSURBVHja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" mode=""></image>
				</view>
				
			</view>
			
		</view>
		<view class="line">
			
		</view>
		<view class="inputs">
			<view class="item">
				<view class="name">
					ID号
				</view>
				<view class="item-right">
					<view class="text">
						457
					</view>
					<view class="lock">
						<image src="/static/img/lock.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="name">
					昵称
				</view>
				<view class="item-right">
					<input type="number" placeholder="请输入昵称" class="input-item" value="youzhi"  />
				</view>
			</view>
			<view class="item">
				<view class="name">
					手机号
				</view>
				<view class="item-right">
					<input type="number" placeholder="请输入手机号" class="input-item" value="18780581923"  />
				</view>
			</view>
			
			
		</view>
		<view style="margin-top: 60upx;margin-bottom: 30upx;padding: 0upx 20upx;box-sizing: border-box;">
			<u-button :custom-style="customStyle"  :ripple="true" shape="circle" @click="send"   >
				保存修改
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					width: '200upx', 
					height:'90upx',
					background:' #ff1f44',
					color: '#fff',
					fontSize:'32upx'
				},
			};
		}
	}
</script>

<style lang="scss">
	image{
		display: block;
		width: 100%;
		height: 100%;
	}
	.line{
		width: 100%;
		height: 10upx;
		background-color: #eee;
	}
	.wrapper{
		overflow: hidden;
		padding: 25upx;
		box-sizing: border-box;
		.title{
			font-size: 32upx;
			color: #282828;
			margin-bottom: 25upx;
		}
		.content{
			overflow: hidden;
			border-radius: 20upx;
			border: 1upx solid #e93323;
			padding: 30upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			position: relative;
			background-color: #fff9f9;
			.pictrue-box{
				position: relative;
				.pictrue{
					border-radius: 100%;
					overflow: hidden;
					width: 106upx;
					height: 106upx;
					background-color: #eee;
				}
				.icon{
					position: absolute;
					width: 30upx;
					height: 30upx;
					bottom: 0upx;
					right: 10upx;
					z-index: 1;
				}
			}
			.msg{
				margin-left: 20upx;
				.id{
					font-size: 30upx;
					color: #282828;
				}
				.phone{
					font-size: 24upx;
					color: #999;
					margin-top: 15upx;
				}
			}
			.text{
				position: absolute;
				right: 0;
				top: 0;
				font-size: 26upx;
				background-color: rgba(233,51,35,.1);
				padding: 9upx;
				color:#E34819;
				z-index: 3;
				box-sizing: border-box;
				border-radius: 0 20upx 0 20upx;
			}
			.bg-img{
				position: absolute;
				bottom: 0upx;
				right: 0upx;
				z-index: 1;
				width: 650upx;
				height: 100%;
			}
			
		}
	}
	
	.inputs{
		overflow: hidden;
		padding-left: 25upx;
		.item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32upx;
			border-bottom: 1upx solid #eee;
			margin-top: 25upx;
			padding-bottom: 25upx;
			padding-right: 25upx;
			.name{
				color: #282828;
				
			}
			.item-right{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.input-item{
					text-align: right;
					color: #868686;
					font-size: 32upx;
				}
				
				.text{
					color: #868686;
					
				}
				.lock{
					width: 40upx;
					height: 40upx;
					margin-left: 15upx;
				}
			}
		}
	}
</style>
