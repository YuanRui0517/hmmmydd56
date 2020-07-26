import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import Company from '../views/Company/Company.vue'
import Find from '../views/Find/Find.vue'
import My from '../views/My/My.vue'
import Question from '../views/Question/Question.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
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
    }, {
        path: '/login',
        component: login,
    },
]

const router = new VueRouter({
    routes
})

export default router