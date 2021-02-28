import { createStore } from "vuex"
import { Windows } from "../assets/js/windows.js"

export const SET_WINDOWS_LOGGED_IN = 'SET_WINDOWS_LOGGED_IN'
export const SET_WINDOW_ACTIVE = 'SET_WINDOW_ACTIVE'

export const store = createStore({
    state: {
        windowsLoggedIn: false,
        windows: Windows
    },
    actions: {
        setWindowsLoggedIn({ commit }, payload) {
            commit(SET_WINDOWS_LOGGED_IN, payload)
        },
        setWindowActive({ commit }, payload) {
            commit(SET_WINDOW_ACTIVE, payload)
        }
    },
    mutations: {
        [SET_WINDOWS_LOGGED_IN](state, payload) {
            state.windowsLoggedIn = payload
        },
        [SET_WINDOW_ACTIVE](state, payload) {
            state.windows[payload.id].active = payload.active
        }
    }
})