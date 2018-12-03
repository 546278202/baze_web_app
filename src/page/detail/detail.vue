<template>
	<div>
		<Header></Header>
		<Search></Search>
		<daoHang></daoHang>
		<div style="width:100%;background:#e5e5e5e;">
			<div class="crumbs_c">
				<div style="width:1020px;display: flex;justify-content: space-between;">
					<div class="crumbs_l">
						<a href="#">应季水果</a>&gt;
						<a href="#">水果超市</a>&gt;
						<a href="#">苹果</a>
					</div>
					<div class="crumbs_r">
						<div style="display: flex;align-items: center;margin-right:20px;">
							<img src="../../images/icon.png" width="30" height="30">
						</div>
						<div>小迷糊水果超市</div>
					</div>
				</div>
			</div>
		</div>
		<div style="width:100%;background:#eee;">
			<div style="width:1200px;margin:0 auto;">
				<div style="height:400px;width:1020px;background:#fff;padding:10px 20px;">
					<div style="width:400px;height:400px;"></div>
				</div>
			</div>
		</div>
		<div class="img-con">
			<img-zoom src="../../images/erweima.png" bigsrc="src/img/img-big.jpg"></img-zoom>
		</div>
		<div class="img-con2">
			<img-zoom src="../../images/erweima.png" width="450" height="250" bigsrc="../..//images/erweima.png" :configs="configs"></img-zoom>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>

	import Header from "../../components/header";
	import Search from "../../components/search";
	import daoHang from "../../components/daoHang";
	import Footer from "../../components/footer";
	import imgZoom from '../../components/imgZoom';
	import { getNowFormatDate } from "../../config/mUtils";
	export default {
		name: 'App',
		data() {
			return {
				configs: {
					width: 650,
					height: 350,
					maskWidth: 100,
					maskHeight: 100,
					maskColor: 'red',
					maskOpacity: 0.2
				}
			}
		},
		computed: {},
		mounted() {
			var data = {
				time: getNowFormatDate(),
				pageNum: "1",
				pageSize: "10"
			}
		},

		components: {
			Header,
			Search,
			daoHang,
			Footer,
			imgZoom
		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.crumbs_c {
		width: 1200px;
		margin: 0 auto;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		font-family: "微软雅黑";
		text-align: left;

		a {
			color: #666666;
			font-size: 14px;
			font-family: "微软雅黑";
			text-decoration: none;
		}

		.crumbs_r {
			display: flex;
			height: 40px;
			line-height: 40px;
		}
	}

	.img-con {
		border: 1px solid #ccc;
		text-align: center;
		padding: 0;
	}

	.img-con2 {
		border: 1px solid #bbb;
		text-align: center;
		float: left;
		margin-top: 20px;
	}
</style>