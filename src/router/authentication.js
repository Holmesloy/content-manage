export default[
        {
            path: "/register",
            name: "Register",
            component: () => import("../views/authentication/Register.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/authentication/Login.vue")
        }
];