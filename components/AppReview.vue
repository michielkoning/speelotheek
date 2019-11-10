<template>
  <blockquote>
    <rating-stars :rating="review.rating" />
    <cite>{{ review.cite }}</cite>
    <!-- eslint-disable-next-line -->
    <div v-html="review.text" />
  </blockquote>
</template>

<script>
import RatingStars from '@/components/RatingStars.vue'

export default {
  components: {
    RatingStars
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
h3 {
  display: inline;
  position: relative;

  &:before {
    content: '“';
  }
  &:after {
    content: '”';
  }
}

blockquote {
  margin: 0;
}

cite {
  margin: 0.5em 0 0;
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
}
</style>
