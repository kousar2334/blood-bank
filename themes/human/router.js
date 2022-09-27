import Vue from "vue";
import Router from "vue-router";
import { loadLanguageAsync } from "./i18n";
const AppHeader = () =>
    import(/* webpackChunkName: "AppHeader" */ "./layout/AppHeader");
const AppFooter = () =>
    import(/* webpackChunkName: "AppFooter" */ "./layout/AppFooter");
const Login = () =>
    import(/* webpackChunkName: "Login" */ "./views/pages/Login");
const Register = () =>
    import(/* webpackChunkName: "Register" */ "./views/pages/Register");
const Profile = () =>
    import(/* webpackChunkName: "Profile" */ "./views/pages/Profile");

Vue.use(Router);
const router = new Router({
    linkExactActiveClass: "active",
    mode: "history",
    routes: [
        {
            path: "/",
            component: () =>
                import(
                    /* webpackChunkName: "SiteLayout" */ "./layout/SiteLayout"
                ),
            children: [
                {
                    path: "",
                    name: "Home",
                    component: () =>
                        import(
                            /* webpackChunkName: "Home" */ "./views/pages/Home"
                        ),
                },
                {
                    path: "/doctors",
                    name: "Doctors",
                    component: () =>
                        import(
                            /* webpackChunkName: "Doctors" */ "./views/pages/Doctors"
                        ),
                },
                {
                    path: "/add-new-doctor",
                    name: "AddNewDoctor",
                    component: () =>
                        import(
                            /* webpackChunkName: "DoctorAddForm" */ "./views/pages/DoctorAddForm"
                        ),
                },
                {
                    path: "/blood-bank",
                    name: "BloodBank",
                    component: () =>
                        import(
                            /* webpackChunkName: "BloodBank" */ "./views/pages/BloodBank"
                        ),
                },
                {
                    path: "/blood-donor-registration",
                    name: "NewBloodDonor",
                    component: () =>
                        import(
                            /* webpackChunkName: "BloodDonorForm" */ "./views/pages/BloodDonorForm"
                        ),
                },
                {
                    path: "/hospitals-clinics",
                    name: "Hospitals",
                    component: () =>
                        import(
                            /* webpackChunkName: "Hospitals" */ "./views/pages/Hospitals"
                        ),
                },
                {
                    path: "/add-new-hospital-clinic",
                    name: "NewHospital",
                    component: () =>
                        import(
                            /* webpackChunkName: "AddHospital" */ "./views/pages/AddHospital"
                        ),
                },
                {
                    path: "/add-new-ambulance",
                    name: "NewAmbulance",
                    component: () =>
                        import(
                            /* webpackChunkName: "AddAmbulance" */ "./views/pages/NewAmbulance"
                        ),
                },
                {
                    path: "/all-ambulance",
                    name: "Ambulance",
                    component: () =>
                        import(
                            /* webpackChunkName: "Ambulance" */ "./views/pages/Ambulance"
                        ),
                },
                {
                    path: "/about-us",
                    name: "AboutUs",
                    component: () =>
                        import(
                            /* webpackChunkName: "AboutUs" */ "./views/pages/AboutUs"
                        ),
                },
                {
                    path: "/fire-stations",
                    name: "FireStation",
                    component: () =>
                        import(
                            /* webpackChunkName: "FireStation" */ "./views/pages/FireStation"
                        ),
                },
                {
                    path: "/police-stations",
                    name: "Police",
                    component: () =>
                        import(
                            /* webpackChunkName: "police" */ "./views/pages/Police"
                        ),
                },
                {
                    path: "/project-details/:id",
                    name: "ProjectDetails",
                    component: () =>
                        import(
                            /* webpackChunkName: "ProjectDetails" */ "./views/pages/projectDetails"
                        ),
                },
            ],
        },
        {
            path: "/volunteer",
            component: () =>
                import(/*webpackChunkName:"" */ "./layout/VolunteerLayout"),
            children: [
                {
                    path: "dashboard",
                    name: "VolunteerDashboard",
                    component: () =>
                        import(
                            /*webpackChunkName:"VolunteerDashboard" */ "./views/pages/volunteer/dashboard/Dashboard"
                        ),
                },
            ],
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter,
            },
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter,
            },
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter,
            },
        },
    ],
    scrollBehavior: (to) => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
});
router.beforeEach((to, from, next) => {
    const lang = localStorage.getItem("locale") || "en";
    loadLanguageAsync(lang).then(() => next());
});
export default router;
