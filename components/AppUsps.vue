<template>
  <ul :class="$style.list">
    <li :class="$style['list-item']">
      <icon-star-empty aria-hidden="true" width="26" height="26" :class="$style.icon" />
      <span :class="$style.title">{{ $t('header.usps.quality') }}</span>
    </li>
    <li :class="$style['list-item']">
      <icon-spare-parts aria-hidden="true" width="24" height="24" :class="$style.icon" />
      <span :class="$style.title">{{ $t('header.usps.stock') }}</span>
    </li>
    <li :class="$style['list-item']">
      <icon-service aria-hidden="true" width="24" height="24" :class="$style.icon" />
      <span :class="$style.title">{{ $t('header.usps.service') }}</span>
    </li>
  </ul>
</template>

<script>
import IconService from '@/assets/icons/service.svg'
import IconSpareParts from '@/assets/icons/spare-parts.svg'
import IconStarEmpty from '@/assets/icons/star-empty.svg'

export default {
  components: {
    IconService,
    IconSpareParts,
    IconStarEmpty
  }
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  text-transform: uppercase;
  margin-top: 1em;
  font-size: 0.9em;
  @media (--viewport-md) {
    font-size: 0.8em;
  }
  @media (--viewport-lg) {
    font-size: 0.9em;
  }
  @media (--show-full-navigation) {
    margin-top: 0;
    display: flex;
  }
}

.list-item {
  display: flex;
  margin-bottom: 0.5em;

  @media (--show-full-navigation) {
    & + li {
      margin-left: 1em;
    }
  }
}

.title {
  margin-left: 0.5em;
}

.icon {
  margin-top: 0.1em;
  flex: 0 0 auto;
}
</style>
