<template>
  <div>
    <block-contact />
    <block-map />
  </div>
</template>

<script>
import BlockContact from '@/components/blocks/BlockContact.vue'
import BlockMap from '@/components/blocks/BlockMap.vue'

export default {
  components: {
    BlockContact,
    BlockMap
  },
  head () {
    return {
      title: this.$t('pages.contact.title')
    }
  }
}
</script>
