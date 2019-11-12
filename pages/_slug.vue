<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    const text = await require(`~/assets/content/nl/${params.slug}.json`)
    return {
      text
    }
  },
  data () {
    return {
      search: '',
      toys: []
    }
  },
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
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
