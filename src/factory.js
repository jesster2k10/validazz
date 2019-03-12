import type { ValidationRule } from './types'
import * as _ from './helpers'

/**
 * Validation Factory, where all the validation magic happens
 *
 */

class Validator {
  constructor(rules: ?(ValidationRule[]) = []) {
    this.rules = rules
  }

  rules: ValidationRule[] = []

  /**
   * Create a new validation factory
   *
   * @param {ValidationRule} rules List of rules to initalize the factory with
   */

  static factory(rules: ?(ValidationRule[]) = []) {
    return new Validator(rules)
  }

  /**
   * Add a rule to the factory
   *
   * @param {ValidationRule} rule A validation rule
   */
  addRule(rule: ValidationRule) {
    this.rules = [...this.rules, rule]
    return this
  }

  /**
   * Add a rules to the factory
   *
   * @param {Array<ValidationRule>} rules An array of rules to add
   */
  addRules(rules: ?(ValidationRule[])) {
    this.rules = [...this.rules, ...rules]
    return this
  }

  /**
   * Run the factory and validate!
   *
   * @param {string} value The string to be validated
   */

  runWithValue(value: ?string): ValidatorResult {
    const failedToRuns = this.rules.filter(
      (rule: ValidationRules) => !rule.runWithValue(value)
    )
    if (_.isEmptyArray(failedToRuns)) {
      return { success: true }
    }
    const failed = _.first(failedToRuns)
    return { success: false, failed }
  }
}

export default Validator
