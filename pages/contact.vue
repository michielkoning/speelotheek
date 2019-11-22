<template>
  <app-article title="Contact">
    <form-contact />
  </app-article>
</template>

<script>
import AppArticle from '@/components/layout/AppArticle.vue'
import FormContact from '@/components/FormContact.vue'
export default {
  components: {
    AppArticle,
    FormContact
  },
  async asyncData ({ app }) {
    const locale = app.i18n.locale
    const text = await require(`~/assets/content/pages/${locale}/contact.json`)
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
      en: '/contact',
      nl: '/contact'
    }
  }
}
</script>
