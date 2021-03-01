<template>
  <div class="title-bar">
    <div class="title-bar-text">
      <img alt="" :src="window.image" />{{ window.title }}
    </div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" @click="closeWindow()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowTitleBar",
  props: {
    window: Object
  },
  methods: {
    closeWindow() {
      this.$store.dispatch("setWindowActive", {
        id: this.window.id,
        active: false
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
