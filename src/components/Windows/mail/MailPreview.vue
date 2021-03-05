<template>
  <div class="mail-preview" v-if="activeMail.from">
    <p class="infos">
      <span class="bold">De : </span> {{ activeMail.from }}
      <span class="bold"> À: </span>lana.lariviere@hotmail.fr<br />
      <span class="bold">Objet :</span> {{ activeMail.object }}
    </p>

    <p class="content">
      {{ activeMail.content }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MailPreview",
  computed: {
    ...mapState(["activeMail"])
  }
};
</script>

<style lang="scss" scoped>
.mail-preview {
  width: 100%;
  height: auto;
  top: 241px;
  bottom: 0px;
  position: absolute;

  .infos {
    background: #ece9d8;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 15px;
    padding: 4px 7px;

    .bold {
      font-weight: 900;
    }

    span:nth-child(2) {
      margin-left: 15px;
    }
  }

  .content {
    width: 90%;
    padding: 10px 5%;
    overflow-y: scroll;
    font-size: 13px;
    position: absolute;
    top: 40px;
    bottom: 0;
    white-space: pre-line;
  }
}
</style>