import Vue from  'vue'
import Index from './index'

// 等同于原生小程序的Page调用， 挂载当前页面
const index = new Vue(Index)
index.$mount()
