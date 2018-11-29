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
				<div>
					<swiper :options="swiperOption" ref="mySwiper">
						<swiper-slide class="swiper-slide" v-for="(activity,index) in lunBoArr" :key="index">
							<div class="activity-info">
								<a class="cover">
									<img :src="activity.wareCover" style="width:100%;height:100%;">
								</a>
							</div>
						</swiper-slide>
						<!-- Add Pagination -->
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>

					<!-- <swiper :options="swiperOption" ref="mySwiper">
					
						<swiper-slide v-for="item in lunBoArr">
							<img v-bind:src="item.wareCover" style="width: 100%;height:100%;" />
						</swiper-slide>
					

					</swiper>
				
					<div class="swiper-pagination" slot="pagination"></div> -->
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
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Header from "../../components/header";
	import { getNowFormatDate } from "../../config/mUtils";
	export default {
		data() {
			return {
				swiperOption: {
					spaceBetween: 5,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						bulletClass: 'my-bullet',
						bulletActiveClass: 'my-bullet-active'
					}
				},

				lunBoArr: [],
				lists: [],
				swiperOption: {
					spaceBetween: 5,
					autoplay: {
						delay: 1000,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						bulletClass: 'my-bullet',
						bulletActiveClass: 'my-bullet-active'
					},

					//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					pagination: '.swiper-pagination',
					slidesPerView: 'auto',
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30,
					onSlideChangeEnd: swiper => {
						//这个位置放swiper的回调方法
						this.page = swiper.realIndex + 1;
						this.index = swiper.realIndex;
					}
				}
			}
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
					if (data.code == 0 && data.success == true) {
						this.lunBoArr = data.data.wareList;
					}
				})
				.catch(error => {
					console.log(error);
				});
			this.swiper.slideTo(0, 0, false);

		},
		components: {
			swiper,
			swiperSlide,
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
		border-radius: .02rem;
		width: .04rem;
		height: .04rem;
		margin: 0 .03rem;
		display: inline-block;
		background: rgba(0, 0, 0, 0.20);
	}

	.my-bullet-active {
		background: #3CDBC0;
		width: .16rem
	}
</style>