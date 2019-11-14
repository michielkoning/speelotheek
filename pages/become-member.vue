<template>
  <app-article :text="text" />
</template>

<script>
import AppArticle from '@/components/layout/AppArticle.vue'
export default {
  components: {
    AppArticle
  },
  async asyncData ({ app }) {
    const locale = app.i18n.locale
    const text = await require(`~/assets/content/pages/${locale}/lid-worden.json`)
    return {
      text
    }
  },
  head () {
    return {
      title: this.text.title
    }
  },
  nuxtI18n: {
    paths: {
      en: '/become-member',
      nl: '/lid-worden'
    }
  }
}
</script>
