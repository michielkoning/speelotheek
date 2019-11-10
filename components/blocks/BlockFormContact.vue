<template>
  <block-wrapper :class="$style['block-form-contact']">
    <h1>{{ $t('blocks.contact.title') }}</h1>
    <div :class="$style.wrapper">
      <div :class="$style.text">
        <p>
          {{ $t('blocks.contact.text.part1') }}
          <a :href="`mailto:${$t('address.email')}`" :class="$style.link">{{
            $t('address.email')
          }}</a>{{ $t('blocks.contact.text.part2') }}
        </p>
      </div>
      <form-contact :class="$style.form" />
    </div>
  </block-wrapper>
</template>

<script>
import FormContact from '@/components/FormContact.vue'
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'

export default {
  components: {
    FormContact,
    BlockWrapper
  }
}
</script>

<style lang="postcss" module>
.block-form-contact {
  color: var(--color-primary);
  background: #9ad3ec;
}

.wrapper {
  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
    display: grid;
    grid-gap: 1em;
    grid-template-areas: 'form text';
  }
}

.text {
  grid-area: text;
}

.form {
  grid-area: form;
}

.link {
  word-wrap: break-word;
}
</style>
