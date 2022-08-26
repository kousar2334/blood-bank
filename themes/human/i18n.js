import { store } from "./store/store.js";
import vue from "vue";

import vueI18n from "vue-i18n";
const messages1 = store.getters.setTranslation;
const messages = store.getters.getTranslation;
const locale = localStorage.getItem("locale") || "en";

vue.use(vueI18n);

export default new vueI18n({
    locale: locale,
    fallbackLocale: "en",
    messages
});
