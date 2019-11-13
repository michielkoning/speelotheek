<template>
  <div>
    <h1>{{ text.title }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(text.body)" />
    <form-contact />
  </div>
</template>

<script>
import FormContact from '@/components/FormContact.vue'

export default {
  components: {
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
  }
}
</script>
