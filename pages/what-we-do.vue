<template>
  <div>
    <block-what-we-do />
  </div>
</template>

<script>
import BlockWhatWeDo from '@/components/blocks/BlockWhatWeDo.vue'

export default {
  components: {
    BlockWhatWeDo
  },
  head () {
    return {
      title: this.$t('pages.whatWeDo.title')
    }
  }
}
</script>
