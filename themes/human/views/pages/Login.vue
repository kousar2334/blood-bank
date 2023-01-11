<template>
    <section class="section section-shaped section-lg my-0">
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <h5>Sign in with</h5>
                            </div>
                        </template>
                        <template>
                            <form role="form">
                                <div class="form-row mb-3">
                                    <div class="form-group mb-0 input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <slot name="addonLeft">
                                                    <i class="ni ni-hat-3"></i>
                                                </slot>
                                            </span>
                                        </div>
                                        <input type="text" v-model="phone" placeholder="Mobile" class="form-control">

                                    </div>
                                    <template v-if="errors.phone">
                                        <p class="font-size-13 mt-1 mb-0 text-danger"
                                            v-for="(error, index) in errors.phone" :key="index">
                                            {{ error }}
                                        </p>
                                    </template>
                                </div>

                                <div class="form-row mb-3">
                                    <div class="form-group mb-0 input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <slot name="addonLeft">
                                                    <i class="ni ni-lock-circle-open"></i>
                                                </slot>
                                            </span>
                                        </div>
                                        <input type="password" v-model="password" placeholder="Password"
                                            class="form-control">
                                    </div>
                                    <template v-if="errors.password">
                                        <p class="font-size-13 mt-1 mb-0 text-danger"
                                            v-for="(error, index) in errors.password" :key="index">
                                            {{ error }}
                                        </p>
                                    </template>
                                </div>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" v-on:click.prevent="volunteerLogin" class="my-4">Sign In
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Modal from "../../components/Modal.vue";
import axios from "axios";
export default {
    name: "Register",
    components: {
        Modal,
    },
    data() {
        return {
            notification_modal: false,
            notifination_header: "",
            notifination_message: "",
            phone: "",
            password: "",
            errors: []
        };
    },
    mounted() {

    },
    methods: {
        //Volunteer user
        volunteerLogin() {
            this.errors = [];
            axios
                .post("/api/volunteer-login", {
                    phone: this.phone,
                    password: this.password
                })
                .then((response) => {
                    if (response.data.success) {
                        this.$store.dispatch('login', response.data).then(() => {
                            return this.$router.push({ name: "VolunteerDashboard" });
                        })
                    } else {
                        this.notifination_header = "দুঃখিত";
                        this.notifination_message =
                            "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
                        this.notification_modal = true;
                    }

                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data;
                    } else {
                        this.notifination_header = "দুঃখিত";
                        this.notifination_message =
                            "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
                        this.notification_modal = true;
                    }
                });
        },
    },

    metaInfo: {
        title: "Login",
    },
};
</script>
