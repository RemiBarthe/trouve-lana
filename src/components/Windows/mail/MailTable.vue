<template>
  <table class="mail-table">
    <thead>
      <tr>
        <td>De</td>
        <td>Objet</td>
        <td>Reçu</td>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(mail, index) in mails"
        :key="index"
        @click="openMail(index)"
        :class="[index === idActive ? 'selected' : '']"
      >
        <td>{{ mail.from }}</td>
        <td>{{ mail.object }}</td>
        <td>{{ mail.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MailTable",
  data: () => ({
    idActive: null
  }),
  computed: {
    ...mapState(["mails"]),
    activeMail() {
      return this.mails[this.idActive];
    }
  },
  methods: {
    openMail(id) {
      this.idActive = id;
      this.$store.dispatch("setActiveMail", this.activeMail);
    }
  }
};
</script>

<style lang="scss" scoped>
.mail-table {
  width: 100%;
  background: white;
  border-spacing: 0;
  height: 200px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  thead {
    background-color: #ece9d8;
    display: block;

    td {
      padding: 2px 12px;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
      border-right: solid 1px rgba(0, 0, 0, 0.1);
      border-left: solid 1px rgba(255, 255, 255, 0.7);
      width: 33%;
    }
  }

  tbody {
    height: 200px;
    overflow-y: scroll;
    display: block;

    td {
      padding: 1px 10px;
      width: 34%;
    }
  }

  tr {
    width: 100%;
    display: flex;

    &.selected {
      background: #0e48a1;
      color: white;
    }
  }
}
</style>