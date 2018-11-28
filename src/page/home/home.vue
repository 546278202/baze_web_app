<template>
	<div>
		<Header></Header>
		<div style="background:#fff;width:100%;">
			<div class="headsearch">
				<div> <img src="../../images/LOGO.png"></div>
				<div style="display:flex;">
					<div class="headsearch_input">
						<img src="../../images/searchlogo.png" style="width:24px;height:24px;margin-right:10px;">
						<input placeholder="搜你想搜的">
					</div>
					<div>
						<button class="searchBtn">搜索</button>
					</div>
				</div>
				<div style="width:80px;height:80px;"> <img src="../../images/erweima.png" style="width:100%;height:80px;"></div>
			</div>
		</div>
		<div class="headMenu">
			<ul>
				<li><a>分类</a></li>
				<li>首页</li>
				<li>时尚街</li>
				<li>小景家具</li>
				<li>零食</li>
				<li>应季水果</li>
			</ul>
		</div>

		<div style="font-family:微软雅黑;font-size: 12px;width: 1200px;height: 540px;margin:0 auto;overflow: hidden;box-sizing: border-box;">
			<div style="width: 200px;height: 540px;border: 1px solid #FC3;background-color: #fff;float:left;">
				<div>ffff</div>

			</div>
			<div style="width: 690px;height: 540px;float:left;margin:0 10px;overflow:hidden;">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in lunBoArr"><img v-bind:src="item.wareCover" style="width: 100%;height:100%;" /></div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>

					<!-- 如果需要导航按钮 -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
				<div style="width:690px;overflow:hidden;box-sizing: border-box;margin-top: 10px;">
					<div style="width:165px;height:140px;font-size:16px;float:left;margin-right:10px;">
						<img src="../../images/index1.png" style="width:100%;height:100%;">
					</div>
					<div style="width:165px;height:140px;font-size:16px;float:left;margin-right:10px;">

						<img src="../../images/index1.png" style="width:100%;height:100%;">
					</div>
					<div style="width:165px;height:140px;font-size:16px;float:left;margin-right:10px;">

						<img src="../../images/index1.png" style="width:100%;height:100%;">
					</div>
					<div style="width:165px;height:140px;font-size:16px;float:left;">
						<img src="../../images/index1.png" style="width:100%;height:100%;">
					</div>
				</div>
			</div>
			<div style="width: 290px;height: 540px;float:left;">
				<div style="height:80px;background: #f3cb0a;margin-top: 10px;"></div>
				<div style="height:150px;background: #fff;">
						<div class="bodyRightTopLoginText">
							<a href="#">登录</a> / <a href="#">注册</a>
						</div>
				</div>
				<div style="height:30px;background: #f3cb0a;color:#fff;text-align: center;line-height: 30px;font-size:16px;">公告</div>
				<div style="height:120px;font-size:16px;margin-bottom:10px;background: #fff;">
					公告：1
				</div>
				<div style="width:290px;height:140px;font-size:16px;">
					<img src="../../images/index1.png" style="width:100%;height:100%;">
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	import Swiper from "swiper";
	import Header from "../../components/header";
	import { getNowFormatDate } from "../../config/mUtils";
	export default {
		data() {
			return {
				lunBoArr: [],
				lists: []
			};
		},
		mounted() {
			var data = {
				time: getNowFormatDate(),
				pageNum: "1",
				pageSize: "10"
			};
			this.$http.post(process.env.API_HOST + "/mall_api/shop/get_ware_list", data)
				.then(response => {
					var data = response.data;
					if (data.code == 0 && data.success == true) {
						this.lunBoArr = data.data.wareList;
					}
				})
				.catch(error => {
					console.log(error);
				});
			let mySwiper = new Swiper('.swiper-container', {
				observer: true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents: true,//修改swiper的父元素时，自动初始化swiper
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},

			})
		},

		components: {
			Header
		},
		methods: {}
	};
</script>
<style lang="scss" scoped>
	.headsearch {
		width: 1200px;
		margin: 0 auto;
		height: 140px;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.headsearch_input {
		display: flex;
		box-sizing: border-box;
		width: 460px;
		height: 40px;
		font-size: 16px;
		color: #999;
		text-decoration: none;
		border: 2px solid #f3cb0a;
		align-items: center;
		padding: 0 5px;
	}

	.headsearch_input input {
		width: 100%;
		outline: none;
		list-style: none;
	}

	.searchBtn {
		width: 80px;
		height: 40px;
		line-height: 40px;
		background: #f3cb0a;
		color: #fff;
	}

	.headMenu {
		background-color: #f3cb0a;
		height: 60px;
		width: 100%;
	}

	.headMenu ul {
		font-family: "微软雅黑";
		font-size: 16px;
		color: #fff;
		width: 1200px;
		margin: 0 auto;
		height: 60px;
		text-align: left;
	}

	.headMenu ul li {
		list-style: none;
		float: left;
		width: 120px;
		text-align: center;
		height: 59px;
		line-height: 59px;
	}

	.headMenu ul li:hover {
		background-color: #f3930a;
	}

	.swiper-container {
		width: 690px;
		height: 390px;
	}
	.bodyRightTopLoginText{
		text-align: center;
		color: #999;
		font-size: 16px;
	}
	.bodyRightTopLoginText a {
		color: #999;
		font-family: "微软雅黑";
	}
	
</style>