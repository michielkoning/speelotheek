<template>
  <!-- eslint-disable-next-line -->
  <h1 id="content" tabindex="-1" v-html="title" />
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
