<template>
  <div>
    <div id="map" class="google-map"></div>
  </div>
</template>
<script>
export default {
  props: ['lat', 'lng'],
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap()
    this.setMarker()
    console.log(this.lat, this.lng)
  },
  methods: {
    initMap () {
      // eslint-disable-next-line
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 15,
        maxZoom: 20,
        minZoom: 3,
        streetViewCOntrol: false,
        mapTypeCOntrol: false
      })
    },
    setMarker () {
      // eslint-disable-next-line
      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: this.map
      })
      const infoWindow =
      // eslint-disable-next-line
      new google.maps.InfoWindow({
        content: '<p>You have 24hrs to eliminate this person.</p>'
      })
      marker.addListener('click', () => {
        infoWindow.open(this.map, marker)
      })
    }
  }
}
</script>
<style scoped>
.google-map {
  height: 600px;
  width: 100%;
}
</style>
