import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入仓库
import store from './store'
// 整合normalize.css
import 'normalize.css'
// 整合vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入字体图标
import './styles/iconfont.less'
// 导入flexible 动态设置rem大小
import 'amfe-flexible'
// 初始样式
import './styles/base.less'
// 导入全局组件
import globalComponents from './components'

// 注册vant
Vue.use(Vant)
    // 注册全局组件
Vue.use(globalComponents)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')