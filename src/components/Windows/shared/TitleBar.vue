<template>
  <div class="title-bar">
    <div class="title-bar-text">
      <img alt="" :src="window.image" />{{ window.title }}
    </div>

    <div class="title-bar-controls">
      <button aria-label="Minimize" @click.stop="minimizeWindow()"></button>

      <button
        aria-label="Unmaximize"
        @click="setFullScreen(false)"
        v-if="window.fullScreen"
      ></button>

      <button
        aria-label="Maximize"
        @click="setFullScreen(true)"
        v-else
      ></button>

      <button aria-label="Close" @click="closeWindow()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    window: Object
  },
  methods: {
    closeWindow() {
      this.$store.dispatch("setWindowActive", {
        id: this.window.id,
        active: false
      });
    },
    minimizeWindow() {
      this.$store.dispatch("setWindowPosition", {
        id: this.window.id,
        position: -1
      });
    },
    setFullScreen(value) {
      this.$store.dispatch("setFullScreen", {
        id: this.window.id,
        fullScreen: value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title-bar-text {
  display: flex;
  justify-content: center;
  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
}
</style>
