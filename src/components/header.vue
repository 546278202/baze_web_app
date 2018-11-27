<template>
	<div class="headword">
		<ol><a href="#" target="_blank">欢迎来到商城</a></ol>
		<ul>
			<a href="#" target="_blank">登录/注册</a>
			<a href="#" target="_blank">我的订单</a>
			<a href="#" target="_blank">购物车</a>
			<a href="#" target="_blank">联系客服</a>
			<a href="#" target="_blank">商城指南</a>
			<a href="#" target="_blank">手机商城</a>
		</ul>

	</div>
</template>
<script>
	export default {
		data() {
			return {};
		},
		mounted() { },
		methods: {},
		watch: {}
	};
</script>
<style scoped>
	.headword {
		font-family: "微软雅黑";
		font-size: 12px;
		color: #999;
		height: 26px;
		line-height: 26px;
		width: 100%;
		background-color: #eeeeee;
		overflow: hidden;
	}
	.headword ol {float:left;}
	.headword ul {float:right;}
	.headword a {
		float: right;
		width: 80px;
		text-decoration: none;
		color: #999;
	}
</style>