<template>
  <div
    class="window window-documents"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <WindowTitleBar :window="window" />

    <div class="window-body">
      <Toolbar :items="toolbarItems" />

      <FunctionBar />
    </div>
  </div>
</template>

<script>
import windowMixin from "../../mixins/windowMixin";
import WindowTitleBar from "./WindowTitleBar";
import Toolbar from "./shared/Toolbar";
import FunctionBar from "./shared/FunctionBar";

export default {
  name: "WindowDocuments",
  data: () => ({
    toolbarItems: ["Fichier", "Edition", "Affichage", "Favoris", "Outils", "?"]
  }),
  components: {
    WindowTitleBar,
    Toolbar,
    FunctionBar
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-documents {
  width: 600px;
  height: 500px;
  position: absolute;
  left: 110px;
  top: 50px;
  user-select: none;

  .window-body {
    margin: 3px;
  }
}
</style>
