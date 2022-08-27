import Vue from "vue";
import Router from "vue-router";
import { loadLanguageAsync } from "./i18n";
const AppHeader = () =>
    import(/* webpackChunkName: "AppHeader" */ "./layout/AppHeader");
const AppFooter = () =>
    import(/* webpackChunkName: "AppFooter" */ "./layout/AppFooter");
const DoctorAddForm = () =>
    import(
        /* webpackChunkName: "DoctorAddForm" */ "./views/pages/DoctorAddForm"
    );
const BloodDonorForm = () =>
    import(
        /* webpackChunkName: "BloodDonorForm" */ "./views/pages/BloodDonorForm"
    );
const BloodBank = () =>
    import(/* webpackChunkName: "BloodBank" */ "./views/pages/BloodBank");
const Doctors = () =>
    import(/* webpackChunkName: "Doctors" */ "./views/pages/Doctors");
const Home = () => import(/* webpackChunkName: "Home" */ "./views/pages/Home");
const Hospitals = () =>
    import(/* webpackChunkName: "Hospitals" */ "./views/pages/Hospitals");
const AddHospital = () =>
    import(/* webpackChunkName: "AddHospital" */ "./views/pages/AddHospital");
const AddAmbulance = () =>
    import(/* webpackChunkName: "AddAmbulance" */ "./views/pages/NewAmbulance");
const Ambulance = () =>
    import(/* webpackChunkName: "Ambulance" */ "./views/pages/Ambulance");
const AboutUs = () =>
    import(/* webpackChunkName: "AboutUs" */ "./views/pages/AboutUs");
const FireStation = () =>
    import(/* webpackChunkName: "FireStation" */ "./views/pages/FireStation");
const Police = () =>
    import(/* webpackChunkName: "police" */ "./views/pages/Police");
const Login = () =>
    import(/* webpackChunkName: "Login" */ "./views/pages/Login");
const Register = () =>
    import(/* webpackChunkName: "Register" */ "./views/pages/Register");
const Profile = () =>
    import(/* webpackChunkName: "Profile" */ "./views/pages/Profile");
const ProjectDetails = () =>
    import(
        /* webpackChunkName: "ProjectDetails" */ "./views/pages/projectDetails"
    );
Vue.use(Router);
const router = new Router({
    linkExactActiveClass: "active",
    mode: "history",
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
            path: "/add-new-doctor",
            name: "AddNewDoctor",
            components: {
                header: AppHeader,
                default: DoctorAddForm,
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
            path: "/blood-donor-registration",
            name: "NewBloodDonor",
            components: {
                header: AppHeader,
                default: BloodDonorForm,
                footer: AppFooter
            }
        },
        {
            path: "/hospitals-clinics",
            name: "Hospitals",
            components: {
                header: AppHeader,
                default: Hospitals,
                footer: AppFooter
            }
        },
        {
            path: "/add-new-hospital-clinic",
            name: "NewHospital",
            components: {
                header: AppHeader,
                default: AddHospital,
                footer: AppFooter
            }
        },
        {
            path: "/add-new-ambulance",
            name: "NewAmbulance",
            components: {
                header: AppHeader,
                default: AddAmbulance,
                footer: AppFooter
            }
        },
        {
            path: "/all-ambulance",
            name: "Ambulance",
            components: {
                header: AppHeader,
                default: Ambulance,
                footer: AppFooter
            }
        },
        {
            path: "/about-us",
            name: "AboutUs",
            components: {
                header: AppHeader,
                default: AboutUs,
                footer: AppFooter
            }
        },
        {
            path: "/fire-stations",
            name: "FireStation",
            components: {
                header: AppHeader,
                default: FireStation,
                footer: AppFooter
            }
        },
        {
            path: "/police-stations",
            name: "Police",
            components: {
                header: AppHeader,
                default: Police,
                footer: AppFooter
            }
        },
        {
            path: "/project-details/:id",
            name: "ProjectDetails",
            components: {
                header: AppHeader,
                default: ProjectDetails,
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
router.beforeEach((to, from, next) => {
    const lang = localStorage.getItem("locale") || "en";
    loadLanguageAsync(lang).then(() => next());
});
export default router;
