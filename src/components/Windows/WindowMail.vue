<template>
  <div
    class="window window-mail"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <Toolbar :items="toolbarItems" />

      <MailTable />

      <MailPreview />
    </div>
  </div>
</template>

<script>
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";
import Toolbar from "./shared/Toolbar";
import MailTable from "./mail/MailTable";
import MailPreview from "./mail/MailPreview";

export default {
  name: "WindowMail",
  components: {
    TitleBar,
    Toolbar,
    MailTable,
    MailPreview
  },
  data: () => ({
    toolbarItems: ["Fichier", "Edition", "Affichage", "Outils", "Message", "?"]
  }),
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-mail {
  width: 600px;
  height: 500px;
  position: absolute;
  right: 130px;
  bottom: 50px;
  user-select: none;
  background: white;

  .window-body {
    position: absolute;
    top: 28px;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 3px;
    margin-top: 1px;
  }
}
</style>
