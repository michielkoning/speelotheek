<template>
  <div>
    <input v-model="search" type="search" @input="filterToys">
    <input
      id="filter-g"
      v-model="selectedCategories"
      type="checkbox"
      name="filter"
      value="G"
      @change="filterToys"
    >
    <label for="filter-g">G</label>
    <input
      id="filter-p"
      v-model="selectedCategories"
      type="checkbox"
      name="filter"
      value="P"
      @change="filterToys"
    >
    <label for="filter-p">P</label>
    {{ selectedCategories }}
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
      selectedCategories: [],
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
      this.filterToys()
    },
    filterToys () {
      this.toys = this.allToys
      if (this.selectedCategories.length) {
        this.toys = this.allToys.filter(item => this.selectedCategories.includes(item.category))
      }
      this.toys = this.toys.filter(item =>
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
