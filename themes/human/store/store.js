import Vue from "vue";
import Vuex from "vuex";
import locale from "./locale.js";
import auth from "./auth.js"

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        locale,
        auth
    }
});
