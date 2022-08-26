import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import vSelect from "vue-select";
import VueMeta from "vue-meta";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { store } from "./store/store.js";
import i18n from "./i18n";
import axios from "axios";

const lang = localStorage.getItem("locale") || "en";

axios.defaults.headers["Accept-Language"] = lang;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);
Vue.use(store);
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;
Vue.use(Argon);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
