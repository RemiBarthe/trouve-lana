<template>
  <div
    class="window window-messenger"
    :class="{ 'not-focus': !isFocus, 'full-screen': isFullScreen }"
    :style="`z-index: ${window.position}`"
  >
    <WindowTitleBar :window="window" />

    <div class="window-body">
      <div class="conversation-list">
        <div
          v-for="(conversation, index) in conversations"
          :key="index"
          @click="switchConversation(index)"
          :class="[index === idActive ? 'selected' : '']"
        >
          <div class="overlay-locked" v-if="conversation.isLocked">
            <img
              alt="locked"
              src="../../assets/img/picto-lock.png"
              class="locked"
            />
          </div>

          <img alt="profile pic" :src="conversation.picture" />
          <p>
            {{ conversation.name }}
          </p>
        </div>
      </div>

      <div v-if="activeConversation.isLocked"></div>

      <MessengerConversation v-else :conversation="activeConversation" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import windowMixin from "../../mixins/windowMixin";
import WindowTitleBar from "./WindowTitleBar";
import MessengerConversation from "./Messenger/MessengerConversation";

export default {
  name: "WindowMessenger",
  components: {
    WindowTitleBar,
    MessengerConversation
  },
  data: () => ({
    idActive: 1
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
  background: #0e48a1;

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
        border-bottom: 1px solid #bbb;
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
}
</style>
