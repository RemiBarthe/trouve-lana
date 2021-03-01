import { mapState } from "vuex"

export default {
    props: {
        window: Object
    },
    computed: {
        ...mapState(["positionMax"]),
        isFocus() {
            return this.window.position === this.positionMax
        }
    },
    methods: {
        closeWindow() {
            this.$store.dispatch("setWindowActive", {
                id: this.window.id,
                active: false
            })
        }
    }
}