import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import vSelect from "vue-select";
import VueMeta from "vue-meta";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
