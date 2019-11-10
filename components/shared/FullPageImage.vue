<template>
  <div :class="$style['image-wrapper']">
    <app-image
      :class="$style.image"
      :src="`/media/images/${image}.jpg?nf_resize=fit&w=1000&h=674`"
      width="1000"
      height="674"
    />
  </div>
</template>

<script>
import AppImage from '@/components/AppImage.vue'

export default {
  components: {
    AppImage
  },
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" module>
.image {
  display: block;
  width: 100%;
}

.image-wrapper {
  margin: 0 calc(var(--gutter) / -2) 1em;
}
</style>
