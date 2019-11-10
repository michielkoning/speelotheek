<template>
  <icon-star-full v-if="star === 'star-full'" width="24" height="24" />
  <icon-star-empty v-else-if="star === 'star-empty'" width="24" height="24" />
  <icon-star-half v-else-if="star === 'star-half'" width="24" height="24" />
</template>

<script>
import IconStarFull from '@/assets/icons/star-full.svg'
import IconStarEmpty from '@/assets/icons/star-empty.svg'
import IconStarHalf from '@/assets/icons/star-half.svg'

export default {
  components: {
    IconStarFull,
    IconStarEmpty,
    IconStarHalf
  },
  props: {
    star: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
svg {
  fill: #f5a623;
}
</style>
