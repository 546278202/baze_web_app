<template>
    <!-- 课程分类 -->
    <div class="class-list" id="class-list" :style="currentStyle" :productType="productType">
        <div class="item">
            <div class="top">
                <div class="title">{{title}}</div>
                <div style="color:#999999;" @click="moreHandle(item)">更多 >></div>
            </div>
            <ol >
                <li v-for="(item,index) in dataList" :key="index" @click="tabClick(item)">
                    <div class="video-top">
                        <image :src="$url.imgUrl+item.sCourseImg"  mode="aspectFill" > </image>    
                        <div class="video-num"> <i class="iconfont icon-bofang"></i>101.1万</div> 
                    </div>
                    <div class="video-bottom">
                        <div class="describe"> {{item.sCourseName}} </div>
                        <div class="describe-data">
                            <div class="left" v-if="item.author">讲师:{{item.author}}</div>
                            <div class="left" v-else><span >{{item.sArrangement | schoolFilter}}</span></div>
                            <div class="right">已报名 <span >{{item.sells | sellsFilter}}</span> 人</div>
                        </div>
                    </div>
                </li>
            </ol> 
        </div>
    </div>   
</template>
<script>
export default {
    props:{

        productType:{
            type:String
        },
        currentStyle:{
            type:Object
        },
        title:{
            type: String
        },
        navList:{
            type: Array
        },
        dataList:{
            type: Array
        } 
    },
    components: {
    
    },
    data() {
        return {
            $url:this.$url,
            //dataList:[]
        };
    },
    filters: {
        sellsFilter(value) {
            if(!value) {
                return '0';
            } else {
                return value
            }
        },
        schoolFilter(list){
            let arr=[]
            let str
            list.forEach(element => {
                if(element=='1') {
                    str= '高起专'
                }else if(element=='2'){
                    str="高起本"
                }else if(element=='3'){
                    str="专升本"
                }
                arr.push(str)
            });
            return arr.toString()
        }
    },
    beforeMount() {
        
    },
    mounted() {
        console.log(this)

        console.log(this.$url)
            
    },
  methods: {
   

   
    tabClick(item) {
        // console.log(item);
        // 录播
        if(this.productType=='1'){
            this.$router.push({ path: `/videoDetail?id=${item.id}`});
        }
        // 录播
        if(this.productType=='2'){
            this.$router.push({ path: `/LiveDetail?id=${item.id}`});
        }
        if(this.productType=='3'){
            this.$router.push({ path: `/EducationPromotion?id=${item.id}`});
        }
        if(this.productType=='4'){
            this.$router.push({ path: `/EducationPromotion?id=${item.id}`});
        }

    },
    moreHandle(item) {
        // console.log(item);
        // 录播
        if(this.productType=='1'){
            this.$router.push({ path: `/productList`});
        }
        // 录播
        if(this.productType=='2'){
            this.$router.push({ path: `/LiveList`});
        }
        //合作院校
        if(this.productType=='3'){
            this.$router.push({ path: `/EducationPromotion`});
        }
        if(this.productType=='4'){
            this.$router.push({ path: `/EducationPromotion`});
        }

    }

    
   

  }
};
</script>
<style lang="less" scoped>
.router-link-active {
    text-decoration: none;
}
   /* 课程分类 */
.class-list{
    // background:#F4F4F4;
    // height:940px;
    // max-width:1920px;
    
    color:#fff;
    font-size:14px;
    box-sizing: border-box;
    margin-top:15px;
}
.item{
    color: #000;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    background: #fff;
    padding:0 10px;
    // border:1px solid #ebeef5;
    // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;

}

.item .top {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item .top .title{
    font-size:20px;
}
.item ul{
   flex-flow: row wrap;
    overflow: hidden;
    margin-top:15px;
    position: relative;
}
.item ul li{
    padding-left:38px;
}
.item ul li:hover{
   color: #22D3B6;
   cursor: pointer;
}
ol{
    list-style: none;
    overflow: hidden;
}
ol::after{
    width: 40px;
    background: orangered;
    
}
ol li{
    font-size: 14px;
    overflow: hidden;
    cursor: pointer;
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    margin-bottom:10px ;
}
ol li:nth-child(odd) {
    padding-right:5px;
}
ol li:nth-child(even) {
    padding-left:5px;

}
ol li img{
    cursor: pointer;
    height:112px;
}
.img-default{
    width:100%;
    height:112px;
}
uni-image{
    width:100%;
    height:112px;
    border-radius: 4px;

}

ol li .video-top{
    background:#e6e6e6;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    image{
        height:112px;
    }
}
ol li .video-top .video-num {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 14px;
    color:#fff;
}
ol li .video-top .iconfont {
    font-size: 18px !important;
    margin-right:8px;
}
ol li .video-bottom{
    padding:10px 0;
    overflow:hidden;
}
ol li .video-bottom .describe{
    font-size: 16px;
    font-weight: 400;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
ol li .video-bottom .describe:hover{
   color:#22D3B5;
}
ol li .video-bottom .describe-data{
    margin-top:5px;
    overflow:hidden;  
    display: flex;
    font-size:12px;
    justify-content: space-between;
    align-items: center;
    color: #999999;
}
ol li .video-bottom .describe-data .left{
    // float:left;
    // color:#22D3B5;
}
ol li .video-bottom .describe-data .right span:first-child{
    color: #22D3B5;
    // font-size: 16px;
}



ol .no-data img{
    display: block;
    width: 100%;
    opacity: .8;
}

.video-top {
    .el-image{
        overflow: visible;
    }
}
</style>






