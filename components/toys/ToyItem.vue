<template>
  <li>
    {{ toy.title }} - {{ toy.category }}
  </li>
</template>

<script>
export default {
  props: {
    toy: {
      type: Object,
      required: true
    }
  }
}
</script>
