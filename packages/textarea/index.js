/*
 * @Description: 组件修改
 * @Author: laosu
 * @LastEditors: laosu
 * @Date: 2019-03-26 16:26:25
 * @LastEditTime: 2019-03-26 17:03:54
 */
import Textarea from './main.vue'

Textarea.install = function (Vue) {
  Vue.component(Textarea.name, Textarea)
}

export default Textarea
