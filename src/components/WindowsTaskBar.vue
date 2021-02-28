<template>
  <footer class="desktop-footer">
    <div class="footer__items left">
      <div class="footer__start__menu"></div>

      <img
        src="../assets/img/logo-start.png"
        alt="démarrer"
        class="footer__start"
      />

      <div class="footer__window cover">
        <img
          class="footer__icon"
          src="data:image/png;base64,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"
          alt="Minesweeper"
        />

        <div class="footer__text">Minesweeper</div>
      </div>

      <div class="footer__window cover">
        <img
          class="footer__icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALCSURBVDhPdZNvSFNRGMZvOEOIogLLjYS+2BfrSyZtU8Iiw4piEZouLDOJJkmWhAPT/JOZYcxi6rbKTVEnohvOqc106p1py6XOv4my6azcaJioBAn1dKYXhjAfeHm4557fw8t7zqF8SSqt3Ftaqjyt1fRktLdbCg3vR2mdbmReqezHPZFCcJiK2sls3Sqj0ai1WseXTSYLTCYrmppoVKl7oGwZxDt6FqUdNlw6+7j1oB8v3GfI8PAoJKpmvDKMoHpkAcbVPzD/Beh1oGkZKP8GXL1YNMr2554PpKICGMyrrs7+j4qhn3hhAyqdgIZA+lVAS1zlAkrswLW4smkOixdPOtjFYF6p6wzP1RYnsqY2N8u+A28XN/3lHJBN1pPFBhebxUs5RPF2M5hXudlvYloGFiAaAjLHgdxpoGAGyCMungBSyXpiTt8yCRAHUuH7GMwrz2A0GgtiTcAtM3D3yybk8eTPQFwfcL1sASTgWTAVsZ/BtqpePdgfq13CBSMg6CVDI2Ee93xfbv+D1OKvJIAvCwrgHmCQrZLL6PIbaieO6wBuK8BvA9I711BcP4eM+83usBARzWHxS7YNKMxvS7hT8wMnm/8hh/6NWo0NaWkfEB1djRNHhDRpP4vjxz+17WVq0VlfS2TD0OtnUVtrRUWFmcDyjUpMkDqPBV8R+jwBj+rqPiUtLS1hfv4XVlZWiDtI0ARSUmohEMiRl9eKzIc1FrZ/RAg5sx0M5lVDQ99Tl8u1AbvdbthsdtD0FCSSDgiFchQUtCInq9FJZpDEoaL2MJhXottynsUyvuZwOGC3z2FycgZG4xhUqm4yhyoS1IWYyHQLx5+f7vMehFKhrHORD+KL8lVjWo1pXa83kwc1AIWiG+KMykX+0Zu9ZIjSbd+CR54fHD8el0z6EdlcQ0pHqoVUI5vFfRLkzzvDocKY9inqP+OethPzSizLAAAAAElFTkSuQmCC"
          alt="My Computer"
        />

        <div class="footer__text">My Computer</div>
      </div>
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

      <div class="footer__time">{{ currentTime }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "WindowsTaskBar",
  computed: {
    currentTime() {
      const date = new Date();
      return date.getHours() + ":" + date.getMinutes();
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
  .footer__icon {
    height: 15px;
    width: 15px;
  }
  .footer__text {
    position: absolute;
    left: 27px;
    right: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer__window.cover:hover {
    background-color: #53a3ff;
    box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.2),
      inset 1px 1px 1px rgba(255, 255, 255, 0.3);
  }
  .footer__window.cover:before {
    display: block;
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    width: 10px;
    height: 1px;
    border-bottom-right-radius: 50%;
    box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  }
  .footer__window.cover:hover:active {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
      inset 1px 0 1px rgba(0, 0, 0, 0.7);
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
