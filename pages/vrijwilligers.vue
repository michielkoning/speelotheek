<template>
  <div>
    <h1>{{ text.title }}</h1>
    {{ text.body }}
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    const text = await require(`~/assets/content/pages/nl/vrijwilligers.json`)
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
