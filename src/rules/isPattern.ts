import { ValidationRule } from '../types'

export default (pattern: string, message?: string): ValidationRule => ({
  runWithValue: (value: string): boolean => new RegExp(pattern).test(value),
  message,
})
