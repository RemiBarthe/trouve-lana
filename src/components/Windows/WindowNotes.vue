<template>
  <div
    class="window window-notes"
    :class="{ 'not-focus': !isFocus }"
    :style="`z-index: ${window.position}`"
  >
    <WindowTitleBar :window="window" />

    <div class="window-body">
      <section class="toolbar">
        <div>Fichier</div>
        <div>Edition</div>
        <div>Format</div>
        <div>Affichage</div>
        <div>?</div>
      </section>

      <textarea
        class="text-notes"
        spellcheck="false"
        v-model="notes"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { Notes } from "../../assets/js/notes";
import windowMixin from "../../mixins/windowMixin";
import WindowTitleBar from "./WindowTitleBar";

export default {
  name: "WindowNotes",
  components: {
    WindowTitleBar
  },
  data: () => ({
    notes: Notes
  }),
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-notes {
  width: 600px;
  position: absolute;
  left: 200px;
  top: 400px;
  user-select: none;

  .toolbar {
    display: flex;
    margin-bottom: 1px;

    div {
      padding: 2px 7px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #0e48a1;
        color: white;
      }
    }
  }

  .text-notes {
    width: 100%;
    height: 340px;
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
