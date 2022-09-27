<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <slot name="addonLeft">
                                                <i class="ni ni-hat-3"></i>
                                            </slot>
                                        </span>
                                    </div>
                                    <input type="text" v-model="phone" placeholder="Mobile" class="form-control">
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
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
            axios
                .post("/api/volunteer-login", {
                    phone: this.phone,
                    password: this.password
                })
                .then((response) => {
                    console.log(response);
                    // if (response.data.success) {
                    //     this.notifination_header = "ধন্যবাদ";
                    //     this.notifination_message =
                    //         "আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
                    // } else {
                    //     this.notifination_header = "দুঃখিত";
                    //     this.notifination_message =
                    //         "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
                    // }
                    // this.notification_modal = true;
                })
                .catch((error) => {
                    // if (error.response.status === 422) {
                    //     this.errors = error.response.data.errors;
                    // } else {
                    //     this.notifination_header = "দুঃখিত";
                    //     this.notifination_message =
                    //         "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
                    //     this.notification_modal = true;
                    // }
                });
        },
    },

    metaInfo: {
        title: "Registration",
    },
};
</script>
<style>

</style>
