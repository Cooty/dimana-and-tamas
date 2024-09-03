<template>
  <div class="map-container">
    <ui-aspect-ratio-box>
      <GMapMap
        :center="center"
        :zoom="13"
        map-type-id="roadmap"
        scrollwheel="0"
      >
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
        ></GMapMarker>
        <GMapPolyline :path="path" :editable="false" ref="polyline" />
      </GMapMap>
    </ui-aspect-ratio-box>
  </div>
</template>

<script setup>
const center = { lat: 42.4799947, lng: 27.4932235 }

const station = {
  lat: 42.48808735520007,
  lng: 27.48106909625126,
}
const island = {
  lat: 42.46791286390167,
  lng: 27.553161901050352,
}

const path = [station, island]

const markers = [
  {
    position: station,
  },
  {
    position: island,
  },
]
</script>

<style lang="scss" scoped>
.map-container {
  overflow: hidden;
  margin: calc(var(--gutter) * 3) calc(var(--box-padding) * -1)
    calc(var(--box-padding) * -1) calc(var(--box-padding) * -1);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}
</style>
