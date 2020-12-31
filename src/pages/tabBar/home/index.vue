<template>
	<div>
		<Loop></Loop>
		<view style="display:flex;background:#fff; padding: 15px 0;">
			<view bindtap="bindViewTap" style="display:flex;flex:1;flex-direction:column;align-items: center;font-size:12px; color:#303030" v-for="(item,index) in navList" :key="index" @click="moreHandle(item)">
				<image  :src="item.src" style="height:46px;width:46px;border-radius: 16px;"></image> 
				<view style="margin-top:5px;">{{item.name}}</view>
			</view>
		</view>
		<view style="display:flex;background:#fff; padding: 15px 0;">
			<view bindtap="bindViewTap" style="display:flex;flex:1;flex-direction:column;align-items: center;font-size:12px; color:#303030" v-for="(item,index) in navList" :key="index" @click="moreHandle(item)">
			<image  :src="item.src" style="height:46px;width:46px;border-radius: 16px;"></image> 
				<view style="margin-top:5px;">{{item.name}}</view>
			</view>
		</view>
		<ClassList v-if="dataBase.cata2" :productType="'1'" :navList="[]" :title="'录播课程'" :dataList.sync="dataBase.course" ></ClassList>
		<ClassList v-if="dataBase.cata2" :productType="'1'" :navList="[]" :title="'直播课程'" :dataList.sync="dataBase.course" ></ClassList>
		<view vif="loadingState" style="padding:15px 0;display:flex;align-items: center;justify-content: center;">
			<text style=" margin-left: 8px;color: #969799; font-size: 14px; vertical-align: middle; display: inline-block;">已经触底啦！</text>
		</view>
	</div>
</template>
<script>
	import Loop from "@/components/Loop";
	import ClassList from "@/components/ClassList";
	import { mapState, mapMutations } from 'vuex';
	export default {
		components: {
			Loop,
			ClassList
		},
		data() {
			return {
				navList:[
					{ src: require('@/static/tab1/hot1.png'), name: "视觉设计", id: 27 },
					{ src: require('@/static/tab1/hot2.png'), name: "视觉设计", id: 27 },
					{ src: require('@/static/tab1/hot3.png'), name: "视觉设计", id: 27 },
					{ src: require('@/static/tab1/hot4.png'), name: "视觉设计", id: 27 },
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				dataBase:{},
				loadingState:true
			}
		},
		created(){
			let params={}
			this.$api.classData({params: params }).then(res => {
				console.log(res)
				this.dataBase=res.data
			})

		},
		methods:{
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
		}				
	}
</script>
<style>
	/* @import '../../../common/uni-nvue.css'; */
</style>

<style>
	page {
		background: #F4F4F4 !important;
	}
	.swiper-item{
		height:200px;
	}
</style>
