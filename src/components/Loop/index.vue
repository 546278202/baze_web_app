<template>
	<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
		<swiper-item v-for="item in dataList" :key="item.id">
			<view class="swiper-item uni-bg-red">
				<img :src="$url.imgUrl+item.WapBanner" style="height:100%;"/>
			</view>
		</swiper-item>
	</swiper>
</template>
<script>

	export default {
		data() {
			return {
				$url:this.$url,
				dataList:[]
			}
		},
		methods:{
			getList(){
				let params={}
				this.$api.register({params: params }).then(res => {
					// 获得数据 
					this.dataList=res.data
				}).catch(res => {
				　　// 失败进行的操作
				})
				// uni.request({url: this.$url.baseUrl+'/index.php?r=web/site/banner',success: (res) => {
				// 		this.dataList=res.data.data
				// 	}
				// })
			},
			changeIndicatorDots(e) {
            	this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		},
		mounted(){
			this.getList()
		}			
	}
</script>
<style>
	/* @import '../../../common/uni-nvue.css'; */
</style>

<style  scoped>
.swiper-item{
	height:200px;
}
</style>
