import * as _ from '../helpers/index'
import { ValidationRule } from '../types'

const isRequired: ValidationRule = {
  runWithValue: (value: string): boolean => {
    if (value === null || value === undefined) return false
    if (typeof value === 'string') return _.hasText(value)
    return value !== null || value !== undefined
  },
  message: 'This field is required',
}

export default isRequired
