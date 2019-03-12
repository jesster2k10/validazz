import * as _ from '../../src/helpers/strings'

describe('string helpers', () => {
  test('it can detect if a string is emtpy', () => {
    expect(_.hasText('a')).toBe(true)
    expect(_.hasText('')).toBe(false)
    expect(_.hasText('    ')).toBe(false)
    expect(_.hasText(null)).toBe(false)
    expect(_.hasText(0)).toBe(false)
    expect(_.hasText({})).toBe(false)
    expect(_.hasText(false)).toBe(false)
    expect(_.hasText(undefined)).toBe(false)
    expect(_.hasText([])).toBe(false)
  })
})
