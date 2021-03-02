<template>
  <div class="login">
    <div class="header-bar"></div>

    <div class="radial-bar-top"></div>

    <div class="body-login">
      <div class="radial-gradient"></div>

      <div class="login-left">
        <img
          class="logo-windows"
          alt="logo windows XP"
          src="@/assets/img/logo-windows-xp.png"
        />

        <p class="login-title">
          Pour commencer, cliquez sur votre <br />
          nom d'utilisateur
        </p>
      </div>

      <div class="vertical-line"></div>

      <div class="login-right" @click="windowsLoginIn()">
        <img
          class="logo-user"
          alt="logo user"
          src="@/assets/img/logo-user.png"
        />

        <p class="user-name">
          Lana
        </p>
      </div>
    </div>

    <div class="radial-bar-bottom"></div>

    <div class="footer-bar">
      <div class="shutdown">
        <img
          class="logo-shutdown"
          alt="logo shutdown"
          src="@/assets/img/logo-shutdown.png"
        />

        <p class="shutdown-title">Arrêter l'ordinateur</p>
      </div>

      <p class="text-footer">
        Après avoir ouvert votre session, vous pouvez ajouter<br />
        ou modifier des comptes.<br />
        Allez dans le Panneau de configuration et cliquez sur <br />
        Compte d'utilisateurs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Desktop",
  data: () => ({
    number: 0
  }),
  methods: {
    windowsLoginIn() {
      this.$store.dispatch("setWindowsLoggedIn", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  background-color: #5b7cde;

  .header-bar,
  .footer-bar {
    height: 140px;
    width: 100%;
    background-color: #062c9c;
    z-index: 2;
    border-image-slice: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    .text-footer {
      margin-right: 50px;
      color: white;
    }

    .shutdown {
      display: flex;
      align-items: center;
      padding: 5px;
      margin-left: 40px;
      cursor: pointer;
      width: 191px;
      height: 32px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }

      &:active {
        * {
          padding-top: 2px;
        }

        img {
          padding-left: 2px;
        }
      }

      .shutdown-title {
        margin-left: 8px;
        font-size: 18px;
        color: white;
      }
    }
  }

  .radial-bar-top {
    width: 100%;
    height: 5px;
    background: linear-gradient(45deg, transparent, #a8caff, transparent);
    z-index: 2;
  }

  .radial-bar-bottom {
    width: 100%;
    height: 5px;
    background: linear-gradient(45deg, transparent, #b19ab4, transparent);
    z-index: 2;
  }

  .body-login {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    user-select: none;

    .login-left {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      z-index: 2;

      .logo-windows {
        width: 150px;
        pointer-events: none;
      }

      .login-title {
        margin-top: 20px;
        font-size: 22px;
        text-align: right;
        color: white;
      }
    }

    .login-right {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      z-index: 2;
      padding: 5px;
      width: 280px;
      border-radius: 8px;
      width: 280px;
      height: 60px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(90deg, #062c9c, transparent);
      }

      &:active {
        * {
          padding-top: 1px;
        }

        img {
          padding-left: 1px;
        }
      }

      .logo-user {
        width: 60px;
        pointer-events: none;
      }

      .user-name {
        margin-top: 5px;
        margin-left: 15px;
        font-size: 22px;
        color: white;
      }
    }

    .vertical-line {
      height: 80%;
      width: 3px;
      background: linear-gradient(transparent, #7897f2, transparent);
      margin: 0 50px;
    }

    .radial-gradient {
      position: absolute;
      top: -45px;
      left: -120px;
      width: 600px;
      height: 600px;
      background: radial-gradient(#95b2f1, #5b7cde 70%);
      z-index: 1;
    }
  }
}
</style>
