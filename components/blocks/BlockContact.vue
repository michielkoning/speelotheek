<template>
  <block-wrapper>
    <skip-link-title class="title" :title="$t('pages.contact.title')" />
    <div :class="$style.wrapper">
      <company-address />
      <social-links />
    </div>
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import CompanyAddress from '@/components/CompanyAddress.vue'
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'

export default {
  components: {
    BlockWrapper,
    SocialLinks,
    CompanyAddress,
    SkipLinkTitle
  }
}
</script>

<style lang="postcss" module>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-gap: var(--gutter);
}
</style>
