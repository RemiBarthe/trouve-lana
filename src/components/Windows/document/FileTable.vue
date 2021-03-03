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
      <tr
        v-for="photo in photos"
        :key="photo.id"
        :class="{ selected: photo.selected }"
        @click="selectPhoto(photo.id)"
        @dblclick="openPhoto(photo)"
      >
        <td class="image-name">
          <div>
            <img alt="picto image" src="@/assets/img/picto-image.png" />{{
              photo.name
            }}
          </div>
        </td>
        <td class="align-right">{{ photo.size }}</td>
        <td>{{ photo.type }}</td>
        <td>{{ photo.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FileTable",
  computed: {
    ...mapState(["photos"])
  },
  methods: {
    selectPhoto(id) {
      if (this.photos[id].selected) {
        this.photos[id].selected = false;
      } else {
        this.photos.forEach(photo => {
          photo.selected = false;
        });

        this.photos[id].selected = true;
      }
    },
    openPhoto(photo) {
      this.$store.dispatch("setActivePhoto", photo);

      this.$store.dispatch("setWindowActive", {
        id: 6,
        active: true
      });
    }
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
      &.selected {
        background: #0e48a1;
        color: white;

        img {
          opacity: 0.6;
        }
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