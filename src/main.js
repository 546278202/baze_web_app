import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import './style/common.css' /*引入公共样式*/

import 'swiper/dist/css/swiper.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
import axios from 'axios'
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    if (config.method != 'get') {
        config.data = qs.stringify(config.data);
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    let token = window.sessionStorage.getItem("TOKEN");
    if (token) {
        config.headers.common['Authorization'] = "Bearer " + token;
    }
    return config;
}, function (error) {
    return Promise.reject(error)
})

Vue.prototype.$http = axios

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
