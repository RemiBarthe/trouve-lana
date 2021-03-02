<template>
  <div class="desktop-container">
    <IconsList />

    <WindowsTaskBar />

    <WindowDocuments
      v-if="windows[0].active"
      :window="windows[0]"
      @click="setWindowPosition(windows[0].id)"
    />

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

    <WindowMail
      v-if="windows[3].active"
      :window="windows[3]"
      @click="setWindowPosition(windows[3].id)"
    />

    <WindowWebcam
      v-if="windows[4].active"
      :window="windows[4]"
      @click="setWindowPosition(windows[4].id)"
    />

    <WindowDestination
      v-if="windows[5].active"
      :window="windows[5]"
      @click="setWindowPosition(windows[5].id)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconsList from "@/components/IconsList";
import WindowsTaskBar from "@/components/WindowsTaskBar";
import WindowDocuments from "@/components/windows/WindowDocuments";
import WindowNotes from "@/components/windows/WindowNotes";
import WindowMessenger from "@/components/windows/WindowMessenger";
import WindowMail from "@/components/windows/WindowMail";
import WindowWebcam from "@/components/windows/WindowWebcam";
import WindowDestination from "@/components/windows/WindowDestination";

export default {
  name: "Desktop",
  components: {
    IconsList,
    WindowsTaskBar,
    WindowDocuments,
    WindowNotes,
    WindowMessenger,
    WindowMail,
    WindowWebcam,
    WindowDestination
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

  .full-screen {
    top: 0;
    bottom: 30px;
    left: 0;
    right: 0;
    width: auto;
    height: auto;
  }

  .title-bar-controls button[aria-label="Unmaximize"] {
    background-image: url(../assets/img/picto-unmaximize.png);

    &:hover {
      background-image: url(../assets/img/picto-unmaximize-light.png);
    }

    &:active {
      background-image: url(../assets/img/picto-unmaximize-dark.png);
    }
  }
}
</style>
