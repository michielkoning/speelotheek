<template>
  <nav aria-labelledby="social-links-title">
    <h2 id="social-links-title">
      {{ $t('blocks.socialMedia.title') }}
    </h2>
    <ul :class="$style.list">
      <li>
        <a href="https://www.facebook.com/speelotheekwageningen/" rel="noopener" target="_blank" :class="$style.link">
          <icon-facebook aria-hidden="true" width="32" height="32" />
          <span class="sr-only">
            {{
              $t('blocks.socialMedia.viewUsOn', {
                companyName: $t('address.companyName'),
              })
            }}
            Facebook</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconFacebook from '@/assets/icons/facebook.svg'

export default {
  components: {
    IconFacebook
  }
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  display: flex;
  margin-bottom: 1em;
}

.link {
  @mixin link-reset;
  margin-right: 0.5em;
}
</style>
