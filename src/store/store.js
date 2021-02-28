import { createStore } from "vuex"

export const SET_WINDOWS_LOGGED_IN = 'SET_WINDOWS_LOGGED_IN'

export const store = createStore({
    state: {
        windowsLoggedIn: false
    },
    actions: {
        setWindowsLoggedIn({ commit }, payload) {
            commit(SET_WINDOWS_LOGGED_IN, payload)
        }
    },
    mutations: {
        [SET_WINDOWS_LOGGED_IN](state, payload) {
            state.windowsLoggedIn = payload
        },
    }
})