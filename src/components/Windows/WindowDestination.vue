<template>
  <div
    class="window window-destination"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body"></div>
  </div>
</template>

<script>
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";

export default {
  name: "WindowDestination",
  components: {
    TitleBar
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-destination {
  width: 600px;
  height: 500px;
  position: absolute;
  left: 450px;
  top: 250px;
  user-select: none;
}
</style>
