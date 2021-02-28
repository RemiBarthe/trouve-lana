<template>
  <div class="window window-notes" style="width: 600px">
    <div class="title-bar">
      <div class="title-bar-text">Notes utiles</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" @click="closeWindow()"></button>
      </div>
    </div>
    <div class="window-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat,
        ligula eu faucibus finibus, augue libero ultricies nisi, nec dapibus
        massa est ut ipsum. Mauris ultrices nibh leo, sed faucibus metus
        elementum posuere. Nam non neque euismod, pretium est id, consequat
        risus. Curabitur nec velit quis lacus ullamcorper egestas. Sed vehicula
        aliquam blandit. Sed rhoncus mattis ex sit amet luctus. Donec consequat
        viverra nisl, id fermentum augue interdum nec. Cras tellus nulla,
        consectetur sed faucibus id, tincidunt ut massa. Sed eget justo ut
        mauris finibus eleifend. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer viverra orci ante, in
        rutrum velit scelerisque vel. In pellentesque, ligula at hendrerit
        pretium, ligula risus convallis ipsum, sed mattis enim odio vel arcu.
        Maecenas odio nisl, viverra id nisi ut, dapibus eleifend sem. Nunc in
        dolor nisl. Fusce vel gravida dolor.
        <br />
        <br />Cras felis lectus, rutrum at erat eget, tempor congue metus. Morbi
        facilisis odio odio, et scelerisque quam pellentesque vel. Vestibulum ac
        enim nunc. Etiam ultricies justo eget lorem varius imperdiet. Mauris
        scelerisque ligula sapien, ac efficitur augue tempus vel. Donec iaculis
        massa ut purus egestas, at dignissim magna consequat. Integer quis
        bibendum velit, vel consequat libero. Mauris posuere rhoncus aliquam.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowNotes",
  methods: {
    closeWindow() {
      this.$store.dispatch("setWindowActive", {
        window: "notes",
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
}
</style>
