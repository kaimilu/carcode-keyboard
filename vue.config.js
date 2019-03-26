/*
 * @Description: 
 * @Author: laosu
 * @LastEditors: laosu
 * @Date: 2019-03-26 16:16:02
 * @LastEditTime: 2019-03-26 16:35:24
 */
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',      // page的入口
      template: 'public/index.html',  // 模板来源
      filename: 'index.html'          // 输出文件名
    }
  },
  productionSourceMap: false
}