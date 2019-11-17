import { shallowMount } from '@vue/test-utils'
import Toys from '@/pages/toys.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Toys, {
    data () {
      return {
        toys: [
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
      }
    }
  })
})

describe('Toys', () => {
  describe('searchFor', () => {
    it('finds toys when the searchterm starts with the title of a toy', () => {
      wrapper.vm.search = 'Aankleed'
      wrapper.vm.filterToys()
      expect(wrapper.vm.toys[0].title).toBe('Aankleedpop')
    })
    it('finds toys when the searchterm starts with the title of a toy case insensitive', () => {
      wrapper.vm.search = 'aankleed'
      wrapper.vm.filterToys()
      expect(wrapper.vm.toys[0].title).toBe('Aankleedpop')
    })
    it('finds toys when the searchterm includes letters of a title of a toy in the middle of the searchterm', () => {
      wrapper.vm.search = 'kleed'
      wrapper.vm.filterToys()
      expect(wrapper.vm.toys[0].title).toBe('Aankleedpop')
    })
    it('searchFor', () => {
      wrapper.vm.search = 'áánkleed'
      wrapper.vm.filterToys()
      expect(wrapper.vm.toys.length).toBe(0)
    })
    it('searchFor', () => {
      wrapper.vm.search = 'test zonder resultaten'
      wrapper.vm.filterToys()
      expect(wrapper.vm.toys.length).toBe(0)
    })
    it('searchFor', () => {
      wrapper.vm.search = ''
      wrapper.vm.filterToys()
      expect(wrapper.vm.toys.length).toBe(wrapper.vm.allToys.length)
    })
    it('searchFor', () => {
      wrapper.vm.search = ''
      wrapper.vm.filterToys()
      wrapper.vm.filterToysByCategory = jest.fn()
      expect(wrapper.vm.filterToysByCategory).toBeCalled()
    })
  })
})
