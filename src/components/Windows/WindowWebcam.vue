<template>
  <div
    class="window window-webcam"
    :class="{ 'not-focus': !isFocus }"
    :style="`z-index: ${window.position}`"
  >
    <WindowTitleBar :window="window" />

    <div class="window-body"></div>
  </div>
</template>

<script>
import windowMixin from "../../mixins/windowMixin";
import WindowTitleBar from "./WindowTitleBar";

export default {
  name: "WindowWebcam",
  components: {
    WindowTitleBar
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
