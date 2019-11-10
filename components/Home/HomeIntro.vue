<template>
  <div class="wrapper">
    <home-mobile-workshop />
  </div>
</template>

<script>
import HomeMobileWorkshop from '@/components/Home/HomeMobileWorkshop.vue'
export default {
  components: {
    HomeMobileWorkshop
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center var(--container-width-lg);
}
</style>
