<template>
  <div class="desktop-container">
    <IconsList />

    <WindowsTaskBar />

    <WindowNotes v-if="windows[1].active" :window="windows[1]" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconsList from "../components/IconsList";
import WindowsTaskBar from "../components/WindowsTaskBar";
import WindowNotes from "../components/WindowNotes";

export default {
  name: "Desktop",
  components: {
    IconsList,
    WindowsTaskBar,
    WindowNotes
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
