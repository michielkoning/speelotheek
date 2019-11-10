<template>
  <notch-wrapper>
    <GmapMap :center="position" :zoom="12" :class="$style.map">
      <GmapMarker :position="position" />
    </GmapMap>
  </notch-wrapper>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper
  },
  data () {
    return {
      position: {
        lat: 41.07308,
        lng: 1.08898
      }
    }
  }
}
</script>

<style lang="postcss" module>
.map {
  width: 100%;
  height: 20em;
}
</style>
