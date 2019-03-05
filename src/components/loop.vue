<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in lunBoArr">
					<img :src="item.wareCover" alt="">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev"></div><!--左箭头-->
    		<div class="swiper-button-next"></div><!--右箭头-->
		</div>
	</div>
</template>
<script>
	import Swiper from "swiper"; 
	export default {
		props:['lunBoArr'],
		data() {
			return {

			}
		},
		components: {

		},
		watch:{
			lunBoArr(val){
				console.log(val)
				
			}
		},
     
		computed: {
			
			
		},
		mounted(){
			setTimeout(function(){
				var mySwiper = new Swiper('.swiper-container',{
					direction: 'horizontal',
					pagination :{
						el: '.swiper-pagination',
						clickable :true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
          			loop:true,
					autoplay: {
						disableOnInteraction: false,
						waitForTransition: false,
					},
				})
			},1000)
		},

	}
</script>
<style lang="scss" scoped>
	.swiper-container{
		height:540px;
		.swiper-wrapper{
			height:100%;
			.swiper-slide{
				height:100%;
				img{
					width:100%;
					height:100%;
				}
			}
		}
	}
</style>