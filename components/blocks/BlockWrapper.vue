<template>
  <section :class="$style.section">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <slot />
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper
  }
}
</script>

<style lang="postcss" module>
.section {
  padding: 1.5em 0;
  @media (--viewport-md) {
    padding: 3em 0;
  }
}

.wrapper {
  @mixin center var(--container-width-lg);
}
</style>
