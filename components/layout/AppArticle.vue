<template>
  <article :class="$style.article">
    <h1>{{ text.title }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(text.body)" />
  </article>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" module>
.article {
  background: #fff;
  position: relative;
  padding: 2em;
  border: 5px solid #e6e6e6;
  margin-bottom: 3em;
}
</style>
