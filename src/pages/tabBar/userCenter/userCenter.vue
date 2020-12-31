<template>
    <view class="container">
        <view class="bg_img">
            <view style=" position: relative; display: flex; height:164px;justify-content: center; align-items: center;flex-direction: column;">
                <image src="" style="height:66px;width:66px;border-radius:66px;box-shadow:0px -3px 6px 0px rgba(139, 138, 138, 0.5);" />
                <view style="font-weight:600;font-size: 18px;color:#fff;margin-top:5px;">hello , world</view>
            </view>
        </view>
        <view style="background:rgba(255,255,255,1); border-radius:8px;display:flex;padding:12px 0;margin:15px;">
            <navigator hover-class="none" url="../gaga/index" style="height:46px;display:flex;flex:1; align-items: center;justify-content: center; border-right:1px solid #F1F1F1;flex-direction: column;">
                <text style="color:#303030;font-size:14px;">0</text>
                <text style="color:#8D8D8D;font-size:14px;">关注</text>
            </navigator>
            <navigator hover-class="none" url="../wallet/index" style="height:46px;display:flex;flex:1; align-items: center;justify-content: center;border-right:1px solid #F1F1F1;flex-direction: column; ">
                <text style="color:#303030;font-size:14px;">0</text>
                <text style="color:#8D8D8D;font-size:14px;">消息</text>
            </navigator>
            <navigator hover-class="none" url="../coupon/index" style="height:46px;display:flex;flex:1; align-items: center;justify-content: center;flex-direction: column; ">
                <text style="color:#303030;font-size:14px;">0</text>
                <text style="color:#8D8D8D;font-size:14px;">收藏</text>
            </navigator>
        </view>
        <view style="border-radius:8px;color:#303030;font-size: 14px;margin: 0 15px;overflow: hidden;margin-bottom:15px;">
            <navigator url="../user/index" v-for="(item,index) in dataList" :key="index" @click="tabClick(item)" style="height: 53px;padding: 0 10px;border-bottom: 1px solid #F1F1F1; display: flex; align-items: center;justify-content: space-between;background:rgba(255,255,255,1);">
                <view style="display: flex;align-items: center;">
                    <uni-icons type="email" size='20' color="#999999"></uni-icons>
                    <text style="margin-left:15px;">{{item.name}}</text>
                </view>
            <uni-icons :type="item.icon" color="#999999"></uni-icons>
            </navigator>
        </view>
    </view>
</template>
<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
            uniIcons
		},
		data() {
			return {
				dataList: [
                    {name:"我的课程",path:'Course',icon:'icon-wodekecheng'},
                    {name:"我的收藏",path:'Collection',icon:'icon-fav'},
                    {name:"我的订单",path:'Orders',icon:'icon-wodedingdan2'},
                    {name:"个人信息",path:'information',icon:'icon-gerenxinxi'},
                    {name:"收货地址",path:'AddressManagement',icon:'icon-dizhi'},
                    {name:"发票申请",path:'invoiceManagement',icon:'icon-fapiaoguanli'},
                    {name:"我的证书",path:'MyCertificate',icon:'icon-zhengshu'},
                    {name:"退出登录",path:'MyCertificate',icon:'icon-zhengshu'}

                ],
			}
		},
		methods:{
			
		}				
	}
</script>

<style>
	@import '@/common/uni-nvue.css';
    page {
        font-family: PingFangSC;
        padding-bottom: 10px;
    }
 /* .container {
     position: relative;
     overflow: hidden;
     white-space: nowrap;
 } */
 
 .bg_img {
    height: 220px;
    background: -webkit-linear-gradient(#23D3B5,#afdfd7);
    background: -o-linear-gradient(#23D3B5,#afdfd7);
    background: -moz-linear-gradient(#23D3B5,#afdfd7);
    background: -mos-linear-gradient(#23D3B5,#afdfd7);
    background: linear-gradient(#23D3B5,#afdfd7);
    /* background: url(http://image.kuaixueli.com/common/image/20201211/20201211bbc25e7647f7e8d122198d82.jpg); */
    background-size: 100% 100%;
    background-position: top right;
    background-repeat: no-repeat;
 }
 
 .y {
     display: inline-block;
     margin-top: 10rpx;
     position: relative;
     overflow: hidden;
     margin: 0 auto;
 }
 /*隐藏滚动条*/
 
 ::-webkit-scrollbar {
     width: 0;
     height: 0;
     color: transparent;
 }

 button {
  font-size: 14px;
  background-color: #fff;
  color:#303030;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 1;
}

input {
  outline: none;
  border: none;
  list-style: none;
}

button::after {
  border: none;
}
</style>
