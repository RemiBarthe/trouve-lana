<template>
  <div
    class="window window-destination"
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
  name: "WindowDestination",
  components: {
    WindowTitleBar
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
