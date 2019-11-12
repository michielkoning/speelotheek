import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Logo from '@/pages/index.vue'

let wrapper
jest.mock('axios')

const mockResponse = [
  {
    'title': '(T)weetjes Jacht memory 3 combi Puzzel',
    'category': 'G'
  },
  {
    'title': '3D puzzel',
    'category': 'P'
  },
  {
    'title': 'Aankleedpop',
    'category': 'P'
  },
  {
    'title': 'ABC -spel',
    'category': 'F'
  }
]

beforeEach(() => {
  wrapper = shallowMount(Logo, {
    data () {
      return {
        'allToys': mockResponse
      }
    }
  })
  axios.get = () =>
    new Promise((resolve) => {
      resolve(mockResponse)
    })
})

describe('Logo', () => {
  describe('searchFor', () => {
    it('searchFor', () => {
      wrapper.vm.search = 'Aankleed'
      wrapper.vm.searchFor()
      expect(wrapper.vm.toys[0].title).toBe('Aankleedpop')
    })
    it('searchFor', () => {
      wrapper.vm.search = 'aankleed'
      wrapper.vm.searchFor()
      expect(wrapper.vm.toys[0].title).toBe('Aankleedpop')
    })
    it('searchFor', () => {
      wrapper.vm.search = 'áánkleed'
      wrapper.vm.searchFor()
      expect(wrapper.vm.toys.length).toBe(0)
    })
    it('searchFor', () => {
      wrapper.vm.search = 'test zonder resultaten'
      wrapper.vm.searchFor()
      expect(wrapper.vm.toys.length).toBe(0)
    })
    it('searchFor', () => {
      wrapper.vm.search = ''
      wrapper.vm.searchFor()
      expect(wrapper.vm.toys.length).toBe(wrapper.vm.allToys.length)
    })
  })
})
