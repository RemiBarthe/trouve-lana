<template>
  <div class="window window-messenger" style="width: 600px">
    <div class="title-bar">
      <div class="title-bar-text">{{ window.title }}</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" @click="closeWindow()"></button>
      </div>
    </div>
    <div class="window-body"></div>
  </div>
</template>

<script>
export default {
  name: "WindowNotes",
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
.window-messenger {
  height: 500px;
  position: absolute;
  right: 200px;
  top: 200px;
  user-select: none;
}
</style>
