import Vue from 'vue'
import App from './App.vue'
// 导入 vant 组件库
import Vant from 'vant'
// vant组件库对应的样式文件
import 'vant/lib/index.css'
// 导入 淘宝的 flexible
import 'amfe-flexible'
// 导入 router
import router from './router'
// 导入 store
import store from './store'
// 导入 normalize.css
import 'normalize.css'

import normalize from 'normalize'
// 注册组件库
Vue.use(Vant)
Vue.use(normalize)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载 router
  router,
  // 挂载 store
  store

}).$mount('#app')
