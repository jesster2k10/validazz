import * as r from '../src/rules'

describe('validation rules', () => {
  test('isRequired', () => {
    expect(r.isRequired.runWithValue()).toBeFalsy()
    expect(r.isRequired.runWithValue('')).toBeFalsy()
    expect(r.isRequired.runWithValue(null)).toBeFalsy()
    expect(r.isRequired.runWithValue([])).toBeTruthy()
    expect(r.isRequired.runWithValue([{}])).toBeTruthy()
    expect(r.isRequired.runWithValue(undefined)).toBeFalsy()
    expect(r.isRequired.runWithValue({})).toBeTruthy()
    expect(r.isRequired.runWithValue('hello')).toBeTruthy()
    expect(r.isRequired.runWithValue(0)).toBeTruthy()
    expect(r.isRequired.runWithValue({ a: 'a' })).toBeTruthy()
    expect(r.isRequired.runWithValue([{ a: 'a' }])).toBeTruthy()
  })

  test('minLength', () => {
    expect(r.minLength(3).runWithValue('a')).toBeFalsy()
    expect(r.minLength(3).runWithValue('abc')).toBeTruthy()
  })

  test('maxLength', () => {
    expect(r.maxLength(3).runWithValue('a')).toBeTruthy()
    expect(r.maxLength(3).runWithValue('abc')).toBeTruthy()
    expect(r.maxLength(3).runWithValue('abcd')).toBeFalsy()
  })

  test('exactLength', () => {
    expect(r.exactLength(3).runWithValue('abc')).toBeTruthy()
    expect(r.exactLength(3).runWithValue('abcd')).toBeFalsy()
  })

  test('isString', () => {
    expect(r.isString.runWithValue('abcd')).toBeTruthy()
    expect(r.isString.runWithValue({})).toBeFalsy()
    expect(r.isString.runWithValue([])).toBeFalsy()
    expect(r.isString.runWithValue(0)).toBeFalsy()
  })
})
