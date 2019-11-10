<template>
  <block-wrapper>
    <skip-link-title :title="$t('pages.getToKnowUs.title')" />
    <h2>{{ $t('pages.getToKnowUs.intro') }}</h2>

    <app-text :text="$t('pages.getToKnowUs.text.top')" />
    <full-page-image image="tse_reparing" />

    <app-text :text="$t('pages.getToKnowUs.text.bottom')" />
  </block-wrapper>
</template>

<script>
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'
import FullPageImage from '@/components/shared/FullPageImage.vue'
import AppText from '@/components/shared/AppText.vue'

export default {
  components: {
    BlockWrapper,
    SkipLinkTitle,
    FullPageImage,
    AppText
  }
}
</script>
