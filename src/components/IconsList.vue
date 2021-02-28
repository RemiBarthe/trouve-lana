<template>
  <div class="icons-list">
    <IconItem
      v-for="icon in windows"
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
    ...mapState(["windows"])
  },
  methods: {
    setIconSelected(key) {
      if (this.windows[key].selected) {
        this.windows[key].selected = false;
      } else {
        for (const value of Object.entries(this.windows)) {
          this.windows[value[0]].selected = false;
        }

        this.windows[key].selected = true;
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
