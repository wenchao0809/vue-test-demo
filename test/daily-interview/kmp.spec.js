import { indexOf} from '@/dayily-interview/kmp'

describe('kmp.js', () => {
  it('match success',() => {
    expect(indexOf.call('test success', 'c')).toBe(7)
  })
  it('match fail',() => {
    expect(indexOf.call('test success', 'z')).toBe(-1)
  })
  it('match success with from index', () => {
    expect(indexOf.call('test success', 's', 3)).toBe(5)
  })
  it('match fail with from index', () => {
    expect(indexOf.call('test success', 't', 4)).toBe(-1)
  })
  it('match success with complex', () => {
    expect(indexOf.call('test success', 'ucce', 3)).toBe(6)
  })
  it('match with negative from index', () => {
    expect(indexOf.call('test success', 'ucce', -16)).toBe(6)
  })
  it('match with negative from index', () => {
    expect(indexOf.call('test success', 'ss', -1)).toBe(-1)
  })
  it('match with negative from index -2', () => {
    expect(indexOf.call('test success', 'ss', -2)).toBe(10)
  })
  it('match with zero from index', () => {
    expect(indexOf.call('test success', 'ss', 0)).toBe(10)
  })
})