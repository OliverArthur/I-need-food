<template>
  <div class="info-window arrow-down">
    <div class="info-window-header">
      <button class="btn-close" @click="onClickClose"><i class="material-icons">close</i></button>
    </div>
    <div class="info-window-body">
      <h3>{{ name }}</h3>
      <h2>{{ categories }}</h2>
      <p>{{ address }}, {{ city }}, {{ postCode }}</p>
      <p>Phone: {{ phone }}</p>
      <div class="block-price">
        <p><strong>Price:</strong> {{ currency }} {{ message }}</p>
        <p><strong>Rating:</strong> {{ rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoWindow',
  props: {
    name: {
      type: String,
      required: false
    },
    categories: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    postCode: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    currency: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
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
