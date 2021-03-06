<template>
  <template v-if="lanaFound">
    <EndContainer />
  </template>

  <template v-else>
    <Desktop v-if="windowsLoggedIn" />

    <WindowsLogin v-else />
  </template>
</template>

<script>
import { mapState } from "vuex";
import WindowsLogin from "./containers/WindowsLogin";
import Desktop from "./containers/Desktop";
import EndContainer from "./containers/EndContainer";

export default {
  name: "App",
  components: {
    WindowsLogin,
    Desktop,
    EndContainer
  },
  computed: {
    ...mapState(["windowsLoggedIn", "lanaFound"])
  }
};
</script>

<style>
* {
  margin: 0;
}
</style>
