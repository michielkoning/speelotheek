<template>
  <app-article title="Speelgoed">
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
  </app-article>
</template>

<script>
import ToysList from '@/components/toys/ToysList.vue'
import AppArticle from '@/components/layout/AppArticle.vue'

export default {
  components: {
    AppArticle,
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
  mounted () {
    this.allToys = this.toys || []
  },
  methods: {
    filterToys () {
      let toys = this.allToys
      toys = this.filterToysByCategory(toys, this.selectedCategories)
      toys = this.filterToysBySearchTerm(toys, this.search)
      this.toys = toys
    },
    filterToysByCategory (toys, categories) {
      if (!categories.length) { return toys }
      return toys.filter(item => categories.includes(item.category))
    },
    filterToysBySearchTerm (toys, term) {
      return toys.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()))
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
