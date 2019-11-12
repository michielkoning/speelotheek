<template>
  <div>
    <input v-model="search" type="search" @keyup="searchFor">
    {{ search }}
    <ul v-if="toys.length">
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
  data () {
    return {
      search: 'a'
    }
  },
  methods: {
    searchFor () {
      window.console.log('aa')
      this.toys = []
    }
  },
  head () {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
