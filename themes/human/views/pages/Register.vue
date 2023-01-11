<template>
    <section class="section section-shaped section-lg my-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <h5>Volunteer Registration</h5>
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
                                        <input placeholder="Name" v-model="name" class="form-control">
                                    </div>
                                    <template v-if="errors.name">
                                        <p class="font-size-13 mt-1 mb-0 text-danger"
                                            v-for="(error, index) in errors.name" :key="index">
                                            {{ error }}
                                        </p>
                                    </template>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="form-group mb-0 input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <slot name="addonLeft">
                                                    <i class="ni ni-email-83"></i>
                                                </slot>
                                            </span>
                                        </div>
                                        <input type="email" v-model="email" placeholder="Email" class="form-control">
                                    </div>
                                    <template v-if="errors.email">
                                        <p class="font-size-13 mt-1 mb-0 text-danger"
                                            v-for="(error, index) in errors.email" :key="index">
                                            {{ error }}
                                        </p>
                                    </template>
                                </div>
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
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <button class="btn my-4 bangla-font btn-primary"
                                        v-on:click.prevent="userRegistration">Create account</button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <modal :show.sync="notification_modal" gradient="danger" modal-classes="modal-danger modal-dialog-top">
                    <div class="py-3 text-center">
                        <i class="ni ni-bell-55 ni-3x"></i>
                        <h1 class="mt-4 bangla-font">{{ notification_header }}</h1>
                        <p class="bangla-font">
                            {{ notification_message }}
                        </p>
                    </div>

                    <template slot="footer">
                        <base-button type="white" @click="notification_modal = false" class="bangla-font">কেটে দিন
                        </base-button>
                    </template>
                </modal>
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
            notification_header: "",
            notification_message: "",
            name: "",
            email: "",
            phone: "",
            password: "",
            errors: []
        };
    },
    mounted() {

    },
    methods: {
        //Volunteer user
        userRegistration() {
            this.errors = [];
            axios
                .post("/api/volunteer-registration", {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    password: this.password
                })
                .then((response) => {
                    if (response.data.success) {
                        this.notification_header = "ধন্যবাদ";
                        this.notification_message =
                            "আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
                    } else {
                        this.notification_header = "দুঃখিত";
                        this.notification_message =
                            "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
                    }
                    this.notification_modal = true;
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    } else {
                        this.notification_header = "দুঃখিত";
                        this.notification_message =
                            "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
                        this.notification_modal = true;
                    }
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
