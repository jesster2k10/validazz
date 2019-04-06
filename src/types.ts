/**
 * @callback runWithValue
 * @description The validation function for this rule. It takes the a string/integer value
 * @param {string} value - Value of array element
 * @returns {Boolean} - If it returns true, the field is valid.
 * @example
 *  const rule = {
 *    runWithValue(value) {
 *      return value != null
 *    }
 *  }
 */

/**
 * Validation Rule
 * @typedef {Object} ValidationRule
 * @description A validation rule
 * @property {string} message - A custom error message for this validation rule
 * @property {runWithValue} runWithValue - Validation callback
 * @example
 *  // Basic Example
 *  const validationRule = {
 *    message: 'This field is required',
 *    runWithValue(value) {
 *      return value != null
 *    }
 *  }
 *
 *  // Example with parameters
 *  const minimum = (min) => ({
 *    message: `Amount must be greater than ${min}`,
 *    runWithValue(value) {
 *      const value = Number(value)
 *      return value > min
 *    }
 *  })
 */
export interface ValidationRule {
  runWithValue: (value: string) => boolean;
  message?: string;
}

/**
 * ValidatorResult
 * @typedef {Object} ValidatorResult
 * @description The validation result
 * @property {Boolean} success - The outcome of the validation
 * @property {ValidationRule} failed - An optional value. Returns the rule that failed to validate
 * @example
 *  const { success, failed } = Validator.factory(rules.isRequired).validate('hello')
 *  if (success) {
 *    alert('validated')
 *  } else {
 *    const { message } = failed
 *    alert(`Failed: ${message}`)
 *  }
 *
 *
 */
export interface ValidatorResult {
  success: boolean;
  failed?: ValidationRule;
  allFailed?: ValidationRule[];
}
