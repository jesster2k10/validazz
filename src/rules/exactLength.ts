import * as _ from '../helpers/index'
import { ValidationRule } from '../types'

export default (exact: number): ValidationRule => ({
  runWithValue: (value: string): boolean => {
    if (_.hasText(value)) return value.length === exact
    return false
  },
  message: `Must be ${exact} long`,
})
