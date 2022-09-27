
export default {
    state: {
        token: localStorage.getItem("token") || "",
        isLogin:false,
        auth_user:localStorage.getItem("auth_user") || null,
    },
    mutations: {
         LOGIN_USER: (state, response) => {
            state.isLogin = true;
            state.token=response.access_token;
            state.auth_user = response.user;
            localStorage.setItem("token", response.access_token);
            localStorage.setItem("auth_user", response.user);
        },
    },
    actions: {
        login: ({ commit }, response) => {
         return commit("LOGIN_USER", response);
        },
    },
    getters: {}
};
