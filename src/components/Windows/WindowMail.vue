<template>
  <div
    class="window window-mail"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <TitleBar :window="window" />

    <div class="window-body">
      <div v-if="mailPassword" class="window-body">
        <div class="locked-screen">
          <img alt="logo messenger" src="@/assets/img/icons/mail.png" />
          <p>
            Connexion à votre boite mail
          </p>

          <input
            v-model="inputLoginMail"
            type="text"
            placeholder="Adresse email"
            @keyup.enter="checkLoginMail()"
          />

          <input
            v-model="inputPasswordMail"
            type="password"
            placeholder="Mot de passe"
            @keyup.enter="checkLoginMail()"
          />

          <button @click="checkLoginMail()">
            Se connecter
          </button>

          <p v-if="wrongPasswordMail" class="wrong-password">
            Mauvais email ou mot de passe
          </p>
        </div>
      </div>

      <template v-else>
        <Toolbar :items="toolbarItems" />

        <MailTable />

        <MailPreview />
      </template>
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
    toolbarItems: ["Fichier", "Edition", "Affichage", "Outils", "Message", "?"],
    mailPassword: "nirvana",
    mailLogin: "lana.bar@hotmail.fr",
    inputPasswordMail: "",
    inputLoginMail: "",
    wrongPasswordMail: false
  }),
  methods: {
    checkLoginMail() {
      if (
        this.inputPasswordMail.toLowerCase() === this.mailPassword &&
        this.inputLoginMail.toLowerCase() === this.mailLogin
      ) {
        this.mailPassword = "";
      } else {
        this.wrongPasswordMail = true;
        this.inputPasswordMail = "";
        this.inputLoginMail = "";
      }
    }
  },
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

  .locked-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 90%;

    p {
      font-size: 14px;
      text-align: center;

      &.wrong-password {
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
