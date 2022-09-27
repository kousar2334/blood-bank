<template>
    <div class="site-contailer">
        <app-header></app-header>
        <div class="container">
            <router-view :key="$route.fullPath" />
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

export default {
    name: "VolunteerLayout",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            // isMenuActive: false,
            // isMobileMenuOpened: false,
            // isAuthenticationChecked: false,
            // system_logo: "",
            // NavMenuItems,
        };
    },
    methods: {
        toggleMenu() {
            this.isMobileMenuOpened = !this.isMobileMenuOpened;
            document.body.classList.toggle("sidebar-enable");
        },
        checkAuthenticationAndPermissions() {
            store.dispatch("isAuthentic").then(() => {
                // if(store.getters.isLoggedIn){
                store.dispatch("userPermissions").then(() => {
                    if (!store.getters.isPermitted(this.$router.currentRoute.meta.module_permission_id)) {
                        this.$store.dispatch("logout").then(() => {
                            return this.$router.push({ name: "login" });
                        });
                    } else {
                        this.isAuthenticationChecked = true;
                    }
                });
                // }
                // else{
                //     return this.$router.push({ name: "login" });
                // }
            });
        },
        getSystemLogo() {
            this.loading = true;
            axios.post("/api/get-system-logo")
                .then((response) => {
                    this.loading = false;
                    let status = response.data.success;
                    if (status) {
                        this.system_logo = response.data.system.image;
                    } else {
                        this.flash("Something went wrong", "error");
                    }
                })
                .catch((response) => {
                    this.loading = false;
                    this.flash("Unable to fetch system logo", "error");
                });
        }
    },
    mounted() {
        // this.checkAuthenticationAndPermissions();
        // this.getSystemLogo();
        // setInterval(this.checkAuthenticationAndPermissions, 1000 * 60 * 40);
    },
};
</script>
