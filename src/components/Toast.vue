<template>
  <section class="toast" v-if="notify">
    <span class="toast-msg">
      {{ message }}
    </span>
  </section>
</template>

<script>
export default {
  name: 'UiToast',
  props: {
    message: {
      type: String,
      required: true
    },
    notify: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
 .toast {
    -webkit-animation-delay: 0.5s;
    -webkit-animation: show 0.5s forwards;
    animation-delay: 500ms;
    animation: show 0.5s forwards;
    background-color: $night-day;
    border-radius: $border-radius;
    bottom: 0.8rem;
    box-shadow: 0 0.7rem 1.8rem rgba(0,0,0,0.2);
    color: $white;
    font-size: $body-font;
    padding: $gutter-padding;
    position: fixed;
    right: 0.6rem;
    vertical-align: middle;
 }
</style>
