<template>
  <div>
    <input v-model="search" type="search" @input="searchFor">
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
    const allToys = await axios.get('http://localhost:3000/toys.json')
    return {
      allToys: allToys.data
    }
  },
  data () {
    return {
      search: '',
      toys: []
    }
  },
  mounted () {
    this.toys = this.allToys || []
  },
  methods: {
    searchFor () {
      this.toys = this.allToys.filter(item =>
        item.title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  head () {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
