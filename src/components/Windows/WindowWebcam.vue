<template>
  <div
    class="window window-webcam"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <img alt="Webcam image" src="@/assets/img/webcam.gif" />
    </div>
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

  .window-body {
    position: absolute;
    top: 28px;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 3px;
    margin-top: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
