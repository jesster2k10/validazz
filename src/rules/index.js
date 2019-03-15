// @flow
import * as _ from '../helpers'
import type { ValidationRule } from '../types'

export const isRequired: ValidationRule = {
  runWithValue: (value: string) => {
    if (value === null || value === undefined) return false
    if (typeof value === 'string') return _.hasText(value)
    return value !== null || value !== undefined
  },
  message: 'This field is required',
}

export const minLength = (min: number): ValidationRule => ({
  runWithValue: (value: string) => {
    if (_.hasText(value)) return value.length >= min
    return false
  },
  message: `Must be at least ${min} long`,
})

export const maxLength = (max: number): ValidationRule => ({
  runWithValue: (value: string) => {
    if (_.hasText(value)) return value.length <= max
    return false
  },
  message: `Must be at most ${max} long`,
})

export const exactLength = (exact: number): ValidationRule => ({
  runWithValue: (value: string) => {
    if (_.hasText(value)) return value.length === exact
    return false
  },
  message: `Must be ${exact} long`,
})

export const isPattern = (pattern: string): ValidationRule => ({
  runWithValue: (value: string) => new RegExp(pattern).test(value),
})

export const isMatch = (pattern: string): ValidationRule => ({
  runWithValue(value: string) {
    return new RegExp(pattern).test(value)
  },
})

export const isString: ValidationRule = isPattern('^[a-zA-Z]+$')
export const isDigit: ValidationRule = isPattern('^[0-9]+$')
export const isNumeric: ValidationRule = isPattern('^[\\+\\-]?[0-9\\.,]+$')
export const isEmail: ValidationRule = isPattern(
  '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
)
export const isUppercase: ValidationRule = isPattern('[A-Z\\s]')
export const containsUppercase: ValidationRule = isPattern('.*[A-Z]+.*')
export const containsLowercase: ValidationRule = isPattern('.*[a-z]+.*')
