import * as _ from '../helpers/index'
import { ValidationRule } from '../types'

export default (min: number): ValidationRule => ({
  runWithValue: (value: string): boolean => {
    if (_.hasText(value)) return value.length >= min
    return false
  },
  message: `Must be at least ${min} long`,
})
