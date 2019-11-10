<template>
  <main>
    <!-- eslint-disable-next-line -->
    <h1 id="content" tabindex="-1" v-html="title" />
    <slot />
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
main {
  @mixin center var(--container-width-lg);
  padding: 2em var(--gutter);
}
</style>
