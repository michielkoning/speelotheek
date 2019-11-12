import { shallowMount } from '@vue/test-utils'
import Logo from '@/pages/index.vue'

let wrapper
const mockSetSelectedCarModel = jest.fn()
const mockModelId = '123'

beforeEach(() => {
  wrapper = shallowMount(Logo, {
    computed: {
      $t: () => () => '',
      allModels: () => [],
      selectedCar: () => ({ modelId: mockModelId })
    }
  })
})

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('searchFor', () => {
    expect(true).toBe(true)
  })
})
