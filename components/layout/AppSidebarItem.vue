<template>
  <section :aria-label="title" :class="$style.block">
    <h1>{{ title }}</h1>
    <slot />
  </section>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" module>
.block {
  background: #fff;
  position: relative;
  padding: 2em;
  border: 5px solid #e6e6e6;
  margin-bottom: 3em;
}
</style>
