import { mapState } from "vuex"

export default {
    props: {
        window: Object
    },
    computed: {
        ...mapState(["positionMax"]),
        isFocus() {
            return this.window.position === this.positionMax
        },
        isFullScreen() {
            return this.window.fullScreen
        }
    },
}