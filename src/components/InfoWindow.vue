<template>
  <div class="info-window arrow-down">
    <div class="info-window-header">
      <button class="btn-close" @click="onClickClose"><i class="material-icons">close</i></button>
    </div>
    <div class="info-window-body">
      <h3>{{ data.payload.name }}</h3>
      <h2>{{ data.payload.categories[0].name }}</h2>
      <p>{{ data.payload.location.address }}, {{data.payload.location.city}}, {{ data.payload.location.postalCode }}</p>
      <p>Phone: {{ data.payload.contact.formattedPhone }}</p>
      <div class="block-price">
        <p><strong>Price:</strong> {{ data.payload.price.currency }} {{ data.payload.price.message }}</p>
        <p><strong>Rating:</strong> {{ data.payload.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoWindow',
  props: {
    data: {
      type: [Array, Object, String],
      required: false
    }
  },
  methods: {
    onClickClose () {
      this.$emit('closeclick')
    }
  }
}
</script>

<style lang="scss" scoped>
  .info-window {
    background-color: $white;
    border: 0.2rem solid $pastel-white;
    box-shadow: $box-shadow;
    font-size: $body-font;
    min-height: $gutter-padding;
    min-width: 35rem;
    position: relative;
  }

  .info-window-body {
    line-height: 1.5;
    padding: $gutter-padding;
  }

  .info-window-body h3 {
    font-size: $font-h2-size;
    font-weight: 400;
    text-transform: capitalize;
  }
  .info-window-body h2 {
    font-size: $font-h4-size;
    font-weight: 300;
    text-transform: capitalize;
  }

  .block-price {
    display: flex;
    justify-content: space-between;
  }

  .info-window::after {
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1.5rem solid $white;
    bottom: 0;
    content: '';
    height: 0;
    left: 50%;
    margin-bottom: -1.5rem;
    margin-left: -1rem;
    position: absolute;
    width: 0;
  }

  .info-window-header {
    position: relative;
  }

  .btn-close {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
  }

</style>
