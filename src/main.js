import Vue from 'vue'
import App from './App.vue'
// 导入 router
import router from './router'
// 导入 store
import store from './store'
// 导入 normalize.css
import 'normalize.css'
// 整合vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入flexible 动态设置rem大小
import 'amfe-flexible'
// 注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载 router
  router,
  // 挂载 store
  store
}).$mount('#app')
