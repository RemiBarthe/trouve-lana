<template>
  <div
    class="window window-messenger"
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
  name: "WindowNotes",
  components: {
    WindowTitleBar
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-messenger {
  width: 600px;
  height: 500px;
  position: absolute;
  right: 200px;
  top: 200px;
  user-select: none;
}
</style>
