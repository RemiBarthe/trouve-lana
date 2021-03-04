<template>
  <div
    class="window window-notes"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <Toolbar :items="toolbarItems" />

      <textarea
        class="text-notes"
        spellcheck="false"
        v-model="notes"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { Notes } from "@/assets/js/notes";
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";
import Toolbar from "./shared/Toolbar";

export default {
  name: "WindowNotes",
  components: {
    TitleBar,
    Toolbar
  },
  data: () => ({
    notes: Notes,
    toolbarItems: ["Fichier", "Edition", "Format", "Affichage", "?"]
  }),
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-notes {
  width: 600px;
  height: 340px;
  position: absolute;
  left: 250px;
  bottom: 60px;
  user-select: none;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 18px;

  .window-body {
    height: 100%;
    margin: 3px;
    margin-top: 1px;
    margin-bottom: 7px;
  }

  .text-notes {
    width: 100%;
    height: 100%;
    outline: none;
    font-family: "Lucida Console", monospace;
    font-size: 13px;
    line-height: 14px;
    resize: none;
    padding: 2px;
    white-space: nowrap;
    border: 1px solid rgb(150, 171, 255);
  }
}
</style>
