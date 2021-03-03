<template>
  <section class="address-bar">
    <div class="address-bar__title">Addresse</div>
    <div class="address-bar__content">
      <img
        src="@/assets/img/picto-computer.png"
        alt="ie"
        class="address-bar__content__img"
      />
      <div class="address-bar__content__text">Poste de travail</div>
      <img
        src="@/assets/img/picto-adress.png"
        alt="dropdown"
        class="address-bar__content__img"
      />
    </div>
    <div class="address-bar__go">
      <img
        class="address-bar__go__img"
        src="@/assets/img/picto-go-to.png"
        alt="go"
      /><span class="address-bar__go__text">OK</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdressBar"
};
</script>

<style lang="scss" scoped>
.address-bar {
  background: #ece9d8;
  flex-shrink: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  height: 20px;
  font-size: 11px;
  display: flex;
  align-items: center;
  padding: 1px 2px 2px;
  box-shadow: inset 0 -2px 3px -1px #b0b0b0;
}
.address-bar__title {
  line-height: 100%;
  color: rgba(0, 0, 0, 0.5);
  padding: 5px;
}
.address-bar__content {
  border: rgba(122, 122, 255, 0.6) 1px solid;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  background-color: white;
  position: relative;
  &__img {
    width: 14px;
    height: 14px;
  }
  &__img:last-child {
    width: 15px;
    height: 15px;
    right: 1px;
    position: absolute;
  }
  &__img:last-child:hover {
    filter: brightness(1.1);
  }
  &__text {
    white-space: nowrap;
    position: absolute;
    white-space: nowrap;
    left: 16px;
    right: 17px;
  }
}
.address-bar__go {
  display: flex;
  align-items: center;
  padding: 0 18px 0 5px;
  height: 100%;
  position: relative;
  &__img {
    height: 95%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-right: 3px;
  }
}
.address-bar__links {
  display: flex;
  align-items: center;
  padding: 0 18px 0 5px;
  height: 100%;
  position: relative;
  &__img {
    position: absolute;
    right: 2px;
    top: 3px;
    height: 5px;
    width: 8px;
  }
  &__text {
    color: rgba(0, 0, 0, 0.5);
  }
}
.address-bar__separate {
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
}
</style>
