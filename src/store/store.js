import { createStore } from "vuex"
import { Windows } from "@/assets/js/windows"
import { Conversations } from "@/assets/js/conversations"
import { Photos } from "@/assets/js/photos"

export const SET_WINDOWS_LOGGED_IN = 'SET_WINDOWS_LOGGED_IN'
export const SET_WINDOW_ACTIVE = 'SET_WINDOW_ACTIVE'
export const SET_WINDOW_POSITION = 'SET_WINDOW_POSITION'
export const SET_FULL_SCEEN = 'SET_FULL_SCEEN'
export const SET_CONVERSATION_PASSWORD = 'SET_CONVERSATION_PASSWORD'
export const SET_MESSENGER_PASSWORD = 'SET_MESSENGER_PASSWORD'

export const store = createStore({
    state: {
        windowsLoggedIn: false,
        windows: Windows,
        conversations: Conversations,
        photos: Photos,
        messengerPassword: "filou88",
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
        },
        setFullScreen({ commit }, payload) {
            commit(SET_FULL_SCEEN, payload)
        },
        setConversationPassword({ commit }, payload) {
            commit(SET_CONVERSATION_PASSWORD, payload)
        },
        setMessengerPassword({ commit }, payload) {
            commit(SET_MESSENGER_PASSWORD, payload)
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
            payload.position ?
                state.windows[payload.id].position = payload.position
                : state.windows[payload.id].position = ++state.positionMax
        },
        [SET_FULL_SCEEN](state, payload) {
            state.windows[payload.id].fullScreen = payload.fullScreen
        },
        [SET_CONVERSATION_PASSWORD](state, payload) {
            state.conversations[payload.id].password = payload.password
        },
        [SET_MESSENGER_PASSWORD](state, payload) {
            state.messengerPassword = payload
        }
    }
})