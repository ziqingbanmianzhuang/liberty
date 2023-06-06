import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import showHome from '../components/showHome.vue'
import Equal from '../components/Equal.vue'
import partTime from '../components/partTime.vue'
import Resign from '../components/Resign.vue'
import register from "../components/register.vue"
import login from "../components/login";
// import post from "./Views/post";
import searchEqual from '../components/searchEqual.vue'
import searchPartTime from '../components/searchPartTime.vue'
import searchResign from '../components/searchResign.vue'
import searchUrgency from '../components/searchUrgency.vue'
import Urgency from '../components/Urgency.vue'
import userHome from '../components/userHome.vue'
import userInfo from '../components/userInfo.vue'
import viewsHistory from '../components/viewsHistory.vue'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/showhome',

    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            requireLogin:
                // true
                false
        }
    },
    {
        path: '/urgency',
        name: 'urgency',
        component: Urgency
    },
    {
        path: '/showhome',
        name: 'showhome',
        component: showHome
    },
    {
        path: '/equal',
        name: 'equal',
        component: Equal
    },
    {
        path: '/parttime',
        name: 'parttime',
        component: partTime
    },
    {
        path: '/resign',
        name: 'resign',
        component: Resign
    },
    {
        path: '/login',
        name: 'login',
        component: login,

    },
    {
        path: '/userinfo',
        name: 'userinfo',
        component: userInfo
    }
    ,
    {
        path: '/viewshistory',
        name: 'viewshistory',
        component: viewsHistory
    }, {
        path: '/userhome',
        name: 'userhome',
        component: userHome
    },
    {
        path: '/searchequal',
        name: 'searchequal',
        component: searchEqual
    },
    {
        path: '/searchresign',
        name: 'searchresign',
        component: searchResign
    },
    {
        path: '/searchurgency',
        name: 'searchurgency',
        component: searchUrgency
    },
    {
        path: '/searchparttime',
        name: 'searchparttime',
        component: searchPartTime
    },
    {
        path: "/register",
        name: "register",
        component: register
    }





]

const router = new VueRouter({
    routes,
    mode: 'history',

})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {
        if (sessionStorage.getItem('user')) {
            next();
        }
        else {
            next({
                path: '/login'
            })
        }

    }
    else {
        next()
    }

})
export default router