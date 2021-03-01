import { createStore } from "vuex"
import { Windows } from "../assets/js/windows"

export const SET_WINDOWS_LOGGED_IN = 'SET_WINDOWS_LOGGED_IN'
export const SET_WINDOW_ACTIVE = 'SET_WINDOW_ACTIVE'
export const SET_WINDOW_POSITION = 'SET_WINDOW_POSITION'

export const store = createStore({
    state: {
        windowsLoggedIn: false,
        windows: Windows,
        positionMax: 0
    },
    actions: {
        setWindowsLoggedIn({ commit }, payload) {
            commit(SET_WINDOWS_LOGGED_IN, payload)
        },
        setWindowActive({ commit }, payload) {
            commit(SET_WINDOW_ACTIVE, payload)
        },
        setWindowPosition({ commit }, payload) {
            commit(SET_WINDOW_POSITION, payload)
        }
    },
    mutations: {
        [SET_WINDOWS_LOGGED_IN](state, payload) {
            state.windowsLoggedIn = payload
        },
        [SET_WINDOW_ACTIVE](state, payload) {
            state.windows[payload.id].active = payload.active
            state.windows[payload.id].position = ++state.positionMax
        },
        [SET_WINDOW_POSITION](state, payload) {
            state.windows[payload].position = ++state.positionMax
        }
    }
})