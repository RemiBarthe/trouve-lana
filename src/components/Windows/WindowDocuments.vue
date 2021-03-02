<template>
  <div
    class="window window-documents"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <Toolbar :items="toolbarItems" />

      <FunctionBar />

      <AdressBar />
    </div>
  </div>
</template>

<script>
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";
import Toolbar from "./shared/Toolbar";
import FunctionBar from "./shared/FunctionBar";
import AdressBar from "./shared/AdressBar";

export default {
  name: "WindowDocuments",
  data: () => ({
    toolbarItems: ["Fichier", "Edition", "Affichage", "Favoris", "Outils", "?"]
  }),
  components: {
    TitleBar,
    Toolbar,
    FunctionBar,
    AdressBar
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
