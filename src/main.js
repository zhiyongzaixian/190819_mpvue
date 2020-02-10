// 项目的入口文件

import Vue from 'vue'
import App from './App.vue'

// 关闭开发环境的小提示
Vue.config.productionTip = false

// 声明当前App组件代表整个小程序应用
App.mpType = 'app'


// 生成小程序实例
const app = new Vue(App)
// 挂载实例
app.$mount()
