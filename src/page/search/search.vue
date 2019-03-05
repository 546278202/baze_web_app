<template>
    <div>
        <Header></Header>
        <Search></Search>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from "../../components/header";
    import Search from "../../components/search";
    import daoHang from "../../components/daoHang";
    import Footer from "../../components/footer";
    import Loop from "../../components/loop";
    import { getNowFormatDate } from "../../config/mUtils";
    export default {
        data() {
            return {
                typeData: [], //分类数据
                lunBoArr: [], //轮播数据

            };
        },
        //定义这个sweiper对象
        computed: {

        },
        mounted() {

            var data = {
                time: getNowFormatDate(),
                pageNum: "1",
                pageSize: "10"
            };
            this.$http
                .post(process.env.API_HOST + "/mall_api/shop/get_ware_list", data)
                .then(response => {
                    var data = response.data;
                    console.log(data);
                    if (data.code == 0 && data.success == true) {
                        this.lunBoArr = data.data.wareList;


                    }
                })
                .catch(error => {
                    console.log(error);
                });

            this.$http.post(process.env.API_HOST + "/mall_api/classify/getClassifyList", "")
                .then(response => {
                    var data = response.data;
                    if (data.code == 0) {
                        this.typeData = data.data;
                    }
                    console.log(this.typeData);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        components: {
            Header,
            Search,
            daoHang,
            Footer,
            Loop,
        },
        methods: {}
    };
</script>
<style lang="scss" scoped>
    .swiper-container {
        width: 690px;
        height: 390px;
    }

    .bodyRightTopLoginText {
        text-align: center;
        color: #999;
        font-size: 16px;
    }

    .bodyRightTopLoginText a {
        color: #999;
        font-family: "微软雅黑";
    }

    .my-bullet {
        border-radius: 0.02rem;
        width: 0.04rem;
        height: 0.04rem;
        margin: 0 0.03rem;
        display: inline-block;
        background: rgba(0, 0, 0, 0.2);
    }

    .my-bullet-active {
        background: #3cdbc0;
        width: 0.16rem;
    }

    /* 热门推荐 */
    .hotList {
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
    }

    .hotList img {
        width: 100%;
        height: 100%;
    }

    .hotListTitle {
        position: relative;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #000;
        background: #fff;
        margin-bottom: 10px;
        font-size: 24px;
    }

    .hotItems {
        overflow: hidden;
    }

    .hotItem {
        float: left;
        width: 236px;
        height: 280px;
        overflow: hidden;
        background: #fff;
        margin-right: 5px;
    }

    .hotItem_name {
        font-size: 16px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 16px;
        color: rgb(51, 51, 51);
        padding: 0 10px;
        margin: 8px 0;
    }

    .hotItem_price {
        font-size: 20px;
        color: #cc0000;
        padding: 0 10px;
    }

    .wy_right {
        width: 290px;
        height: 540px;
        float: left;
        margin-top: 10px;
        background: url(../../images/login1.png) no-repeat;
    }

    .login {
        height: 150px;

        background: #fff url(../../images/bg1.png) no-repeat;
        background-position: left bottom;
    }

    .f3cb0a {
        color: #f3cb0a;
        margin-top: 10px;
    }

    .shouCang {
        font-size: 14px;
        color: #666;
        display: flex;
        padding: 0 44px;
        justify-content: space-between;
        text-align: center;
        margin-top: 14px;
    }
</style>