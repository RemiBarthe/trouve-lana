<template>
  <div
    class="icon-item"
    :class="{ selected: icon.selected }"
    @dblclick="openWindow()"
  >
    <div class="container-image">
      <img :src="icon.image" :alt="icon.title" />
    </div>

    <p>{{ icon.title }}</p>
  </div>
</template>

<script>
export default {
  name: "IconItem",
  props: {
    icon: Object
  },
  methods: {
    openWindow() {
      this.$store.dispatch("setWindowActive", {
        id: this.icon.id,
        active: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-item {
  width: 70px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  &.selected p {
    background-color: #0e48a1;
  }

  &.selected .container-image {
    filter: drop-shadow(#0e48a1 0px 0px 1px);

    img {
      opacity: 0.7;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }

  p {
    width: 100%;
    font-size: 12px;
    color: white;
    text-shadow: 1px 1px 1px black;
    margin-top: 3px;
    text-align: center;
    padding: 0px 2px 2px;
  }
}
</style>
