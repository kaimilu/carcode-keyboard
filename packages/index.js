/*
 * @Description: 实现组件的全局注册
 * @Author: laosu
 * @LastEditors: laosu
 * @Date: 2019-03-26 16:20:02
 * @LastEditTime: 2019-03-26 16:32:27
 */

import Textarea from './textarea/index';

// 以数组的结构保存组件，便于遍历
const components = [
  Textarea
]

const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出对象必须具备一个install方法
  install,
  // 组件列表
  ...components
}
