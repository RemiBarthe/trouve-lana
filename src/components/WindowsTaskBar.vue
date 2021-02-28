<template>
  <footer class="desktop-footer">
    <div class="footer__items left">
      <div class="footer__start__menu"></div>

      <img
        src="../assets/img/logo-start.png"
        alt="démarrer"
        class="footer__start"
      />

      <WindowsTaskBarItem
        v-for="(item, index) in activeItem"
        :key="index"
        :item="item"
      />
    </div>

    <div class="footer__items right">
      <img
        class="footer__icon"
        src="../assets/img/picto-footer1.png"
        alt="picto footer 1"
      />

      <img
        class="footer__icon"
        src="../assets/img/picto-footer2.png"
        alt="picto footer 2"
      />

      <img
        class="footer__icon"
        src="../assets/img/picto-footer3.png"
        alt="picto footer 3"
      />

      <div style="position: relative; width: 0px; height: 0px;"></div>

      <div class="footer__time">{{ currentDate }}</div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import WindowsTaskBarItem from "./WindowsTaskBarItem";

export default {
  name: "WindowsTaskBar",
  components: {
    WindowsTaskBarItem
  },
  data: () => ({
    currentDate: "",
    interval: null
  }),
  mounted() {
    this.getCurrentTime();
    this.interval = setInterval(this.getCurrentTime, 60000);
  },
  computed: {
    ...mapState(["windows"]),
    activeItem() {
      return this.windows.filter(item => item.active);
    }
  },
  methods: {
    getCurrentTime() {
      const date = new Date();
      this.currentDate = date.getHours() + ":" + date.getMinutes();
    }
  }
};
</script>

<style lang="scss" scoped>
.desktop-footer {
  user-select: none;
  height: 30px;
  background: linear-gradient(
    to bottom,
    #1f2f86 0,
    #3165c4 3%,
    #3682e5 6%,
    #4490e6 10%,
    #3883e5 12%,
    #2b71e0 15%,
    #2663da 18%,
    #235bd6 20%,
    #2258d5 23%,
    #2157d6 38%,
    #245ddb 54%,
    #2562df 86%,
    #245fdc 89%,
    #2158d4 92%,
    #1d4ec0 95%,
    #1941a5 98%
  );
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;

  .footer__items.left {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .footer__items.right {
    background-color: #0b77e9;
    flex-shrink: 0;
    background: linear-gradient(
      to bottom,
      #0c59b9 1%,
      #139ee9 6%,
      #18b5f2 10%,
      #139beb 14%,
      #1290e8 19%,
      #0d8dea 63%,
      #0d9ff1 81%,
      #0f9eed 88%,
      #119be9 91%,
      #1392e2 94%,
      #137ed7 97%,
      #095bc9 100%
    );
    border-left: 1px solid #1042af;
    box-shadow: inset 1px 0 1px #18bbff;
    padding: 0 10px;
    margin-left: 10px;
  }
  .footer__items {
    display: flex;
    align-items: center;
  }
  .footer__start {
    height: 96%;
    margin-right: 10px;
    position: relative;
    &:hover {
      filter: brightness(105%);
    }
    &:active {
      pointer-events: none;
      filter: brightness(85%);
    }
  }
  .footer__start__menu {
    position: absolute;
    left: 0;
    box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);
    bottom: 100%;
  }
  .footer__window {
    flex: 1;
    max-width: 150px;
    color: #fff;
    border-radius: 2px;
    margin-top: 2px;
    padding: 0 8px;
    height: 22px;
    font-size: 11px;
    background-color: #3c81f3;
    box-shadow: inset -1px 0px rgba(0, 0, 0, 0.3),
      inset 1px 1px 1px rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    align-items: center;
  }
  .footer__window.focus:hover {
    background-color: #3576f3;
  }
  .footer__window.focus:hover:active {
    background-color: #1e52b7;
  }
  .footer__window.focus {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.2),
      inset 1px 0 1px rgba(0, 0, 0, 0.7);
  }
  .footer__time {
    margin: 0 5px;
    color: #fff;
    font-size: 11px;
    font-weight: lighter;
    text-shadow: none;
  }
}
</style>
