import { store } from "./store.js";
import axios from "axios";
const CHANGE_LOCALE = "CHANGE_LOCALE";
const CHANGE_TRANSLATIONS = "CHANGE_TRANSLATIONS";

export default {
    state: {
        locale: localStorage.getItem("locale") || "en",
        translation: ""
    },
    mutations: {
        [CHANGE_LOCALE](state, language) {
            state.locale = language;
        },
        [CHANGE_TRANSLATIONS](state, data) {
            state.translation = data;
        }
    },
    actions: {
        changeLocale({ commit }, language) {
            return new Promise((resolve, reject) => {
                localStorage.setItem("locale", language);
                commit(CHANGE_LOCALE, language);
                resolve("Success");
            });
        },
        changeTranslations({ commit }, data) {
            return new Promise((resolve, reject) => {
                commit(CHANGE_TRANSLATIONS, data);
                resolve("Success");
            });
        }
    },
    getters: {
        setTranslation: async ({ state }) => {
            let lang = "bd";
            return fetch(`/api/locale/${lang}`)
                .then(response => response.json())
                .then(msgs => {
                    console.log("message");

                    const data = {
                        bd: msgs
                    };
                    console.log(data);
                    let bb = {
                        bd: {
                            action: "হ্যালো"
                        },
                        en: {
                            action: "Hello data"
                        }
                    };

                    store.dispatch("changeTranslations", bb);
                });
        },
        getTranslation: state => {
            return state.translation;
        }
    }
};
