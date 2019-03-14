// @flow
import type { ValidationRule, ValidatorResult } from './types'
import * as _ from './helpers'

/**
 * Validation Factory, where all the validation magic happens
 * @class {Validator}
 */

class Validator {
  /**
   * @description Use `Validator.factory()` over a direct constructor
   * @param {ValidationRule[]} rules - List of rules to initalize with
   * @returns {Validator} - Validator Instance
   * @example
   *  const validator = new Validator()
   */

  constructor(rules: ValidationRule[] = []) {
    this.rules = rules
  }

  rules: ValidationRule[] = []

  /**
   * Create a new validation factory
   *
   * @param {ValidationRule[]} rules - List of rules to initalize the factory with
   * @returns {Validator} - Validator instance
   *
   * @example
   *  const validator = Validator.factory([])
   */

  static factory(rules: ValidationRule[] = []) {
    return new Validator(rules)
  }

  /**
   * Add a rule to the factory
   *
   * @param {ValidationRule} rule A validation rule
   * @returns {Validator} - Validator instance
   */
  addRule(rule: ValidationRule) {
    this.rules = [...this.rules, rule]
    return this
  }

  /**
   * Add a rules to the factory
   *
   * @param {ValidationRule[]} rules An array of rules to add
   * @returns {Validator} - Validator instance
   */
  addRules(rules: ValidationRule[]) {
    this.rules = this.rules.concat(rules)
    return this
  }

  /**
   * Run the factory and validate!
   *
   * @param {string} value The string to be validated
   * @deprecated Use `validate(value: string)` instead. Depricated since v1.1
   * @see validate
   * @returns {ValidatorResult} - The validation outcome
   */

  runWithValue(value: string): ValidatorResult {
    return this.validate(value)
  }

  /**
   * Validates a string
   * @param {String} value - The string to be validated
   * @returns {ValidatorResult} - The validation outcome
   * @example
   * const { success, failed } = Validator.factory(rules.isRequired).validate('hello')
   */

  validate(value: string): ValidatorResult {
    const failedToRuns = this.rules.filter(
      (rule: ValidationRule) => !rule.runWithValue(value)
    )
    if (_.isEmptyArray(failedToRuns)) {
      return { success: true }
    }
    const failed = _.first(failedToRuns)
    return { success: false, failed }
  }
}

export default Validator
