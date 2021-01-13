<template>
  <div id="map">
    <client-only>
      <l-map :zoom="18" :center="location">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="location">
          <l-popup>Stephen Lai</l-popup>
        </l-marker>
      </l-map>
    </client-only>
    <div class="position">
      latitude: {{ latitude }} longitude: {{ longitude }}
      <button @click="stopTracking">Stop Tracking</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      location: [25.0287522, 121.5430457],
      id: null,
      latitude: null,
      longitude: null,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    stopTracking() {
      navigator.geolocation.clearWatch(id)
    },    
    getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(
      position => {         
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
      },
      err => console.log(err.message)        
    )},
    watchPosition() {
      this.id = navigator.geolocation.watchPosition(position => {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
        this.location = [this.latitude, this.longitude]
      },
      err => console.log(err.message)         
    )}
   },
  mounted() {
    if (!navigator.geolocation) {
      console.log(`Your browser doesnot supports Geolocation API`)
      return
    }
    this.watchPosition()
  },
}
</script>

<style scoped>
.position {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
}
#map {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 95%;
  z-index: 50;
}
</style>