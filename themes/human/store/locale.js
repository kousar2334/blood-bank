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
        }
    },
    getters: {}
};
