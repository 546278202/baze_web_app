<template>
	<div class="headMenu">
		<ul>
			<li>
				<a>分类</a>
			</li>
			<li>首页</li>
			<li>时尚街</li>
			<li>小景家具</li>
			<li>零食</li>
			<li>应季水果</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {};
		}
	};
</script>
<style scoped>
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
</style>