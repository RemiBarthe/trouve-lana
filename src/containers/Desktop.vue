<template>
  <div class="desktop-container">
    <IconsList />

    <WindowsTaskBar />

    <WindowNotes v-if="windows[1].active" :window="windows[1]" />

    <WindowMessenger v-if="windows[2].active" :window="windows[2]" />
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
  }
};
</script>

<style lang="scss" scoped>
.desktop-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/img/wallpaper-windows.jpg) center center / cover
    no-repeat fixed;
}
</style>
