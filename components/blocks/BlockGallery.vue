<template>
  <block-wrapper>
    <div class="gallery">
      <skip-link-title class="title" :title="$t('pages.home.title')" />
      <app-image src="/media/images/image-1.jpg?nf_resize=fit&w=518&h=316" class="image-1" width="518" height="316" />
      <app-image src="/media/images/image-2.jpg?nf_resize=fit&w=391&h=537" class="image-2" width="391" height="537" />
      <app-image src="/media/images/image-3.jpg?nf_resize=fit&w=391&h=537" class="image-3" width="391" height="537" />
    </div>
  </block-wrapper>
</template>

<script>
import SkipLinkTitle from '@/components/SkipLinkTitle.vue'
import BlockWrapper from '@/components/blocks/BlockWrapper.vue'
import AppImage from '@/components/AppImage.vue'

export default {
  components: {
    SkipLinkTitle,
    BlockWrapper,
    AppImage
  }
}
</script>

<style lang="postcss" scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1em 1fr 1fr;
  grid-template-rows: auto 20vw 20vw;
  grid-template-areas:
    'title  title title title'
    '.  image-2 image-2 image-3'
    'image-1 image-2 image-2 image-3';

  @media (--viewport-md) {
    grid-template-columns: 1fr 1em 1fr 1fr;
    grid-template-rows: repeat(2, 12em);
    grid-template-areas:
      'title image-2 image-2 image-3'
      'image-1 image-2 image-2 image-3';
  }
}

.title {
  grid-area: title;
  align-self: end;
  margin-bottom: 0.5rem;
}

.image-1 {
  grid-area: image-1;
  grid-column: 1 / 3;
  z-index: var(--gallery-photo-1);
}

.image-2 {
  grid-area: image-2;
}

.image-3 {
  grid-area: image-3;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
