<template>
        <div>
            <div class="header_top">
                <div class="header_logo"><img src="../../images/LOGO.png"></div>
            </div>
            <div class="main">
                <div class="login_model">
                    <div class="table_title">
                        <a v-for="(item,index) in items" class="detail_top" :class="{active:index==currentIndex}" @click="itemClick(index)">{{item.name}}</a>
                    </div>
                    <div class="">
                        <div class="input_item" style="margin-top:50px;">
                            <i class="iconfont icon-mima" style="float: left;font-size: 25px;"></i>
                            <input style="float: left;margin-top: 8px;"  v-model="message1" placeholder="请输入用户名或手机号">
                        </div>
                        <div class="input_item" style="margin-top:30px;">
                            <i class="iconfont icon-mima" style="float: left;font-size: 25px;"></i>
                            <input style="float: left;margin-top: 8px;" v-model="message2" placeholder="请输入密码">
                        </div>
                        <div  class="input_item" style="margin-top:30px;border:none;margin-top: 10px;">
                            <el-checkbox v-model="checked">记住用户密码</el-checkbox>
                        </div>
                        <div class="input_item" style="margin-top:30px;background:#f3cb0a;border:none;color:#fff;text-align: center;" @click="toLogin">登陆</div>
                        <div class="input_item" style="margin-top:20px;border:none;margin-top: 10px;font-size:14px;color:#999;">
                            <a style="float: right;">忘记密码</a>
                            <a style="float: left;">注册新会员</a>
                        </div>
                    </div>
                </div> 
            </div>
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
                    items:[
                        {
                            name:'账号登陆',
                        },
                        {
                            name:'快捷登陆',
                        },
                    ],
                    currentIndex:0,
                    checked: true,
                    message1:"",  //账号
                    message2:""   //密码
                };
            },
            //定义这个sweiper对象
            computed: {
                
            },
            mounted() {
                console.log(this.items)
                var data = {
                  
                };
            },
            components: {
               
            },
            methods: {
                itemClick(index){
                    this.currentIndex=index
                },
                toLogin(){
                    
                    console.log(this.message1)
                    console.log(this.message2)

                }
            }
        };
    </script>
    <style>
        body{
            background: #ffffff;
        }
    </style>
    <style lang="scss" scoped>
        .header_top{
            height:140px;
            display: flex;
            align-items: center;
            .header_logo{
                height:70px;
                margin-left:380px;
                img{height:100%;}
            }
        }
        .main{
            height:600px;
            background: #fafafa;
            position: relative;
        }
        .login_model{
            position: absolute;
            right:420px;
            top:80px;
            width:400px;
            height:520px;
            background:#fff;
        }
        .table_title{
            display:flex;
            height:50px;
            line-height: 50px;
            font-size: 16px;
            text-align: center;
            a{flex:1; color: #999;}
        }
        .active{
            
            background: #f3cb0a;
            color: #fff !important;
            
        }

        .input_item{
            height:40px;
            line-height:40px;
            width: 300px;
            border:1px solid #bbb;
            margin:0 auto;
            input{
                font-size: 16px;
                color:#bbb;
            }
        }
      
    </style>