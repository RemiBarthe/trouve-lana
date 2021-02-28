<template>
  <div class="icons-list">
    <IconItem />
    <IconItem />
  </div>
</template>

<script>
import IconItem from "./IconItem";

export default {
  name: "IconsList",
  components: {
    IconItem
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
