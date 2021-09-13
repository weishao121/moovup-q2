<template>
  <div class="wrapper">
    <div v-if='people != null'>
      <div class="news">
        <div class="news__card" v-for='person in people' :key='person._id'>
          <img :src='person.picture'>
          <h2>{{person.name.first}} - {{person.name.last}}</h2>
          <h2>{{person.email}}</h2>
          <div v-if='person.location.latitude !== null && person.location.longitude !== null'>
            <b-button @click="showMapModal(person.location.latitude, person.location.longitude)">Reveal Location</b-button>
          </div>
          <div v-else>
            <h6>Location Unknown</h6>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      No posts found.
    </div>
    <b-modal v-model="mapModal" size="xl" title="Target Location">
      <Map :lat="lat" :lng="lng"></Map>
      <!-- <p class="my-4">Lat: {{lat}}</p>
      <p class="my-4">lng: {{lng}}</p> -->
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import Map from './map.vue'
export default {
  name: 'Index',
  components: {
    Map
  },
  data () {
    return {
      msg: '',
      people: null,
      mapModal: false,
      lat: '',
      lng: ''
    }
  },
  methods: {
    showMapModal (lat, lng) {
      this.mapModal = true
      this.lat = lat
      this.lng = lng
      // console.log(`Lat: ${lat}, lng: ${lng}`)
    }
  },
  mounted () {
    axios.get(`https://api.json-generator.com/templates/Xp8zvwDP14dJ/data`, {
      headers: {
        // Provided Api key
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    })
      .then(res => {
        console.log(res.data)
        this.people = res.data
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
</script>
<style scoped>
body {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f6f6f6;
}

img {
  max-width: 100%;
}

h2 {
  font-size: 1.6rem;
}
.wrapper {
  padding: 0 1rem;
}

.news {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(360px, 1fr))[auto-fill];
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 2rem;
}

.news__card {
  text-decoration: none;
  color: #080808;
  background-color: #fff;
  padding: 20px;
}

.news__card:hover {
  -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
}

</style>
