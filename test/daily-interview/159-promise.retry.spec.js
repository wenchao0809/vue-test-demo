import { retry} from '@/dayily-interview/159-promise.retry'

function testFail(_, reject) {
  reject(new Error('error'))
}
function testSuccess(resolve) {
  setTimeout(()=> resolve('success'), 1000)
}
let count = 0
function testRetrySuccess(resolve, reject) {
  ++count
  count > 3 ? resolve('success') : reject(new Error('error'))
}
describe('159-promise.retry.js', () => {
  it('Promise retry 5 times reject',() => {
    return retry(testFail, 5)
      .catch(error => {
        expect(error.message).toBe('error')
      })
  })
  it('Promise retry 5 times resolve',() => {
    return retry(testSuccess, 5)
      .then(res=> {
        expect(res).toBe('success')
      })
  })
  it('Promise retry 5 times reject with 500ms', () => {
    return retry(testFail, 5, 500).catch((error) => {
      expect(error.message).toBe('error')
    })
  })
  it('Promise retry 5 times but third time resolve', () => {
    return retry(testRetrySuccess, 5, 500).then((res) => {
      expect(res).toBe('success')
    })
  })
})