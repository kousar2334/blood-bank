import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Doctors from "./views/pages/Doctors.vue";
import Home from "./views/pages/Home.vue";
import Login from "./views/pages/Login.vue";
import Register from "./views/pages/Register.vue";
import Profile from "./views//pages/Profile.vue";

Vue.use(Router);
export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/doctors",
            name: "Doctors",
            components: {
                header: AppHeader,
                default: Doctors,
                footer: AppFooter
            }
        },
        {
            path: "/",
            name: "components",
            components: {
                header: AppHeader,
                default: Home,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
