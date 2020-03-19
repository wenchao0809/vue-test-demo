import Counter from '@/views/counter/count.vue'
import { mount } from '@vue/test-utils'

describe('Count.vue', () => {
    const wrapper = mount(Counter)
    // 也便于检查已存在的元素
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('.increase_button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
  it('button click should decrease the count', () => {
    expect(wrapper.vm.count).toBe(1)
    const button = wrapper.find('.decrease_button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(0)
  })
})