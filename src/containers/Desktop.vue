<template>
  <div class="desktop-container">
    <IconsList />
    <WindowsTaskBar />
  </div>
</template>

<script>
import IconsList from "../components/IconsList";
import WindowsTaskBar from "../components/WindowsTaskBar";

export default {
  name: "Desktop",
  components: {
    IconsList,
    WindowsTaskBar
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
