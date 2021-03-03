<template>
  <table class="file-table">
    <thead>
      <tr>
        <td>Nom</td>
        <td class="align-right">Taille</td>
        <td>Type</td>
        <td>Date de modification</td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="file in files" :key="file.id">
        <td class="image-name">
          <div>
            <img alt="picto image" src="@/assets/img/picto-image.png" />{{
              file.name
            }}
          </div>
        </td>
        <td class="align-right">{{ file.size }}</td>
        <td>{{ file.type }}</td>
        <td>{{ file.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "FileTable",
  props: {
    files: Array
  }
};
</script>

<style lang="scss" scoped>
.file-table {
  width: 100%;
  background: white;
  border-spacing: 0;

  thead {
    background-color: #ece9d8;

    td {
      padding: 2px 12px;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
      border-right: solid 1px rgba(0, 0, 0, 0.1);
      border-left: solid 1px rgba(255, 255, 255, 0.7);
    }
  }

  tbody {
    tr {
      &:hover {
        background: #0e48a1;
        color: white;
      }
    }

    td {
      padding: 1px 10px;

      &.image-name {
        padding-left: 3px;
        div {
          display: flex;
          align-items: center;

          img {
            width: 18px;
            height: 18px;
            margin-right: 1px;
          }
        }
      }
    }
  }

  .align-right {
    text-align: right;
  }
}
</style>