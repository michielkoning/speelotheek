<template>
  <div>
    <h1>{{ text.title }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(text.body)" />
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const locale = app.i18n.locale
    const text = await require(`~/assets/content/pages/${locale}/vrijwilligers.json`)
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
