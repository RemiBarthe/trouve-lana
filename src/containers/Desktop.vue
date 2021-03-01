<template>
  <div class="desktop-container">
    <IconsList />

    <WindowsTaskBar />

    <WindowNotes
      v-if="windows[1].active"
      :window="windows[1]"
      @click="setWindowPosition(windows[1].id)"
    />

    <WindowMessenger
      v-if="windows[2].active"
      :window="windows[2]"
      @click="setWindowPosition(windows[2].id)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconsList from "../components/IconsList";
import WindowsTaskBar from "../components/WindowsTaskBar";
import WindowNotes from "../components/Windows/WindowNotes";
import WindowMessenger from "../components/Windows/WindowMessenger";

export default {
  name: "Desktop",
  components: {
    IconsList,
    WindowsTaskBar,
    WindowNotes,
    WindowMessenger
  },
  computed: {
    ...mapState(["windows"])
  },
  methods: {
    setWindowPosition(id) {
      this.$store.dispatch("setWindowPosition", id);
    }
  }
};
</script>

<style lang="scss">
.desktop-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/img/wallpaper-windows.jpg) center center / cover
    no-repeat fixed;

  .not-focus {
    box-shadow: inset -1px -1px #6582f5, inset 1px 1px #6582f5,
      inset -2px -2px #6582f5, inset 2px 2px #6582f5, inset -3px -3px #6582f5,
      inset 3px 3px #6582f5;

    .title-bar {
      background: #6582f5;
      border-color: #4e6ada;
    }
  }
}
</style>
