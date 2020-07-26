import Vue from 'vue'
import VueRouter from 'vue-router'
import Company from '../views/Company/Company.vue'
import Find from '../views/Find/Find.vue'
import My from '../views/My/My.vue'
import Question from '../views/Question/Question.vue'
//登陆组件
import login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login',
    }, {
        path: '/login',
        component: login,
    }, {
        path: '/Company',
        component: Company,
        meta: {
            //显示tabbar
            shwoTabbar: true
        }
    },
    {
        path: '/Question',
        component: Question,
        meta: {
            //显示tabbar
            shwoTabbar: true
        }
    },
    {
        path: '/Find',
        component: Find,
        meta: {
            //显示tabbar
            shwoTabbar: true
        }
    },
    {
        path: '/My',
        component: My,
        meta: {
            //显示tabbar
            shwoTabbar: true
        }
    },
]

const router = new VueRouter({
    routes
})

export default router