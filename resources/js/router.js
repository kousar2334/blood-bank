import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/pages/Home.vue";
import Doctors from "./views/pages/Doctors.vue";
import BloodBank from "./views/pages/BloodBank.vue";
import Login from "./views/pages/Login.vue";
import Register from "./views/pages/Register.vue";
import Profile from "./views//pages/Profile.vue";

Vue.use(Router);
export default new Router({
    linkExactActiveClass: "active",
    //mode: "history",
    routes: [
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
            path: "/doctors",
            name: "Doctors",
            components: {
                header: AppHeader,
                default: Doctors,
                footer: AppFooter
            }
        },
        {
            path: "/blood-bank",
            name: "BloodBank",
            components: {
                header: AppHeader,
                default: BloodBank,
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
