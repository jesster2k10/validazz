import * as _ from '../helpers/index'
import { ValidationRule } from '../types'

export default (pattern: string): ValidationRule => ({
  runWithValue(value: string): boolean {
    return new RegExp(pattern).test(value)
  },
})
