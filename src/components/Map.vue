<template>
  <div class="ui-map">
    <gmap-map
      :center="{ lat:setLoction.lat, lng:setLoction.lng }"
      :zoom="16"
      style="width: 100%; height: 100%"
      :options="mapOpts"
      ref="gmap">
      <gmap-info-window
        v-if="infoWinOpen"
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @domready="onInfowindowsOpen">
        <info-window
          :data="infoContent"
          @closeclick="infoWinOpen=false">
        </info-window>
      </gmap-info-window>
      <gmap-marker
        :animation="animation"
        :icon="{ url: require('../assets/person_pin.png')}"
        :position="{lat: setLoction.lat, lng: setLoction.lng}">
      </gmap-marker>
      <gmap-marker
        v-for="(m,index) in markers"
        :icon="{ url: require('../assets/restaurant_place.png')}"
        :key="index"
        :animation="animation"
        :position="m.position"
        @click="venueDetails(m, index)">
      </gmap-marker>
    </gmap-map>
    <ui-toast :message="message" :notify="showMessage"></ui-toast>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Services from '@/services'
import InfoWindow from './InfoWindow'

export default {
  name: 'UiMap',
  components: { InfoWindow },
  data () {
    return {
      center: { lng: 10.0, lat: 10.0 },
      infoContent: {},
      infoWinOpen: false,
      animation: 4,
      markers: [],
      currentMidx: null,
      mapOpts: {
        mapTypeControl: false,
        streetViewControl: false
      },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      message: '',
      showMessage: false
    }
  },
  asyncComputed: {
    /**
     * @method allVenues
     * @description Get all the venues arround the user current location
     *
     * @returns { object } current lat and lng of the user
     */
    async allVenues () {
      try {
        if (this.coordinates.success) {
          const data = await Services.getAllVenues(this.setLoction)
          const payload = data.response.groups[0].items
          let markers = []
          payload.forEach(value => {
            markers.push({
              position: {
                lat: value.venue.location.lat,
                lng: value.venue.location.lng
              },
              infoText: value
            })
            this.markers = markers
          })
        } else {
          return false
        }
      } catch (err) {
        this.showMessage = true
        this.message = 'An error has occurred, please reload your browser and try again'
        console.error(err.message)
      }
    }
  },
  computed: {
    ...mapGetters({
      coordinates: 'coordinates'
    }),
    setLoction () {
      return this.coordinates
    }
  },
  created () {
    this.getCurrentUserLocation()
  },
  methods: {
    /**
     * @method getCurrentUserLocation
     * @description Get the current geolocation
     *
     * @returns { object } current lat and lng of the user
     */
    getCurrentUserLocation () {
      this.$store.dispatch('FETCH_LOCATION')
    },
    /**
     * @method onInfowindowsOpen
     * @description prevent to show the default google maps info window
     *
     * @returns { void }
     */
    onInfowindowsOpen () {
      const infoWin = document.querySelector('.gm-style-iw')
      const prevInfoWin = infoWin.previousSibling
      prevInfoWin.style.display = 'none'
    },
    /**
     * @method venueDetails
     * @description show the current venue details that has being clicked
     *
     * @param { Object } marker
     * @param { Number } idx
     * @returns { object }
     */
    async venueDetails (marker, idx) {
      try {
        const venueId = marker.infoText.venue.id
        const venue = await Services.getVenue(venueId)
        this.infoWindowPos = { lng: marker.position.lng, lat: marker.position.lat }
        this.infoContent = { payload: venue.response.venue }
        // check if its the same marker that was selected if yes toggle
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen
        } else {
          // if different marker set infowindow to open and reset current marker index
          this.infoWinOpen = true
          this.currentMidx = idx
        }
      } catch (err) {
        this.showMessage = true
        this.message = 'An error has occurred, please reload your browser and try again'
        console.error(err.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-map {
  height: calc(#{$container-height} - #{$gutter-padding} * 6);
  margin-bottom: $gutter-padding;
}
</style>
