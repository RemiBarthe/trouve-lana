<template>
  <div class="footer__window cover">
    <img class="footer__icon" :src="item.image" :alt="item.title" />

    <div class="footer__text">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: "WindowsTaskBarItem",
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.footer__icon {
  height: 15px;
  width: 15px;
}
.footer__text {
  position: absolute;
  left: 27px;
  right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer__window.cover:hover {
  background-color: #53a3ff;
  box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.2),
    inset 1px 1px 1px rgba(255, 255, 255, 0.3);
}
.footer__window.cover:before {
  display: block;
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  width: 10px;
  height: 1px;
  border-bottom-right-radius: 50%;
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
}
.footer__window.cover:hover:active {
  background-color: #1e52b7;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
    inset 1px 0 1px rgba(0, 0, 0, 0.7);
}
</style>
