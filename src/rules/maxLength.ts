import * as _ from '../helpers/index'
import { ValidationRule } from '../types'

export default (max: number): ValidationRule => ({
  runWithValue: (value: string): boolean => {
    if (_.hasText(value)) return value.length <= max
    return false
  },
  message: `Must be at most ${max} long`,
})
