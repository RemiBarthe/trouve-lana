<template>
  <div class="conversation">
    <div class="header-conversation">
      <img
        class="profile-picture"
        alt="profile pic"
        :src="conversation.picture"
      />

      <p>{{ conversation.name }} - Hors ligne</p>
    </div>

    <div class="list-message">
      <div class="feed">
        <p
          v-for="(message, index) in messages"
          :key="index"
          :class="{ self: message.isSender }"
        >
          <template v-if="message.content !== photo">
            {{ message.content }}
          </template>

          <img
            v-else
            alt="numero rue"
            src="@/assets/img/photos/numero-rue.png"
          />
        </p>
      </div>
    </div>

    <div class="send-message">
      <textarea v-model="inputMessage" spellcheck="false"></textarea>

      <button @click="sendMessage()">Envoyer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerConversation",
  data: () => ({
    inputMessage: "",
    photo: "[numero-rue.jpg]"
  }),
  props: {
    conversation: Object
  },
  computed: {
    messages() {
      return this.conversation.messages;
    }
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim()) {
        this.messages.push({ content: this.inputMessage, isSender: true });
        this.inputMessage = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.conversation {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 10px;

  .header-conversation {
    display: flex;
    align-items: center;
    padding: 10px;
    background: #0e48a1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
    .profile-picture {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    p {
      margin-left: 5px;
      font-size: 15px;
      font-weight: 600;
    }
  }

  .list-message {
    overflow-y: scroll;
    border-top: solid 1px rgba(0, 0, 0, 0.1);

    .feed {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin: 5px 20px;
        padding: 10px;
        background-color: #ddd;
        font-size: 13px;
        border-radius: 10px;

        &.self {
          align-self: flex-end;
          background-color: #0e48a140;
        }
      }

      img {
        width: 100%;
      }
    }
  }
}

.send-message {
  height: 100px;
  display: flex;
  border-top: solid #ddd 2px;

  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    font-family: Arial;
    font-size: 13px;
    line-height: 14px;
    resize: none;
    padding: 4px;
    white-space: nowrap;
    border-top: 1px solid #0e48a1;
  }
}
</style>
