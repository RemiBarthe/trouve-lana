<template>
  <section class="toolbar">
    <div v-for="(item, index) in items" :key="index">{{ item }}</div>
  </section>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    items: Array
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  margin-bottom: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #ece9d8;

  div {
    padding: 4px 7px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #0e48a1;
      color: white;
    }
  }
}
</style>
