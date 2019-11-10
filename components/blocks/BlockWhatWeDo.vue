<template>
  <block-wrapper>
    <skip-link-title class="title" :title="$t('pages.whatWeDo.title')" />
    <h2>{{ $t('pages.whatWeDo.intro') }}</h2>
    <app-text :text="$t('pages.whatWeDo.top.text')" />

    <ul>
      <li v-for="item in $t('pages.whatWeDo.top.list')" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p v-if="item.text">
          {{ item.text }}
        </p>
      </li>
    </ul>
    <full-page-image image="tse_mechanics" />
    <app-text :text="$t('pages.whatWeDo.bottom.part1')" />
    <h2>{{ $t('pages.whatWeDo.bottom.part2.title') }}</h2>
    <app-text :text="$t('pages.whatWeDo.bottom.part2.text')" />
    <h3>{{ $t('pages.whatWeDo.bottom.part3.title') }}</h3>
    <app-text :text="$t('pages.whatWeDo.bottom.part3.text')" />
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
