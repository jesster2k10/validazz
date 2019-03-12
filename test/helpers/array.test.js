import * as _ from '../../src/helpers/array'

describe('array helpers', () => {
  test('empty array', () => {
    expect(_.isEmptyArray(['a'])).toBe(false)
    expect(_.isEmptyArray([0, 1, 2])).toBe(false)
    expect(_.isEmptyArray([])).toBe(true)
    expect(_.isEmptyArray(null)).toBe(true)
    expect(_.isEmptyArray(undefined)).toBe(true)
  })

  test('returns first element', () => {
    expect(_.first(['a'])).toBe('a')
    expect(_.first(['a', 'b', 'c'])).toBe('a')
    expect(_.first([0, 1, 2, 3])).toBe(0)
  })
})
