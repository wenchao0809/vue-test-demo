import Demo from '@/views/demo'
import { mount } from '@vue/test-utils'

describe('demo.vue', () => {
  const wrapper = mount(Demo)
  // 也便于检查已存在的元素
  it('has a button', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})