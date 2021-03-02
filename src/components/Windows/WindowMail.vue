<template>
  <div
    class="window window-mail"
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
  name: "WindowMail",
  components: {
    TitleBar
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-mail {
  width: 600px;
  height: 500px;
  position: absolute;
  right: 130px;
  bottom: 50px;
  user-select: none;
}
</style>
