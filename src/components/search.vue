<template>
	<div style="background:#fff;width:100%;">
		<div class="headsearch">
			<div>
				<img src="../images/LOGO.png">
			</div>
			<div style="display:flex;">
				<div class="headsearch_input">
					<img src="../images/searchlogo.png" style="width:24px;height:24px;margin-right:10px;">
					<input placeholder="搜你想搜的">
				</div>
				<div>
					<button class="searchBtn">搜索</button>
				</div>
			</div>
			<div style="width:80px;height:80px;">
				<img src="../images/erweima.png" style="width:100%;height:80px;">
			</div>
		</div>
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
</style>