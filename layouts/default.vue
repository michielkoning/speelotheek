<template>
  <div :class="$style.page">
    <app-header />
    <div :class="$style['page-content']">
      <main :class="$style.main">
        <nuxt />
      </main>
      <app-sidebar />
    </div>
    <error-handler />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import ErrorHandler from '@/components/layout/ErrorHandler.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
    ErrorHandler
  },
  head () {
    return this.$nuxtI18nSeo()
  }
}
</script>

<style lang="postcss" module>
.page-content {
  @mixin center;
  flex: 1 0 auto;
   display: grid;
  grid-template-columns: 2fr 1fr;
}

.page {
  background-image: url('http://getwallpapers.com/wallpaper/full/3/0/c/188441.jpg');
  background-attachment: fixed;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

</style>
