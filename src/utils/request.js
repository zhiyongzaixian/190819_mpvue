// 发送ajax请求
// 封装功能函数的核心思想： 1. 函数内部保留相同的代码，2. 将不同的数据提取成形参，由使用者传入实参
// : 'http://localhost:3000/searchBooks'

import config from './config'

export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (response) => {
        // console.log(response.data);
        resolve(response.data)
      },
      fail: (error) => {
        // console.log(error);
        reject(error)
      }
    })
  })
  // return response.data
}
