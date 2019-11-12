<template>
  <input v-model="search" type="search" @input="search">
</template>

<script>
export default {
  methods: {
    search () {
      this.$emit('search')
    }
  }
}
</script>
