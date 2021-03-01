<template>
  <div
    class="window window-mail"
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
  name: "WindowMail",
  components: {
    WindowTitleBar
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
