<template>
  <div
    class="window window-webcam"
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
  name: "WindowWebcam",
  components: {
    TitleBar
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-webcam {
  width: 600px;
  height: 500px;
  position: absolute;
  right: 20px;
  top: 20px;
  user-select: none;
}
</style>
