<template>
  <div class="stars">
    <rating-star v-for="(star, index) in stars" :key="index" :star="star" />
    <span class="sr-only">{{ rating }} out of 5 stars</span>
  </div>
</template>

<script>
import RatingStar from '@/components/RatingStar.vue'

export default {
  components: {
    RatingStar
  },
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  computed: {
    stars () {
      const stars = []
      for (let i = 1; i <= 5; i++) {
        if (i < this.rating + 1 && i > this.rating) {
          stars.push('star-half')
        } else if (i <= this.rating) {
          stars.push('star-full')
        } else {
          stars.push('star-empty')
        }
      }
      return stars
    }
  }
}
</script>
