<template>
  <div>
    <block-recommendations />
  </div>
</template>

<script>
import BlockRecommendations from '@/components/blocks/BlockRecommendations.vue'

export default {
  components: {
    BlockRecommendations
  },
  head () {
    return {
      title: this.$t('pages.recommendations.title')
    }
  }
}
</script>
