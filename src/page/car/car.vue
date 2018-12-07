<template>
	<div>
		<Header></Header>
		<Search></Search>
		<div style="width:1200px;margin:0 auto;">
			<!-- <el-checkbox-group v-model="checkList">
				<el-checkbox label="复选框 A"></el-checkbox>
				<el-checkbox label="复选框 B"></el-checkbox>
				<el-checkbox label="复选框 C"></el-checkbox>
      </el-checkbox-group>-->
			<div style="width:100%;height:40px;line-height:40px;background:#fc9835;color:#fff;font-size:14px;padding:0 10px;">
				<div class="tt">
					<el-checkbox label="商家：嗡嗡" style="color:#fff;"></el-checkbox>
				</div>
				<div class="tt">
					<span>￥29</span>
				</div>
				<div class="tt"></div>
				<div class="tt">
					<span>￥29</span>
				</div>
				<div class="tt">
					<a>添加收藏</a>
					<a>删除</a>
				</div>
			</div>
			<div style="width:100%;color:#333;font-size:14px;border:1px solid #eee;display:flex;">
				<div class="item">
					<span>鸭梨</span>
				</div>
				<div class="item">
					<span>￥29</span>
				</div>
				<div class="item">
					<div class="addNumBtn">
						<div @click="addDown">
							<i class="iconfont icon-iconfontmove"></i>
						</div>
						<div class="center">{{buyNum}}</div>
						<div @click="addUp">
							<i class="iconfont icon-iconfontadd"></i>
						</div>
					</div>
				</div>
				<div class="item">
					<span>￥29</span>
				</div>
				<div class="" style="flex-direction: column;">
					<span>
						<div>
							添加收藏
						</div>
						<div>
							添加收藏
						</div>
					</span>
					
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from "../../components/header";
	import Search from "../../components/search";
	import Footer from "../../components/footer";
	import { getNowFormatDate } from "../../config/mUtils";
	export default {
		name: "App",
		data() {
			return {
				datalist: "",
				checkList: ["选中且禁用", "复选框 A"],
				buyNum: 1 //加减数量
			};
		},
		computed: {},
		mounted() {
			var data = {
				userId: "",
				wareid: this.$route.query.id
			};
			this.$http
				.post(process.env.API_HOST + "/mall_api/shop/get_ware_info", data)
				.then(response => {
					var data = response.data;
					if (data.code == 0 && data.success == true) {
						console.log(data.data);
						this.datalist = data.data;
						this.url = data.data.coverList[0];
						this.specJson = data.data.specJson;
						this.showPostMoney();
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		components: {
			Header,
			Search,
			Footer
		},
		methods: {
			addUp() {
				this.buyNum++;
				console.log(this.buyNum);
			},
			addDown() {
				if (this.buyNum > 1) {
					this.buyNum--;
					console.log(this.buyNum);
				}
			}
		}
	};
</script>
<style lang="scss">
	body {
		background: #fff;
	}
</style>
<style lang="scss" scoped>
	.addNumBtn {
		text-align: center;
		display: flex;
		border: 1px solid #d3d3d3;
		width: 118px;
		height: 30px;
		line-height: 30px;
		margin-left: 30px;
		margin-right: 50px;

		div {
			width: 33.33%;
		}

		.center {
			border-right: 1px solid #d3d3d3;
			border-left: 1px solid #d3d3d3;
		}
	}

	.item {
		width: 150px;
		height: 150px;
		border-right: 1px solid #eee;
		align-items: center;
		display: flex;
		text-align: center;
		span {
			width: 100%;
		}
	}

	.tt {
		width: 150px;
		height: 40px;
		align-items: center;
		display: flex;
		text-align: center;
		
	}
</style>