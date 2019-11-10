<template>
  <div>
    <block-gallery />
    <block-mobile-workshop />
  </div>
</template>

<script>
import BlockGallery from '@/components/blocks/BlockGallery.vue'
import BlockMobileWorkshop from '@/components/blocks/BlockMobileWorkshop.vue'

export default {
  components: {
    BlockGallery,
    BlockMobileWorkshop
  },
  head () {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
