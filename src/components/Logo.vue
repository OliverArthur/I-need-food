<template>
  <h1 class="ui-logo">
    <img src="../assets/logo.png" alt="I Need Food">
  </h1>
</template>

<script>
export default {
  name: 'UiLogo'
}
</script>

<style lang="scss" scoped>
  .ui-logo {
    width: 20rem;
    height: 6rem;
    overflow: hidden;
  }

  .ui-logo img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
</style>
