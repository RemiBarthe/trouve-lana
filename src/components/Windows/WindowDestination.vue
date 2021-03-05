<template>
  <div
    class="window window-destination"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <img alt="logo destination" src="@/assets/img/icons/gps.png" />
      <p>
        Veuillez entrer l'adresse désirée<br />
        (numero rue ville)
      </p>

      <input
        v-model="inputDestination"
        type="text"
        placeholder="(ex: 2 rue du General Versailles)"
        @keyup.enter="checkDestination()"
      />

      <button @click="checkDestination()">
        S'y rendre
      </button>

      <p v-if="wrongDestination" class="wrong-destination">
        L'adresse est incorrecte
      </p>
    </div>
  </div>
</template>

<script>
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";

export default {
  name: "WindowDestination",
  components: {
    TitleBar
  },
  data: () => ({
    destinations: [
      "45 rue de l'academie cherrueix",
      "45 rue de l'académie cherrueix",
      "45 rue de l academie cherrueix",
      "45 rue de l académie cherrueix"
    ],
    inputDestination: "",
    wrongDestination: false
  }),
  methods: {
    checkDestination() {
      if (
        this.destinations.includes(
          this.inputDestination.trim().toLocaleLowerCase()
        )
      ) {
        alert("Félicitation vous avez trouvé Lana ..");
      } else {
        this.wrongDestination = true;
        this.inputDestination = "";
      }
    }
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-destination {
  width: 600px;
  height: 500px;
  position: absolute;
  left: 450px;
  top: 250px;
  user-select: none;

  .window-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 90%;

    p {
      font-size: 14px;
      text-align: center;

      &.wrong-destination {
        margin-top: 10px;
      }
    }

    img {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }

    input {
      width: 300px;
      margin-top: 20px;
      margin-bottom: 5px;
      border: 1px solid #d0d0bf;
    }
  }
}
</style>
