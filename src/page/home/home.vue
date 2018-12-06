<template>
	<div>
		<Header></Header>
		<Search></Search>
		<daoHang></daoHang>
		<div style="font-family:微软雅黑;font-size: 12px;width: 1200px;height: 540px;margin:0 auto;overflow: hidden;box-sizing: border-box;">
			<!-- 左侧 -->
			<div style="width: 200px;height: 540px;border: 1px solid #FC3;background-color: #fff;float:left;padding-left: 10px;box-sizing: border-box;">
				<div v-for="item in typeData">
					<div style="font-size:16px;color:#f3cb0a;line-height:50px;">{{item.categoryName}}</div>
					<div style="font-size: 14px;color: #999;overflow:hidden;">
						<a v-for="item in item.children" style="float:left;margin-right:8px;">{{item.categoryName}}</a>
					</div>
				</div>
			</div>
			<!-- 中间 -->
			<div style="width: 690px;height: 540px;float:left;margin:0 10px;overflow:hidden;">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide class="swiper-slide" v-for="(item,index) in lunBoArr" :key="index">
						<div class="activity-info">
							<router-link :to="{ path: '../detail', query: { id: item.wareid }}">
								<img :src="item.wareCover" style="width:100%;height:390px;">
							</router-link>

						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
				<div style="width:690px;overflow:hidden;box-sizing: border-box;margin-top: 10px;">
					<div style="width:165px;height:140px;font-size:16px;float:left;margin-right:10px;">
						<img src="../../images/jz1.png" style="width:100%;height:100%;">
					</div>
					<div style="width:165px;height:140px;font-size:16px;float:left;margin-right:10px;">
						<img src="../../images/jz2.png" style="width:100%;height:100%;">
					</div>
					<div style="width:165px;height:140px;font-size:16px;float:left;margin-right:10px;">
						<img src="../../images/jz3.png" style="width:100%;height:100%;">
					</div>
					<div style="width:165px;height:140px;font-size:16px;float:left;">
						<img src="../../images/jz4.png" style="width:100%;height:100%;">
					</div>
				</div>
			</div>
			<!-- 右侧 -->
			<div class="wy_right">
				<div style="height:80px;display:flex;align-items:center;justify-content: center;"><img src="../../images/login2.png" style="width:60px;height:60px;"></div>
				<div class="login">
					<div class="bodyRightTopLoginText">
						<a href="#">登录</a> /
						<a href="#">注册</a>
					</div>
					<div class="shouCang" >
						<div>
							<div>我的收藏</div>
							<div class="f3cb0a">5</div>
						</div>
						<div>
							<div>我的足迹</div>
							<div class="f3cb0a">5</div>
						</div>
					</div>
				</div>
				<div style="height:30px;background: #f3cb0a;color:#fff;text-align: center;line-height: 30px;font-size:16px;">公告</div>
				<div style="height:120px;font-size:14px;margin-bottom:10px;background: #fff;color:#999;padding:0 10px;line-height: 25px;">商城公告 【公告】第二季包邮试用活动中奖名单公示 2018-09-06 09:20:40 ...可随时咨询商城「在线客服」,再次感谢大家的参与,请您继续关注...</div>
				<div style="width:290px;height:140px;font-size:16px;">
					<img src="../../images/index1.png" style="width:100%;height:100%;">
				</div>
			</div>
		</div>
		<!-- 推荐商品 -->
		<div class="hotList">
			<div class="hotListTitle">
				热门推荐
				
				<a style="font-size:18px;color:#999;position: absolute;right:30px;top:0;">换一批</a>
			</div>
			<div class="hotItems">
				<div class="hotItem" v-for="item in lunBoArr">
					<div style="height:190px;">
						<img :src="item.wareCover">
					</div>
					<div class="hotItem_name">{{item.warename}}</div>
					<div class="hotItem_price">￥{{item.wareprice}}</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	import Header from "../../components/header";
	import Search from "../../components/search";
	import daoHang from "../../components/daoHang";
	import Footer from "../../components/footer";
	import { getNowFormatDate } from "../../config/mUtils";
	export default {
		data() {
			return {
				typeData: [], //分类数据
				lunBoArr: [], //轮播数据
				swiperOption: {
					spaceBetween: 5,
					autoplay: { delay: 2000 },
					notNextTick: true,
					pagination: ".swiper-pagination",
					slidesPerView: "auto",
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30
				}
			};
		},
		//定义这个sweiper对象
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			//这边就可以使用swiper这个对象去使用swiper官网中的那些方法
			var data = {
				time: getNowFormatDate(),
				pageNum: "1",
				pageSize: "10"
			};
			this.$http
				.post(process.env.API_HOST + "/mall_api/shop/get_ware_list", data)
				.then(response => {
					var data = response.data;
					console.log(data);
					if (data.code == 0 && data.success == true) {
						this.lunBoArr = data.data.wareList;
					}
				})
				.catch(error => {
					console.log(error);
				});
			this.swiper.slideTo(0, 0, false);

			this.$http
				.post(process.env.API_HOST + "/mall_api/classify/getClassifyList", "")
				.then(response => {
					var data = response.data;
					if (data.code == 0) {
						this.typeData = data.data;
					}
					console.log(this.typeData);
				})
				.catch(error => {
					console.log(error);
				});
		},
		components: {
			swiper,
			swiperSlide,
			Header,
			Search,
			daoHang,
			Footer
		},
		methods: {}
	};
</script>
<style lang="scss" scoped>
	.swiper-container {
		width: 690px;
		height: 390px;
	}

	.bodyRightTopLoginText {
		text-align: center;
		color: #999;
		font-size: 16px;
	}

	.bodyRightTopLoginText a {
		color: #999;
		font-family: "微软雅黑";
	}

	.my-bullet {
		border-radius: 0.02rem;
		width: 0.04rem;
		height: 0.04rem;
		margin: 0 0.03rem;
		display: inline-block;
		background: rgba(0, 0, 0, 0.2);
	}

	.my-bullet-active {
		background: #3cdbc0;
		width: 0.16rem;
	}

	/* 热门推荐 */
	.hotList {
		width: 1200px;
		margin: 0 auto;
		margin-top: 20px;
	}

	.hotList img {
		width: 100%;
		height: 100%;
	}

	.hotListTitle {
		position: relative;
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #000;
		background: #fff;
		margin-bottom: 10px;
		font-size: 24px;
	}

	.hotItems {
		overflow: hidden;
	}

	.hotItem {
		float: left;
		width: 236px;
		height: 280px;
		overflow: hidden;
		background: #fff;
		margin-right: 5px;
	}

	.hotItem_name {
		font-size: 16px;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 16px;
		color: rgb(51, 51, 51);
		padding: 0 10px;
		margin: 8px 0;
	}

	.hotItem_price {
		font-size: 20px;
		color: #cc0000;
		padding: 0 10px;
	}
	.wy_right{
		width: 290px;
		height: 540px;
		float:left;
		margin-top:10px;
		background: url(../../images/login1.png) no-repeat; 
	}
	.login {
		height:150px;
	
		background:#fff url(../../images/bg1.png) no-repeat; 
		background-position:left bottom;
	}
	.f3cb0a{
		color:#f3cb0a;
		margin-top:10px; 
	}
	.shouCang{
		font-size:14px; 
		color:#666;
		display:flex;
		padding:0 44px;
		justify-content:space-between;
		text-align: center;
		margin-top:14px;
	}
	
</style>