import Vue from "vue";
import Vuex from "vuex";
import locale from "./locale.js";

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        locale
    }
});
