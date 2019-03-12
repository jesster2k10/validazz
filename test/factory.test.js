import Validator from '../src/factory'

describe('validator', () => {
  test('it initalizes a factory', () => {
    expect(Validator.factory()).toEqual(new Validator())
    expect(Validator.factory()).toBeDefined()
  })

  test('it can be setup with rules', () => {
    const val1 = new Validator([
      { runWithValue: () => {} },
      { runWithValue: () => {} },
      { runWithValue: () => {} },
    ])
    expect(val1.rules).toBeDefined()
    expect(val1.rules.length).toBe(3)
    const val2 = Validator.factory([
      { runWithValue: () => {} },
      { runWithValue: () => {} },
    ])
    expect(val2.rules).toBeDefined()
    expect(val2.rules.length).toBe(2)
  })

  test('it can add rules properly', () => {
    const validator = new Validator()
    expect(validator.rules.length).toBe(0)
    validator.addRule({ runWithValue: () => {} })
    expect(validator.rules).toBeDefined()
    expect(validator.rules.length).toBe(1)
  })

  test('it can add rules properly on factory', () => {
    const validator = Validator.factory()
    expect(validator.rules.length).toBe(0)
    validator.addRule({ runWithValue: () => {} })
    expect(validator.rules).toBeDefined()
    expect(validator.rules.length).toBe(1)
  })
})
