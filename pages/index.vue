<template>
  <div>
    home
    <ul>
      <li v-for="toy in toys" :key="toy.title">
        {{ toy.title }} - {{ toy.category }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    const toys = await axios.get('http://localhost:3000/toys.json')
    return {
      toys: toys.data
    }
  },
  head () {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
