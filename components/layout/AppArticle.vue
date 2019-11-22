<template>
  <article :class="$style.article">
    <h1>{{ title }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-if="body" v-html="$md.render(body)" />
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      default: null
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
