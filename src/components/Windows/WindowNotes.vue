<template>
  <div class="window window-notes" style="width: 600px">
    <div class="title-bar">
      <div class="title-bar-text">{{ window.title }}</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" @click="closeWindow()"></button>
      </div>
    </div>
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
import { Notes } from "../../assets/js/notes.js";

export default {
  name: "WindowNotes",
  props: {
    window: Object
  },
  data: () => ({
    notes: Notes
  }),
  methods: {
    closeWindow() {
      this.$store.dispatch("setWindowActive", {
        id: this.window.id,
        active: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.window-notes {
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
