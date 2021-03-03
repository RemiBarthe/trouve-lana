<template>
  <div
    class="window window-photo"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <p>{{ activePhoto.name }}</p>
      <img :alt="activePhoto.name" :src="activePhoto.path" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";

export default {
  name: "WindowPhoto",
  components: {
    TitleBar
  },
  computed: {
    ...mapState(["activePhoto"])
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-photo {
  width: 600px;
  height: 500px;
  position: absolute;
  left: 600px;
  top: 30px;
  user-select: none;

  .window-body {
    position: absolute;
    top: 28px;
    bottom: 0px;
    left: 0;
    right: 0;

    p {
      text-align: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
