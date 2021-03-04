<template>
  <div
    class="window window-messenger"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div v-if="messengerPassword" class="window-body">
      <div class="locked-screen">
        <img alt="logo messenger" src="@/assets/img/picto-auth.png" />
        <p>
          Connexion à votre compte : Lana<br />
          Mot de passe requis
        </p>

        <input
          v-model="inputPasswordMessenger"
          type="password"
          @keyup.enter="checkPasswordMessenger()"
        />

        <button @click="checkPasswordMessenger()">
          Se connecter
        </button>

        <p v-if="wrongPasswordMessenger" class="wrong-password">
          Mauvais mot de passe
        </p>
      </div>
    </div>

    <div v-else class="window-body">
      <div class="conversation-list">
        <div
          v-for="(conversation, index) in conversations"
          :key="index"
          @click="switchConversation(index)"
          :class="[index === idActive ? 'selected' : '']"
        >
          <div class="overlay-locked" v-if="conversation.password">
            <img
              alt="locked"
              src="@/assets/img/picto-lock.png"
              class="locked"
            />
          </div>

          <img
            class="profile-picture"
            alt="profile picture"
            :src="conversation.picture"
          />
          <p>
            {{ conversation.name }}
          </p>
        </div>
      </div>

      <div class="locked-screen" v-if="activeConversation.password">
        <img alt="lock image" src="@/assets/img/picto-lock.png" />

        <p>
          Un mot de passe est requis pour accéder aux messages avec
          {{ activeConversation.name }}
        </p>

        <input
          v-model="inputPasswordConversation"
          type="password"
          @keyup.enter="checkPasswordConversation()"
        />

        <button @click="checkPasswordConversation()">
          Confirmer
        </button>

        <p v-if="wrongPasswordConversation" class="wrong-password">
          Mauvais mot de passe
        </p>
      </div>

      <MessengerConversation v-else :conversation="activeConversation" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import windowMixin from "@/mixins/windowMixin";
import TitleBar from "./shared/TitleBar";
import MessengerConversation from "./messenger/MessengerConversation";

export default {
  name: "WindowMessenger",
  components: {
    TitleBar,
    MessengerConversation
  },
  data: () => ({
    idActive: 1,
    inputPasswordMessenger: "",
    inputPasswordConversation: "",
    wrongPasswordMessenger: false,
    wrongPasswordConversation: false,
    messengerPassword: "filou88"
  }),
  computed: {
    ...mapState(["conversations"]),
    activeConversation() {
      return this.conversations[this.idActive];
    }
  },
  methods: {
    switchConversation(id) {
      this.idActive = id;
    },
    checkPasswordMessenger() {
      if (
        this.inputPasswordMessenger.toLowerCase() === this.messengerPassword
      ) {
        this.messengerPassword = "";
      } else {
        this.wrongPasswordMessenger = true;
        this.inputPasswordMessenger = "";
      }
    },
    checkPasswordConversation() {
      if (
        this.inputPasswordConversation.toUpperCase() ===
        this.activeConversation.password
      ) {
        this.$store.dispatch("setConversationPassword", {
          id: this.idActive,
          password: ""
        });
      } else {
        this.wrongPasswordConversation = true;
        this.inputPasswordConversation = "";
      }
    }
  },
  mixins: [windowMixin]
};
</script>

<style lang="scss" scoped>
.window-messenger {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  position: absolute;
  right: 200px;
  top: 80px;
  user-select: none;
  background: #ddd;

  .window-body {
    height: auto;
    top: 25px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 5px;
    position: absolute;

    .conversation-list {
      width: 50px;
      padding: 5px;
      background-color: white;
      border-radius: 10px;
      margin-right: 10px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        margin: 10px 0;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
        position: relative;
        overflow: hidden;

        &:hover,
        &.selected {
          background: #0e48a1;
          color: white;
        }

        p {
          font-weight: 600;
          margin-top: 3px;
        }

        .profile-picture {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
      }
    }
  }

  .overlay-locked {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    .locked {
      position: absolute;
      width: 25px;
      height: 25px;
      margin: auto;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
    }
  }

  .locked-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background: #0e48a1;

    p {
      font-size: 14px;
      color: white;
      text-align: center;

      &.wrong-password {
        color: red;
        text-shadow: 1px 1px black;
        margin-top: 5px;
      }
    }

    img {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }

    input {
      width: 300px;
      margin-top: 20px;
      margin-bottom: 5px;
    }
  }
}
</style>
