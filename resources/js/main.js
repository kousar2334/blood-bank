import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import vSelect from "vue-select";
//import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
