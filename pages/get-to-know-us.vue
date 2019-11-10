<template>
  <div>
    <block-get-to-know-us />
  </div>
</template>

<script>
import BlockGetToKnowUs from '@/components/blocks/BlockGetToKnowUs.vue'

export default {
  components: {
    BlockGetToKnowUs
  },
  head () {
    return {
      title: this.$t('pages.getToKnowUs.title')
    }
  }
}
</script>
