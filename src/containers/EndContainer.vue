<template>
  <div class="end-container">
    <img alt="ending" src="@/assets/img/ending.gif" />

    <p>Vous avez trouvé Lana</p>
  </div>
</template>

<script>
export default {
  name: "Desktop"
};
</script>

<style lang="scss">
.end-container {
  position: absolute;
  width: 100%;
  height: 100%;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    font-size: 60px;
    text-align: center;
    margin: auto;
    color: indianred;
    text-shadow: 4px 4px black;
    width: 100%;
    top: 0;
    margin-top: 40px;
  }
}
</style>
