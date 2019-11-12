<template>
  <div>
    <input v-model="search" type="search" @input="searchFor">
    <toys-list :toys="toys" />
  </div>
</template>

<script>
import axios from 'axios'
import ToysList from '@/components/toys/ToysList.vue'
export default {
  components: {
    ToysList
  },
  async asyncData () {
    const allToys = await axios.get('https://priceless-hodgkin-a8eb9f.netlify.com/toys.json')
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
      title: this.$t('pages.home.title'),
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
