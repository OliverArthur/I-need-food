<template>
  <div id="app" class="container">
    <header class="header">
      <UiLogo/>
      <button class="btn-location" @click="getCurrentUserLocation">
        <i class="material-icons">my_location</i>
      </button>
    </header>
    <section class="content">
      <article class="map">
        <ui-map></ui-map>
      </article>
    </section>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import UiLogo from '@/components/Logo'
import UiMap from '@/components/Map'

export default {
  name: 'app',
  components: { UiLogo, UiMap },
  methods: {
    /**
     * @method getCurrentUserLocation
     * @description Get the current geolocation
     *
     * @returns { object } current lat and lng of the user
     */
    getCurrentUserLocation () {
      this.$store.dispatch('FETCH_LOCATION')
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: $container-height;
}

.header {
  border-bottom: 0.1rem solid $pastel-white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: $gutter-padding;
}

.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.map {
  background-color: $pastel-white;
  position: relative;
  flex-basis: 100%;
  max-width: 100%;
}

.btn-location {
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

  // Google Maps Hack for Infowindow.
  .gm-style-iw + div {display: none !important;}
</style>
