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
						<div style="font-size:20px;color: #333;">小迷糊水果超市</div>
					</div>
				</div>
			</div>
		</div>
		<div style="width:100%;background:#eee;">
			<div style="width:1200px;margin:0 auto;overflow: hidden;">
				<div style="float:left;height:;width:1020px;background:#fff;padding:10px 20px;">
					<div style="float:left;">
						<div class="pic-box">
							<pic-zoom :url='url' :scale="3" style="height:100%;"></pic-zoom>
						</div>
						<div class="pic-tab"  v-loading="loading">
							
							<div @click="clickLeft" style="display: flex;align-items: center;width:30px;float:left;"><i class="iconfont icon-fanhui" style="font-size:30px;"></i></div>
							<div style="overflow: hidden;width: 340px;height: 80px;position:relative;">
								<ul v-bind:style="{width: auto, position: position ,left:left+ 'px',top:top }">
									<li v-for="(item,index) in datalist.coverList" @mouseover="addClass(index)" v-bind:class="{act:index==current}"><img :src="item"></li>
								</ul>	
							</div>
							<div @click="clickRight" style="display: flex;align-items: center;width:30px;float:left;"><i class="iconfont icon-xiangyou" style="font-size:30px;"></i></div>
						</div>
					</div>
					<div style="width:560px;float:left;margin-left:20px;overflow:hidden;">
						<div style="height:73px;font-size:18px;color:#666;">{{datalist.warename}}</div>
						<div style="height:100px;background:#f9f9f9;justify-content: space-between;align-items: center;display: flex;">
							<div style="font-size:18px; color:#999;margin-left:10px;">
								<div style="margin-bottom:10px;"><span>价格：</span><span style="font-size:30px;color:#cc0000;">￥{{datalist.wareprice}}</span></div>
								<div style="display:flex;">
									<span>优惠券：</span>
									<span v-if="datalist.couponPrice!=null">
										<img src="../../images/youhui.png" width="30" height="30">
									</span>
									<span v-else>暂无</span>
								</div>	
							</div>
							<div class="goBuyBtn">立刻购买</div>
						</div>

						<div style="margin-top:16px;color:#666;display: flex;">
							邮费：<span style="color:#333;font-sizt:16px;">{{postMoney}}</span>
						</div>

						<div style="margin-top:16px;color:#666;display: flex;">
							<div style="width: 72px;">{{specJson.specName}}：</div>
							<div class="Specifications">
								<a v-for="(item,index) in specJson.specValue" @click="moveMe(index)" class="gui_ge" :class="{act_gui_ge:index==current2}">{{item.specName}}</a>
							</div>
						</div>
						<!-- 加数量购买 -->
						<div style="display:flex;align-items: center;">
							<div class="addNumBtn" >
								<div @click="addDown"><i class="iconfont icon-iconfontmove"></i></div>
								<div class="center">{{buyNum}}</div>
								<div @click="addUp"><i class="iconfont icon-iconfontadd"></i></div>
							</div>
							<div class="addCarBtn" @click="addCar">加入购物车</div>
						</div>
						<div style="display:flex;align-items: center;font-size:16px;color:#666;margin-top:28px;">
							<span style="margin-right:30px;">服务承诺</span> <span style="margin-right:24px;">坏果必赔</span> <span>正品保证</span>
						</div>
					</div>
				</div>
				<!-- 右侧推荐 -->
				<div style="width:170px;background:#fff;float:right;">
					<div style="margin:12px 0 20px 0;text-align:center;color:#333;">相似推荐</div>
					<div style="margin-top:12px;text-align:center;color:#333;">
						<li>
							<div><img src="../../images/index1.png" style="width:100px;height:80px;"></div>
							<div style="font-size:14px; color:#333;margin-bottom:5px;">云南大理寺苹果</div>
							<div style="font-size:18px; color:#cc0000;margin-bottom:10px;">￥29.90</div>
						</li>
						<li>
							<div><img src="../../images/index1.png" style="width:100px;height:80px;"></div>
							<div style="font-size:14px; color:#333;margin-bottom:5px;">云南大理寺苹果</div>
							<div style="font-size:18px; color:#cc0000;margin-bottom:10px;">￥29.90</div>
						</li>
					</div>
					
				</div>
			</div>
		</div>
		<div style="width:1200px;margin:0 auto;overflow: hidden;" v-html='datalist.warecontent'></div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from "../../components/header";
	import Search from "../../components/search";
	import daoHang from "../../components/daoHang";
	import Footer from "../../components/footer";
	import PicZoom from '../../components/PicZoom'
	import { Loading } from 'element-ui';
	import { getNowFormatDate } from "../../config/mUtils";
	export default {
		name: "App",
		data() {
			return {
				datalist:'',
				specJson:'',//规格
				postMoney:'',//邮费
				offsetCount:0,
				url:'',
			
	
				width:"auto",
				position:"absolute",
				left: 0,
				top: 0,
				current:0,
				current2:0,
				num:1,
				buyNum:1,//加减数量
			};
		},
		computed: {},
		mounted() {
			// Loading.service("options");
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
			daoHang,
			Footer,
			PicZoom
		},
		methods: {
			clickLeft(){
				if(this.num>1){
					this.num-=1
					this.left=this.left+this.num*80
				}
			},
			clickRight(e){
				let aa=this.datalist.coverList.length
				var bb=this.num*4
				if(Math.floor(aa/bb)>0){
					this.left=-this.num*80
					this.num++
				}	
			},
			
			addClass:function(index){
				this.url=this.datalist.coverList[index]
				this.current=index;
			},

			moveMe:function(index){
				this.current2=index;
			},
			clickMe:function(index){
				this.current2=index;
			},
			showPostMoney:function(){
				let a=this.datalist.freightTempletType;
				let b=this.datalist.freightTempletValue;
				console.log(a)
				console.log(b)
				if(a==0){
					this.postMoney="包邮"
				}
				if(a==1){
					this.postMoney=this.datalist.freightTempletValue
				}
				if(a==2){
					let JinEr=b.split(",")[0];
                    let yf=b.split(",")[1];
					this.postMoney="满"+JinEr+"包邮"
				}
			},
			
			addUp(){
				this.buyNum++
				console.log(this.buyNum)
			},
			addDown(){
				if(this.buyNum>1){
					this.buyNum--
					console.log(this.buyNum)
				}
			},
			addCar(){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '去结算',
					cancelButtonText: '取消',
					type: 'success'
				}).then(() => {
					setTimeout(()=>{
						this.$router.push({path: '/car'});
					},500);
				}).catch(() => {
					
				});
			}
				
		},	
	};
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
	}

	.crumbs_c a {
		color: #666666;
		font-size: 14px;
		font-family: "微软雅黑";
		text-decoration: none;
	}

	.crumbs_c .crumbs_r {
		display: flex;
		height: 40px;
		line-height: 40px;
	}
	.pic-box{
		width:400px;
		height:320px;
		border:1px solid #eee;
	}
	.pic-tab{
		margin-top:10px;
		width: 400px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		}
	.pic-tab li{
		float:left;
		width:80px;
		height:80px;
		margin-left:5px;
		img{
			width:100%;
			height:100%;
		}
	}
	.pic-tab li:first-child{
		margin-left:0;
	}
	.act{border:1px solid red;}
	.goBuyBtn{
		width:120px;
		height:40px;
		background:#cc0000;
		color:#fff;
		font-size:20px;
		text-align:center;
		line-height:40px;
		margin-right:20px;
	}
	// 商品规格
	.gui_ge{
		color: #666;
		width: 150px;
		height: 30px;
		border: 1px solid #d3d3d3;
		margin: 0 20px 20px 0;
		font-size: 16px;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.Specifications{
		a:hover{
			border: 1px solid #cc0000;
		}
	}
	.act_gui_ge{
		color: #333;
		width: 150px;
		height: 30px;
		border: 1px solid #cc0000;
		margin: 0 20px 20px 0;
		font-size: 16px;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.addCarBtn{
		width:150px;
		height:40px;
		background:#f3cb0a;
		color:#fff;
		font-size:20px
		;text-align:center;
		line-height:40px;
		cursor: pointer;
	}
	.addNumBtn{
		text-align: center;
		display: flex;
		border:1px solid #d3d3d3;
		width:118px;
		height: 30px;
		line-height: 30px;
		margin-left: 30px;
		margin-right: 50px;
		div{width:33.33%;}
		.center{
			border-right:1px solid #d3d3d3;
			border-left:1px solid #d3d3d3;
		}
	}
</style>