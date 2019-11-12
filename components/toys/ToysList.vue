<template>
  <ul v-if="toys.length">
    <toy-item v-for="toy in toys" :key="toy.title" :toy="toy" />
  </ul>
</template>

<script>
import ToyItem from '@/components/toys/ToyItem.vue'
export default {
  components: {
    ToyItem
  },
  props: {
    toys: {
      type: Array,
      required: true
    }
  }
}
</script>
