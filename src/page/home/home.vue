<template>
	<div>
		<Header></Header>
		<div class="headsearch">
			<div class="headsearch_left"> <img src="../../images/LOGO.png"> </div>
			<div class="headsearch_txt">
				<div>
					<input name="search" type="text" value="心态好点人头还是让他忽然1">
					<img src="../../images/searchlogo.png" width="24" height="24">
					<input name="searchBtn" type="button" value="搜索">
				</div>
				<div class="searchWord">
					<font color="#f3cb0a">热门搜索:</font>
					<ul>
						<li><a href="#" target="_blank">连衣裙</a></li>
					</ul>
				</div>
			</div>
			<div class="headsearch_right"> </div>
		</div>
	</div>
</template>
<script>
	import Header from "../../components/header";
	export default {
		data() {
			return {
				items: [],
				lists: []
			};
		},
		mounted() {
			// Indicator.open('加载中...')
			// axios.post('http://47.93.4.157:8086/mall_api/shop/get_ware_list', {
			//     time: this.getNowFormatDate(),
			//     pageNum:"1",
			//     pageSize:"10",
			// })
			// .then( (response) => {
			//     Indicator.close();
			//     this.lists=response.data.data[0].wareList.list;
			//     this.items=response.data.data[0].recommendWare[0].coverList;
			// })
			// .catch( (error) => {
			//     console.log(error);
			// })
		},

		components: {
			Header
		},
		methods: {
			// getNowFormatDate() {
			//     var date = new Date();
			//     var seperator1 = "-";
			//     var seperator2 = ":";
			//     var month = date.getMonth() + 1;
			//     var strDate = date.getDate();
			//     if (month >= 1 && month <= 9) {
			//         month = "0" + month;
			//     }
			//     if (strDate >= 0 && strDate <= 9) {
			//         strDate = "0" + strDate;
			//     }
			//     var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			//             + " " + date.getHours() + seperator2 + date.getMinutes()
			//             + seperator2 + date.getSeconds();
			//     return currentdate;
			// }
		}
	};
</script>

<style scoped>
	.headsearch {
		height: 140px;
		background-color: #fff;
	}

	.headtag {
		height: 214px;
		background-color: #fff;
	}

	.headtop {
		height: 154px;
		background-color: #fff;
	}

	.headsearch div {
		float: left;
	}

	.headsearch_left {
		margin-left: 5px;
		margin-top: 34px;
		width: 176px;
		height: 74px;
		left: 0px;
	}

	.headsearch div {
		float: left;
	}

	.headsearch_txt input:first-child {
		width: 460px;
		height: 46px;
		font-size: 16px;
		color: #999;
		border-color: #f3cb0a;
		border-style: solid;
		border-width: 2px;
		padding-left: 10px;
		float: left;
		list-style: none;
		text-decoration: none;
		outline: none;
	}

	.headsearch_txt img {
		margin-left: -500px;
		margin-top: 12px;
		float: left;
	}

	.headsearch_txt input:last-child {
		width: 80px;
		height: 46px;
		font-size: 18px;
		color: #fff;
		background-color: #f3cb0a;
		border: 2px solid #f3cb0a;
		float: left;
		outline: none;
		cursor: pointer;
	}

	.headsearch_txt .searchWord {
		margin-top: 10px;
	}

	.headsearch_txt .searchWord font {
		float: left;
	}

	.headsearch_txt .searchWord ul {
		float: left;
		list-style: none;
		font-size: 15px;
		color: #999;
		margin-top: 2px;
		margin-left: -40px;
	}

	.headsearch_txt .searchWord ul li {
		float: left;
		width: 60px;
		color: #999;
	}
</style>