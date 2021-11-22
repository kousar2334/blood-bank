import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/pages/Home.vue";
import Doctors from "./views/pages/Doctors.vue";
import BloodBank from "./views/pages/BloodBank.vue";
import BloodDonorForm from "./views/pages/BloodDonorForm.vue";
import DoctorAddForm from "./views/pages/DoctorAddForm.vue";
import Hospitals from "./views/pages/Hospitals.vue";
import AddHospital from "./views/pages/AddHospital.vue";
import AddAmbulance from "./views/pages/NewAmbulance.vue";
import Ambulance from "./views/pages/Ambulance.vue";
import AboutUs from "./views/pages/AboutUs.vue";
import FireStation from "./views/pages/FireStation.vue";
import Police from "./views/pages/Police.vue";
import Login from "./views/pages/Login.vue";
import Register from "./views/pages/Register.vue";
import Profile from "./views//pages/Profile.vue";

Vue.use(Router);
export default new Router({
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
            path: "/police-stattons",
            name: "Police",
            components: {
                header: AppHeader,
                default: Police,
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
