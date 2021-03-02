<template>
  <section class="function-bar">
    <div class="function-bar__button--disable">
      <img
        class="function-bar__icon"
        src="../../../assets/img/picto-arrow-left.png"
        alt=""
      /><span class="function-bar__text">Précédente</span>
      <div class="function-bar__arrow"></div>
    </div>
    <div class="function-bar__button--disable">
      <img
        class="function-bar__icon"
        src="../../../assets/img/picto-arrow-right.png"
        alt=""
      />
      <div class="function-bar__arrow"></div>
    </div>
    <div class="function-bar__button">
      <img
        class="function-bar__icon--normalize"
        src="../../../assets/img/picto-previous-folder.png"
        alt=""
      />
    </div>
    <div class="function-bar__separate"></div>
    <div class="function-bar__button">
      <img
        class="function-bar__icon--normalize "
        src="../../../assets/img/picto-search.png"
        alt=""
      /><span class="function-bar__text">Rechercher</span>
    </div>
    <div class="function-bar__button">
      <img
        class="function-bar__icon--normalize"
        src="../../../assets/img/picto-folders.png"
        alt=""
      /><span class="function-bar__text">Dossiers</span>
    </div>
    <div class="function-bar__separate"></div>
    <div class="function-bar__button">
      <img
        class="function-bar__icon--margin12"
        src="../../../assets/img/picto-folder-option.png"
        alt=""
      />
      <div class="function-bar__arrow"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FunctionBar"
};
</script>

<style lang="scss" scoped>
.function-bar {
  height: 36px;
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 1px 3px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
.function-bar__button {
  display: flex;
  height: 100%;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
  }
  &:hover:active {
    border: 1px solid rgb(185, 185, 185);
    background-color: #dedede;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
    & > * {
      transform: translate(1px, 1px);
    }
  }
}
.function-bar__button--disable {
  filter: grayscale(1);
  opacity: 0.7;
  display: flex;
  height: 100%;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
}
.function-bar__text {
  margin-right: 4px;
}
.function-bar__icon {
  height: 30px;
  width: 30px;
  &--normalize {
    height: 22px;
    width: 22px;
    margin: 0 4px 0 1px;
  }
  &--margin12 {
    height: 22px;
    width: 22px;
    margin: 0 1px 0 2px;
  }
  &--margin-1 {
    margin: 0 -1px;
    height: 30px;
    width: 30px;
  }
}
.function-bar__separate {
  height: 90%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 2px;
}
.function-bar__arrow {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 4px;
  &:before {
    content: "";
    display: block;
    border-width: 3px 3px 0;
    border-color: #000 transparent;
    border-style: solid;
  }
}
.function-bar__arrow--margin-11 {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 1px 0 -1px;
  &:before {
    content: "";
    display: block;
    border-width: 3px 3px 0;
    border-color: #000 transparent;
    border-style: solid;
  }
}
</style>
