import Vue from "vue"
import Router from "vue-router"

// 用户注册、登录
import authentication from "./router/authentication.js"



Vue.use(Router)

export default new Router({
    mode: "history",
    routes:[
        ...authentication,
        {
            path: "/",
            name: "Register",
            component: () => import('@/views/authentication/Register.vue')
        }

    ]

});