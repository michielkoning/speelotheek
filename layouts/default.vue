<template>
  <div class="page">
    <app-header />
    <main>
      <nuxt class="content" />
    </main>
    <error-handler />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ErrorHandler from '@/components/layout/ErrorHandler.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ErrorHandler
  },
  head () {
    return this.$nuxtI18nSeo()
  }
}
</script>

<style lang="postcss" scoped>
main {
  padding-top: 3em;
  @media (--show-full-navigation) {
    padding-top: 0;
  }
}

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
}
</style>
