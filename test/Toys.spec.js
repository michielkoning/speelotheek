import { shallowMount } from '@vue/test-utils'
import Toys from '@/pages/toys.vue'

let wrapper
const mockToys = [
  {
    title: '(T)weetjes Jacht memory 3 combi Puzzel',
    category: 'G'
  },
  {
    title: '3D puzzel',
    category: 'P'
  },
  {
    title: 'Aankleedpop',
    category: 'P'
  },
  {
    title: 'ABC -spel',
    category: 'F'
  }
]

beforeEach(() => {
  wrapper = shallowMount(Toys, {
    data () {
      return {
        toys: mockToys
      }
    }
  })
})

describe('Toys', () => {
  describe('filterToysBySearchTerm', () => {
    it('finds toys when the searchterm starts with the title of a toy', () => {
      const search = 'Aankleed'
      const toys = wrapper.vm.filterToysBySearchTerm(mockToys, search)
      expect(toys[0].title).toBe('Aankleedpop')
    })
    it('finds toys when the searchterm starts with the title of a toy case insensitive', () => {
      const search = 'aankleed'
      const toys = wrapper.vm.filterToysBySearchTerm(mockToys, search)
      expect(toys[0].title).toBe('Aankleedpop')
    })
    it('finds toys when the searchterm includes letters of a title of a toy in the middle of the searchterm', () => {
      const search = 'kleed'
      const toys = wrapper.vm.filterToysBySearchTerm(mockToys, search)
      expect(toys[0].title).toBe('Aankleedpop')
    })
    it('searchFor', () => {
      const search = 'áánkleed'
      const toys = wrapper.vm.filterToysBySearchTerm(mockToys, search)
      expect(toys.length).toBe(0)
    })
    it('searchFor', () => {
      const search = 'test zonder resultaten'
      const toys = wrapper.vm.filterToysBySearchTerm(mockToys, search)
      expect(toys.length).toBe(0)
    })
    it('searchFor', () => {
      const search = ''
      const toys = wrapper.vm.filterToysBySearchTerm(mockToys, search)
      expect(toys.length).toBe(wrapper.vm.allToys.length)
    })
  })
  describe('filterToysByCategory', () => {
    it('filterToysByCategory', () => {
      const categories = []
      const toys = wrapper.vm.filterToysByCategory(mockToys, categories)
      expect(toys).toBe(mockToys)
    })
    it('filterToysByCategory', () => {
      const categories = ['P']
      const toys = wrapper.vm.filterToysByCategory(mockToys, categories)
      expect(toys[0].category).toBe('P')
    })
    it('filterToysByCategory', () => {
      const categories = ['G', 'P']
      const toys = wrapper.vm.filterToysByCategory(mockToys, categories)
      expect(toys[0].category).toBe('G')
      expect(toys[1].category).toBe('P')
    })
  })
  describe('filterToys', () => {
    it('searchFor', () => {
      // wrapper.vm.filterToys()
      // wrapper.vm.filterToysByCategory = jest.fn()
      // expect(wrapper.vm.filterToysByCategory).toBeCalled()
    })
  })
})
