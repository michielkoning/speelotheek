<template>
  <div>
    <p v-for="item in text" :key="item">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true
    }
  }
}
</script>
