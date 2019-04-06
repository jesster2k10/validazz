import * as _ from './helpers/index'
import { ValidatorResult, ValidationRule } from './types'

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

  public constructor(rules: ValidationRule[] = []) {
    this.rules = rules
  }

  public rules: ValidationRule[] = []

  /**
   * Create a new validation factory
   *
   * @param {ValidationRule[]} rules - List of rules to initalize the factory with
   * @returns {Validator} - Validator instance
   *
   * @example
   *  const validator = Validator.factory([])
   */

  public static factory(rules: ValidationRule[] = []): Validator {
    return new Validator(rules)
  }

  /**
   * Add a rule to the factory
   *
   * @param {ValidationRule} rule A validation rule
   * @returns {Validator} - Validator instance
   */
  public addRule(rule: ValidationRule): Validator {
    this.rules = [...this.rules, rule]
    return this
  }

  /**
   * Add a rules to the factory
   *
   * @param {ValidationRule[]} rules An array of rules to add
   * @returns {Validator} - Validator instance
   */
  public addRules(rules: ValidationRule[]): Validator {
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

  public runWithValue(value: string): ValidatorResult {
    return this.validate(value)
  }

  /**
   * Validates a string
   * @param {String} value - The string to be validated
   * @returns {ValidatorResult} - The validation outcome
   * @example
   * const { success, failed } = Validator.factory(rules.isRequired).validate('hello')
   */

  public validate(value: string): ValidatorResult {
    const failedToRuns = this.rules.filter(
      (rule: ValidationRule): boolean => !rule.runWithValue(value),
    )
    if (_.isEmptyArray(failedToRuns)) {
      return { success: true }
    }
    const failed = failedToRuns[0]
    return { success: false, failed, allFailed: failedToRuns }
  }
}

export default Validator
