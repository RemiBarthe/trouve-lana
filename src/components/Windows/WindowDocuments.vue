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

      <FileTable :files="photos" />
    </div>
  </div>
</template>

<script>
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";
import Toolbar from "./shared/Toolbar";
import FunctionBar from "./shared/FunctionBar";
import AdressBar from "./shared/AdressBar";
import FileTable from "./document/FileTable";
import { mapState } from "vuex";

export default {
  name: "WindowDocuments",
  components: {
    TitleBar,
    Toolbar,
    FunctionBar,
    AdressBar,
    FileTable
  },
  data: () => ({
    toolbarItems: ["Fichier", "Edition", "Affichage", "Favoris", "Outils", "?"]
  }),
  computed: {
    ...mapState(["photos"])
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
  background: white;

  .window-body {
    margin: 3px;
    margin-top: 1px;
  }
}
</style>
