<template>
  <div
    class="window window-documents"
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
  name: "WindowDocuments",
  components: {
    WindowTitleBar
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-documents {
  width: 600px;
  height: 500px;
  position: absolute;
  left: 110px;
  top: 50px;
  user-select: none;
}
</style>
