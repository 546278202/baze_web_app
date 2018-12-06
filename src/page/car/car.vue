<template>
	<div>
		<Header></Header>
		<Search></Search>
		<div style="width:1200px;margin:0 auto;">
			<!-- <el-checkbox-group v-model="checkList">
				<el-checkbox label="复选框 A"></el-checkbox>
				<el-checkbox label="复选框 B"></el-checkbox>
				<el-checkbox label="复选框 C"></el-checkbox>
			</el-checkbox-group> -->
			<div style="width:100%;height:40px;line-height:40px;background:#fc9835;color:#fff;font-size:14px;padding:0 10px;">
				<el-checkbox label="商家：嗡嗡" style="color:#fff;"></el-checkbox>
			</div>
			<div style="width:100%;height:40px;line-height:40px;color:#333;font-size:14px;padding:0 10px;">
				<el-checkbox label="商家：嗡嗡" style="color:#fff;"></el-checkbox>
				
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
				datalist:'',
				checkList: ['选中且禁用','复选框 A']
			};
		},
		computed: {},
		mounted() {
			var data = {
				userId:'',
				wareid: this.$route.query.id
			};
			this.$http
			.post(process.env.API_HOST + "/mall_api/shop/get_ware_info", data)
			.then(response => {
				var data = response.data;
				if (data.code == 0 && data.success == true) {
					console.log(data.data)
					this.datalist=data.data;
					this.url=data.data.coverList[0];
					this.specJson=data.data.specJson;
					this.showPostMoney();
				}
			})
			.catch(error => {
				console.log(error);
			})			
		},
		components: {
			Header,
			Search,
			Footer
		},
		methods: {
	
		},	
	};
</script>
<style lang="scss">
	body{background:#fff;}
</style>