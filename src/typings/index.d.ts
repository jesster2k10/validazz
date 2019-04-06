declare module 'validazz' {
  interface ValidationRule {
    runWithValue: (value: string) => boolean
    message?: string
  }
  interface ValidatorResult {
    success: boolean
    failed?: ValidationRule
  }
  class Validator {
    constructor(rules: ValidationRule[])
    rules: ValidationRule[]
    factory(rules: ValidationRule[]): Validator
    runWithValue(value: string): ValidatorResult
    validate(value: string): ValidatorResult
    addRule(rule: ValidationRule): Validator
    addRules(rules: ValidationRule[]): Validator
  }
}
