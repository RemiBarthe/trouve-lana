<template>
  <div class="icons-list">
    <IconItem
      v-for="icon in iconsOnDesktop"
      :key="icon.id"
      :icon="icon"
      @click="setIconSelected(icon.id)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconItem from "./IconItem";

export default {
  name: "IconsList",
  components: {
    IconItem
  },
  computed: {
    ...mapState(["windows"]),
    iconsOnDesktop() {
      return this.windows.filter(window => window.onDesktop);
    }
  },
  methods: {
    setIconSelected(id) {
      if (this.windows[id].selected) {
        this.windows[id].selected = false;
      } else {
        this.windows.forEach(icon => {
          icon.selected = false;
        });

        this.windows[id].selected = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icons-list {
  padding: 40px;
  display: flex;
  flex-flow: column wrap;
}
</style>
