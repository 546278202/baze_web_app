import Vue from 'vue'
import App from './App'

import store from './store'
import './styles/common.css'


import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'




Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

App.mpType = 'app'
const app = new Vue({
	...App
})

app.$mount();

