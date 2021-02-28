<template>
  <Desktop v-if="windowsLoggedIn" />

  <WindowsLogin v-else />
</template>

<script>
import { mapState } from "vuex";
import WindowsLogin from "./containers/WindowsLogin";
import Desktop from "./containers/Desktop";

export default {
  name: "App",
  components: {
    WindowsLogin,
    Desktop
  },
  computed: {
    ...mapState(["windowsLoggedIn"])
  }
};
</script>

<style>
* {
  margin: 0;
}
</style>
