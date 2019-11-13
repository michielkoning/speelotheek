<template>
  <div>
    <input v-model="search" type="search" @input="searchFor">
    <toys-list :toys="toys" />
  </div>
</template>

<script>
import ToysList from '@/components/toys/ToysList.vue'
export default {
  components: {
    ToysList
  },
  async asyncData () {
    return {
      toys: await require(`~/assets/content/toys.json`)
    }
  },
  data () {
    return {
      search: '',
      allToys: []
    }
  },
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  },
  mounted () {
    this.allToys = this.toys || []
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
  },
  nuxtI18n: {
    paths: {
      en: '/toys',
      nl: '/speelgoed'
    }
  }

}
</script>
